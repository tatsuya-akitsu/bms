'use client'
import { CharacterData, FilterItem } from '@/types';
import React, { cache, use, useCallback, useEffect, useRef, useState } from 'react';
import CharacterTable from '@/components/organisms/character/table';
import styles from '@/app/styles/object/components/table.module.css'
import filterStyles from '@/app/styles/object/components/filtering.module.css'
import iconStyles from '@/app/styles/object/components/icon.module.css'
import ChevronUp from '@/components/icons/ChevronUp';
import ChevronDown from '@/components/icons/ChevronDown';

// const getCharacters = cache(() =>
//   fetch('http://localhost:3000/api/characters').then((res) => res.json())
// );

enum sortKey {
  types = 'types',
  attributes = 'attributes',
  sort = 'sort'
}

const Characters = () => {
  const thead = ['', '名前', 'タイプ', '属性', 'キャラ総合力', '詳細', '所持/未所持']
  const [menus, setMenus] = useState<
    Array<{ label: string; value: sortKey; isOpen: boolean }>
  >([
    { label: '表示順', value: sortKey.sort, isOpen: false },
    { label: 'スタイル', value: sortKey.types, isOpen: false },
    { label: '属性', value: sortKey.attributes, isOpen: false },
  ]);

  const [sortMenus, setSortMenus] = useState<{
    [sortKey.attributes]: Array<FilterItem>;
    [sortKey.sort]: Array<FilterItem>;
    [sortKey.types]: Array<FilterItem>;
  }>({
    attributes: [
      { label: '赤属性', value: 'RED', isSelect: false },
      { label: '青属性', value: 'BLUE', isSelect: false },
      { label: '緑属性', value: 'GREEN', isSelect: false },
    ],
    sort: [
      { label: 'キャラ総合力', value: 'comprehensive', isSelect: false },
      { label: '体力', value: 'strength', isSelect: false },
      { label: '攻撃力', value: 'attack', isSelect: false },
      { label: '防御力', value: 'defense', isSelect: false },
    ],
    types: [
      { label: 'アタッカー', value: 'ATTACKER', isSelect: false },
      { label: 'ディフェンダー', value: 'DEFENDER', isSelect: false },
      { label: 'ゲッター', value: 'GETTER', isSelect: false },
    ],
  });
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

  const handleSortContent = (value: sortKey) => {
    setMenus((prev) => prev.map((item) => {
      if (item.value === value) {
        return {
          ...item,
          isOpen: !item.isOpen
        }
      } else {
        return {
          ...item,
          isOpen: false
        }
      }
    }))
  }

  const handleFilter = (value: string, key: sortKey) => {
    setSortMenus((prev) => {
      const updateArray = prev[key].map((item) => {
        if (item.value === value) {
          return {
            ...item,
            isSelect: !item.isSelect,
          };
        } else {
          return {
            ...item,
            isSelect: false,
          };
        }
      })

      return {
        ...prev,
        [key]: updateArray
      }
    })
  }

  // const characters = use<CharacterData[]>(getCharacters());
  return (
    <React.Fragment>
      <div className={filterStyles.box}>
        <ul className={filterStyles.sort_list}>
          {menus.map((menu, i) => (
            <li
              key={i}
              className={filterStyles.sort_item}
            >
              <button
                type="button"
                className={filterStyles.sort_button}
                onClick={() => handleSortContent(menu.value)}
              >
                <span>{menu.label}</span>
                {menu.isOpen ? <ChevronUp /> : <ChevronDown />}
              </button>
              <div
                className={filterStyles.sort_content}
                style={menu.isOpen ? {} : { display: 'none' }}
              >
                <div>
                  <ul className={filterStyles.filter_list}>
                    {sortMenus[menu.value as sortKey].map((item, i) => (
                      <li
                        key={i}
                        className={`${filterStyles.filter_list_item} ${item.isSelect ? filterStyles.is_select : ''}`}
                        onClick={() =>
                          handleFilter(item.value, menu.value as sortKey)
                        }
                      >
                        <span>{item.label}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.inner}>
          <div className={styles.container}>
            <div className={styles.table_wrapper}>
              <div className={styles.table_inner}>
                <CharacterTable
                  data={data}
                  thead={thead}
                  targetId={targetId}
                  loading={loading}
                  onClick={handleHasCharacter}
                />
                <div ref={target}>
                  {hasData && (
                    <div className={iconStyles.loader_box}>
                      <div className={iconStyles.loader}></div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Characters
