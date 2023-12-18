'use client'
import { CharacterData } from '@/types';
import { cache, use, useCallback, useEffect, useRef, useState } from 'react';
import CharacterTable from '@/components/organisms/character/table';
import styles from '@/app/styles/object/components/table.module.css'
import iconStyles from '@/app/styles/object/components/icon.module.css'

// const getCharacters = cache(() =>
//   fetch('http://localhost:3000/api/characters').then((res) => res.json())
// );

const Characters = () => {
  const thead = ['', '名前', 'タイプ', '属性', 'キャラ総合力', '詳細', '所持/未所持']
  const [data, setData] = useState<Array<CharacterData>>([])
  const [page, setPage] = useState<number>(1)
  const [hasData, setHasData] = useState<boolean>(true)
  const [loading, setLoading] = useState<boolean>(false)
  const [targetId, setTargetId] = useState<number>(0)
  const isDevFetchFlg = useRef<boolean>(true)
  const isDevObserverFlg = useRef<boolean>(true)
  const target = useRef<HTMLDivElement>(null)

  const fetchData = async (number: number) => {
    const res = await fetch(
      `http://localhost:3000/api/characters?page=${number}`,
      {
        method: 'GET'
      }
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

  const handleHasCharacter = async (id: number, isHas: boolean) => {
    setTargetId(id)
    setLoading(true)
    const res = await fetch(`http://localhost:3000/api/characters?id=${id}&hasCharacter=${isHas}`, {
      method: 'PATCH'
    });
    if (res.ok) {
      data.filter((character) => character.id === id)[0].hasCharacter = isHas
      setTargetId(0)
      setLoading(false)
    }
  }

  // const characters = use<CharacterData[]>(getCharacters());
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.container}>
          <div className={styles.table_wrapper}>
            <div className={styles.table_inner}>
              <CharacterTable data={data} thead={thead} targetId={targetId} loading={loading} onClick={handleHasCharacter} />
              <div ref={target}>
                {hasData && <div className={iconStyles.loader_box}><div className={iconStyles.loader}></div></div>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Characters
