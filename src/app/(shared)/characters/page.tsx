'use client'
import { CharacterData } from '@/types';
import { cache, use, useCallback, useEffect, useRef, useState } from 'react';
import Character from '@/components/organisms/character';
import ListStyle from '@/app/styles/object/projects/characters.module.css';

// const getCharacters = cache(() =>
//   fetch('http://localhost:3000/api/characters').then((res) => res.json())
// );

const Characters = () => {
  const [data, setData] = useState<Array<CharacterData>>([])
  const [page, setPage] = useState<number>(1)
  const isDevFetchFlg = useRef<boolean>(true)
  const isDevObserverFlg = useRef<boolean>(true)
  const item = useRef<HTMLLIElement>(null)
  const observer = useRef<IntersectionObserver | null>(null)

  const handleObserver = (entries: IntersectionObserverEntry[]) => {
    const target = entries[0]
    if (target.isIntersecting) setPage((prev) => prev + 1)
  }

  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      if (isDevObserverFlg.current) {
        isDevObserverFlg.current = false
        return
      }
    }

    observer.current = new IntersectionObserver(handleObserver, {
      root: document.querySelector(`.${ListStyle.wrapper}`),
      threshold: 1.0,
    });
    if (item.current) observer.current.observe(item.current)
    return () => {
      if (observer.current) observer.current.disconnect()
    }
  }, [data])

  useEffect(() => {
    const fetchData = async () => {
      console.log(page)
      const res = await fetch(
        `http://localhost:3000/api/characters?page=${page}`
      );
      const data = await res.json();

      if (data.length === 0 || data.length < 20) {
        if (item.current && observer.current) {
          observer.current.unobserve(item.current)
        }
        return
      }
      setData((prev) => [...prev, ...data])
    }

    if (process.env.NODE_ENV === 'development') {
      if (isDevFetchFlg.current) {
        isDevFetchFlg.current = false
        return
      }
    }

    fetchData()
  }, [page])

  // const characters = use<CharacterData[]>(getCharacters());
  return (
    <div className={ListStyle.wrapper}>
      <ul className={ListStyle.list}>
        {data.map((character, i) => {
          return (
            <Character
              key={i}
              character={character}
              index={i}
              isLast={i === data.length - 1}
              ref={i === data.length - 1 ? item : null}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default Characters
