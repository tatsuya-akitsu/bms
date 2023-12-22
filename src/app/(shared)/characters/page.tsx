'use client'
import { CharacterData, FilterItem } from '@/types';
import React, { cache, use, useCallback, useEffect, useRef, useState } from 'react';
import CharacterTable from '@/components/organisms/character/table';
import styles from '@/app/styles/object/components/table.module.css'
import filterStyles from '@/app/styles/object/components/filtering.module.css'
import iconStyles from '@/app/styles/object/components/icon.module.css'
import ChevronUp from '@/components/icons/ChevronUp';
import ChevronDown from '@/components/icons/ChevronDown';
import Button from '@/components/modules/Button';

// const getCharacters = cache(() =>
//   fetch('http://localhost:3000/api/characters').then((res) => res.json())
// );

enum sortKey {
  type = 'type',
  attributes = 'attributes',
  status = 'status',
  sort = 'sort'
}

const Characters = () => {
  const thead = ['', '名前', 'タイプ', '属性', 'キャラ総合力', '詳細', '所持/未所持']
  const [menus, setMenus] = useState<
    Array<{ label: string; value: sortKey; isOpen: boolean }>
  >([
    { label: '表示順', value: sortKey.status, isOpen: false },
    { label: 'スタイル', value: sortKey.type, isOpen: false },
    { label: '属性', value: sortKey.attributes, isOpen: false },
  ]);

  const [sortMenus, setSortMenus] = useState<{
    [sortKey.attributes]: Array<FilterItem>;
    [sortKey.status]: Array<FilterItem>;
    [sortKey.type]: Array<FilterItem>;
    [sortKey.sort]: Array<FilterItem>;
  }>({
    attributes: [
      { label: '赤属性', value: 'RED', isSelect: false },
      { label: '青属性', value: 'BLUE', isSelect: false },
      { label: '緑属性', value: 'GREEN', isSelect: false },
    ],
    status: [
      { label: 'キャラ総合力', value: 'comprehensive', isSelect: false },
      { label: '体力', value: 'strength', isSelect: false },
      { label: '攻撃力', value: 'attack', isSelect: false },
      { label: '防御力', value: 'defense', isSelect: false },
    ],
    type: [
      { label: 'アタッカー', value: 'ATTACKER', isSelect: false },
      { label: 'ディフェンダー', value: 'DEFENDER', isSelect: false },
      { label: 'ゲッター', value: 'GETTER', isSelect: false },
    ],
    sort: [
      { label: '昇順', value: 'asc', isSelect: false },
      { label: '降順', value: 'desc', isSelect: false }
    ]
  });
  const [data, setData] = useState<Array<CharacterData>>([])
  const [page, setPage] = useState<number>(0)
  const [hasData, setHasData] = useState<boolean>(true)
  const [loading, setLoading] = useState<boolean>(false)
  const [targetId, setTargetId] = useState<number>(0)
  const [filterKey, setFilterKey] = useState<sortKey | null>(null)
  const isDevFetchFlg = useRef<boolean>(true)
  const isDevObserverFlg = useRef<boolean>(true)
  const target = useRef<HTMLDivElement>(null)

  // const fetchData = async (number: number) => {
  //   const res = await fetch(
  //     `http://localhost:3000/api/characters?page=${number}`,
  //     {
  //       method: 'GET'
  //     }
  //   );
  //   const data: CharacterData[] = await res.json();
  //   const count = data.length

  //   if (data.length === 0) {
  //     setHasData(false)
  //     return;
  //   }
  //   setData((prev) => [...prev, ...data]);
  //   setHasData(count > 0);
  // };

  const fetchData = async (number: number, key?: sortKey) => {
    let data: CharacterData[] = []
    let res: Response
    let count: number = 0
    console.log(`||| arg.filterKey: ${key}`)
    if (key) {
      console.log('keyは来てる？')
      sortMenus[key].forEach(async (item) => {
        if (item.isSelect) {
          switch (key) {
            case sortKey.attributes:
              res = await fetch(
                `http://localhost:3000/api/characters?page=${1}&order=attributes&target=${
                  item.value
                }`
              );
              data = await res.json();
              count = data.length;
              return
            case sortKey.status:
              res = await fetch(
                `http://localhost:3000/api/characters?page=${1}&order=${
                  item.value
                }&sort=${
                  sortMenus[sortKey.sort].filter((item) => item.isSelect)[0]
                    .value
                }`
              );
              data = await res.json();
              count = data.length;
              return
            case sortKey.type:
              res = await fetch(
                `http://localhost:3000/api/characters?page=${1}&order=type&target=${
                  item.value
                }`
              );
              data = await res.json();
              count = data.length;
              return
          }
        }
      })
      setFilterKey(key);
      if (data.length === 0) {
        setHasData(false);
        return;
      }
      setData((prev) => [...data])
    } else {
      res = await fetch(`http://localhost:3000/api/characters?page=${number}`, {
        method: 'GET',
      });
      data = await res.json();
      count = data.length;

      if (data.length === 0) {
        setHasData(false);
        return;
      }

      setData((prev) => [...prev, ...data])
    }

    console.log(`||| data length: ${data.length}`)
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

    console.log(`||| useState the page: ${page}`)

    if (page > 0) {
      fetchData(page)
    }
    if (filterKey) {
      setPage(0)
    }
  }, [page])

  const handleHasCharacter = async (id: number, isHas: boolean) => {
    setTargetId(id)
    setLoading(true)
    const res = await fetch(`http://localhost:3000/api/characters?id=${id}&hasCharacter=${isHas}`, {
      method: 'PATCH'
    });
    if (res.ok) {
      const data: CharacterData[] = await res.json();
      data.filter((character) => character.id === id)[0].hasCharacter = isHas
      setTargetId(0)
      setLoading(false)
    }
  }

  const fetchFilteringData = (key: sortKey) => {
    let index: number = 1;

    sortMenus[key].map(async (item) => {
      if (item.isSelect) {
        let data: CharacterData[]
        let count: number = 0
        let res: Response
        switch (key) {
          case sortKey.attributes:
            res = await fetch(`http://localhost:3000/api/characters?page=${index}&order=attributes&target=${item.value}`)
            data = await res.json()
            count = data.length
            break;
          case sortKey.status:
            res = await fetch(
              `http://localhost:3000/api/characters?page=${index}&order=${item.value}&sort=${sortMenus[sortKey.sort].filter((item) => item.isSelect)[0].value}`
            );
            data = await res.json()
            count = data.length
            break;
          case sortKey.type:
            res = await fetch(
              `http://localhost:3000/api/characters?page=${index}&order=type&target=${item.value}`
            );
            data = await res.json()
            count = data.length
            break;
        }
        setData((prev) => [...data]);
        setHasData(count > 0);
      }
    })
    setFilterKey(key);
  }

  const resetFilter = (key: sortKey) => {
    setFilterKey(null)
    setSortMenus((prev) => {
      const updateArray = prev[key].map((item) => {
        return {
          ...item,
          isSelect: false
        }
      })

      return {
        ...prev,
        [key]: updateArray
      }
    })
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

  const handleSortFilter = (value: string) => {
    setSortMenus((prev) => {
      const updateArray = prev[sortKey.sort].map((item) => {
        if (item.value === value) {
          return {
            ...item,
            isSelect: !item.isSelect
          }
        } else {
          return {
            ...item,
            isSelect: false
          }
        }
      })

      return {
        ...prev,
        [sortKey.sort]: updateArray
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
                <div className={filterStyles.sort_inner}>
                  <ul className={filterStyles.filter_list}>
                    {sortMenus[menu.value as sortKey].map((item, i) => (
                      <li
                        key={i}
                        className={`${filterStyles.filter_list_item} ${
                          item.isSelect ? filterStyles.is_select : ''
                        }`}
                        onClick={() =>
                          handleFilter(item.value, menu.value as sortKey)
                        }
                      >
                        <span>{item.label}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {(menu.value as sortKey) === sortKey.status && (
                  <div className={filterStyles.sort_inner}>
                    <ul className={filterStyles.filter_list}>
                      {sortMenus[sortKey.sort].map((item, i) => (
                        <li
                          key={i}
                          className={`${filterStyles.filter_list_item} ${
                            item.isSelect ? filterStyles.is_select : ''
                          }`}
                          onClick={() => handleSortFilter(item.value)}
                        >
                          <span>{item.label}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <div>
                  <Button
                    size={`is_medium`}
                    value={`リセット`}
                    isDisabled={false}
                    isSecondary={true}
                    onClick={() => resetFilter(menu.value)}
                  />
                  <Button
                    size={`is_medium`}
                    value={`OK`}
                    isDisabled={false}
                    isSecondary={false}
                    onClick={() => fetchData(page, menu.value)}
                  />
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
