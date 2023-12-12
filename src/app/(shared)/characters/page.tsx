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
  const [hasData, setHasData] = useState<boolean>(true)
  const isDevFetchFlg = useRef<boolean>(true)
  const isDevObserverFlg = useRef<boolean>(true)
  const target = useRef<HTMLDivElement>(null)

  const fetchData = async (number: number) => {
    const res = await fetch(
      `http://localhost:3000/api/characters?page=${number}`
    );
    const data: CharacterData[] = await res.json();
    const count = data.length

    if (data.length === 0) {
      setHasData(false)
      return;
    }
    setData((prev) => [...prev, ...data]);
    setHasData(count > 0);
  };

  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      if (isDevObserverFlg.current) {
        isDevObserverFlg.current = false;
        return;
      }
    }

    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          if (hasData) {
            setPage((prev) => prev + 1)
          }
        }
      },
      { threshold: 1.0 }
    )

    if (target.current) {
      observer.observe(target.current)
    }
    return () => {
      if (target.current) {
        observer.unobserve(target.current)
      }
    }
  }, [hasData, target])

  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      if (isDevFetchFlg.current) {
        isDevFetchFlg.current = false;
        return;
      }
    }

    if (page > 0) {
      fetchData(page)
    }
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
            />
          );
        })}
      </ul>
      <div ref={target}>
        {hasData && <p>Load More Characters...</p>}
      </div>
    </div>
  );
}

export default Characters
