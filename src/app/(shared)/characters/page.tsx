'use client'
import { FilterItem } from '@/types';
import React, { useEffect, useRef, useState } from 'react'
import CharacterTable from '@/components/organisms/character/table';
import styles from '@/app/styles/object/components/table.module.css';
import filterStyles from '@/app/styles/object/components/filtering.module.css';
import iconStyles from '@/app/styles/object/components/icon.module.css';
import ChevronUp from '@/components/icons/ChevronUp';
import ChevronDown from '@/components/icons/ChevronDown';
import Button from '@/components/modules/Button';
import { Characters } from '@prisma/client';

enum sortKey {
  attributes = 'attributes',
  sort = 'sort',
  status = 'status',
  type = 'type'
}

const Characters: React.FC = () => {
  const thead: string[] = ['', '名前', 'タイプ', '属性', 'キャラ総合力', '所持/未所持', '詳細']
  const [attributes, setAttributes] = useState<FilterItem[]>([
    { label: '赤属性', value: 'RED', isSelect: false },
    { label: '青属性', value: 'BLUE', isSelect: false },
    { label: '緑属性', value: 'GREEN', isSelect: false },
  ]);
  const [status, setStatus] = useState<FilterItem[]>([
    { label: 'キャラ総合力', value: 'comprehensive', isSelect: false },
    { label: '体力', value: 'strength', isSelect: false },
    { label: '攻撃力', value: 'attack', isSelect: false },
    { label: '防御力', value: 'defense', isSelect: false },
  ]);
  const [type, setType] = useState<FilterItem[]>([
    { label: 'アタッカー', value: 'ATTACKER', isSelect: false },
    { label: 'ディフェンダー', value: 'DEFENDER', isSelect: false },
    { label: 'ゲッター', value: 'GETTER', isSelect: false },
  ]);
  const [sort, setSort] = useState<FilterItem[]>([
    { label: '昇順', value: 'asc', isSelect: false },
    { label: '降順', value: 'desc', isSelect: false },
  ]);
  const [menus, setMenus] = useState<
    { label: string; value: sortKey; isOpen: boolean }[]
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
      { label: '降順', value: 'desc', isSelect: false },
    ],
  });
  const [data, setData] = useState<Characters[]>([])
  const [page, setPage] = useState<number>(0)
  const [hasData, setHasData] = useState<boolean>(true)
  const [loading, setLoading] = useState<boolean>(false)
  const [targetId, setTargetId] = useState<number>(0)
  const [fetchMode, setFetchMode] = useState<'normal' | 'sort'>('normal')
  const [filterKey, setFilterKey] = useState<sortKey | null>(null);
  const isDevObserverFlg = useRef<boolean>(true);
  const isDevCountPageFlg = useRef<boolean>(true);
  const target = useRef<HTMLDivElement>(null);

  const fetchCharactersData = async (page: number) => {
    if (fetchMode !== 'normal') return
    const res = await fetch(`http://localhost:3000/api/characters?page=${page}`);
    const data: Characters[] = await res.json();
    const count = data.length

    if (data.length === 0) {
      setHasData(false)
      return
    }
    setData((prev) => [...prev, ...data])
    setHasData(count > 0)
  };

  useEffect(() => {
    if (process.env.NODE_ENV === 'development' && isDevObserverFlg.current) {
      isDevObserverFlg.current = false;
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasData) {
          setPage((prev) => prev + 1)
        }
      },
      { threshold: 1.0 }
    );

    if (target.current) {
      observer.observe(target.current);
    }
    return () => {
      if (target.current) {
        observer.unobserve(target.current);
      }
    };
  }, [hasData, target, fetchMode]);

  useEffect(() => {
    if (process.env.NODE_ENV === 'development' && isDevCountPageFlg.current) {
      isDevCountPageFlg.current = false;
      return;
    }

    if (page > 0) {
      // 次のデータを取ってくる
      if (fetchMode === 'normal') {
        fetchCharactersData(page)
      } else if (fetchMode === 'sort' && filterKey) {
        fetchSortCharactersData(page, filterKey);
      }
    }
  }, [page]);

  const applySort = async (key: sortKey) => {
    setFetchMode('sort')
    setFilterKey(key)
    setPage(0)
    setData([])
  }

  const fetchSortCharactersData = async (index: number, key: sortKey) => {
    let list: Characters[] = [];
    let res: Response;
    let count: number = 0;

    /*
      1. 属性のみでのソート
        a. attributes内に一つでもisSelectがtrueのものがあるかどうか
      2. キャラタイプのみでのソート
        a.  type内に一つでもisSelectがtrueのものがあるかどうか
      3. 属性とキャラタイプのソート
        a.  attributes内に一つでもisSelectがtrueのものがあるかどうか
        &&
        b. type内に一つでもisSelectがtrueのものがあるかどうか
      4. 特定のステータス数値による昇順降順
        a.  statusとsortにそれぞれ一つでもisSelectがtrueのものがあるかどうか
      5. 属性と特定のステータス数値によるソート
        a.  attributes内に一つでもisSelectがtrueのものがあるかどうか
        &&
        b. statusとsortにそれぞれ一つでもisSelectがtrueのものがあるかどうか
      6. キャラタイプと特定のステータス数値によるソート
        a.  type内に一つでもisSelectがtrueのものがあるかどうか
        &&
        b.  statusとsortにそれぞれ一つでもisSelectがtrueのものがあるかどうか
      7. 属性とキャラタイプと特定のステータス数値によるソート
    */

    let isAttributes = attributes.filter((item) => item.isSelect)
    let isType = type.filter((item) => item.isSelect)
    let isStatus = status.filter((item) => item.isSelect)
    let isOrder = sort.filter((item) => item.isSelect)

    if (isAttributes.length) {
      // 属性の選択がある場合
      let value = isAttributes[0].value
      res = await fetch(
        `http://localhost:3000/api/characters?page=${index}&order=attributes&target=${value}`
      );
      list = await res.json();
      count = list.length;
    } else if (isType.length) {
      // キャラタイプの選択がある場合
      let value = isType[0].value;
      res = await fetch(
        `http://localhost:3000/api/characters?page=${index}&order=type&target=${value}`
      );
      list = await res.json();
      count = list.length;
    } else if (isAttributes.length && isType.length) {
      // 属性とキャラタイプの選択がある場合
      let attributes = isAttributes[0].value
      let types = isType[0].value
      res = await fetch(
        `http://localhost:3000/api/characters?page=${index}&order=attributes&target=${attributes}&order=type&target=${types}`
      );
      list = await res.json();
      count = list.length;
    } else if (isStatus.length && isOrder.length) {
      // 特定のステータスの選択がある場合
      let value = isStatus[0].value
      let order = isOrder[0].value
      res = await fetch(
        `http://localhost:3000/api/characters?page=${index}&order=${value}&sort=${order}`
      );
      list = await res.json();
      count = list.length;
    } else if (isAttributes.length && isStatus.length && isOrder.length) {
      // 属性の選択があり且つ、特定のステータスの選択がある場合
    } else if (isType.length && isStatus.length && isOrder.length) {
      // キャラタイプの選択があり且つ、特定のステータスの選択がある場合
    } else if (isAttributes.length && isType.length && isStatus.length && isOrder.length) {
      // 属性の選択があり且つキャラタイプの選択があり且つ、特定のステータスの選択がある場合
    }

    if (list.length === 0) {
      setHasData(false)
      return
    }

    setData((prev) => [...prev, ...list]);
    setHasData(count > 0);
  };

  const onDispatchHasCharacter = async (id: number, isHas: boolean) => {
    setTargetId(id);
    setLoading(true);
    const res = await fetch(
      `http://localhost:3000/api/characters?id=${id}&hasCharacter=${isHas}`,
      {
        method: 'PATCH',
      }
    );
    if (res.ok) {
      const data: Characters[] = await res.json();
      data.filter((character) => character.id === id)[0].hasCharacter = isHas;
      setTargetId(0);
      setLoading(false);
    }
  }

  const resetFilter = (key: sortKey) => {
    setFetchMode('normal')
    setFilterKey(null);
    setSortMenus((prev) => {
      const updateArray = prev[key].map((item) => {
        return {
          ...item,
          isSelect: false,
        };
      });

      return {
        ...prev,
        [key]: updateArray,
      };
    });
    if (target.current) {
      target.current.scrollTop = 0
    }
  };

  const onDispatchStatusSort = async (value: string) => {
    setStatus((prev) => prev.map((item) => {
      return {
        ...item,
        isSelect: item.value === value ? !item.isSelect : item.isSelect
      }
    }))
  }

  const onDispatchSort = async (value: string) => {
    setSort((prev) => prev.map((item) => {
      return {
        ...item,
        isSelect: item.value === value ? !item.isSelect : item.isSelect,
      };
    }));

    await applySort(sortKey.status)
  }

  const onDispatchTypeFilter = async (value: string) => {
    setType((prev) =>
      prev.map((item) => {
        return {
          ...item,
          isSelect: item.value === value ? !item.isSelect : item.isSelect,
        };
      })
    );

    await applySort(sortKey.type)
  }

  const onDispatchAttributeFilter = async (value: string) => {
    setAttributes((prev) =>
      prev.map((item) => {
        return {
          ...item,
          isSelect: item.value === value ? !item.isSelect : item.isSelect,
        };
      })
    );

    await applySort(sortKey.attributes)
  }

  return (
    <React.Fragment>
      <div className={filterStyles.wrapper}>
        <div className={filterStyles.inner}>
          <div className={filterStyles.index}>
            <p>表示順</p>
            <ul className={filterStyles.filter_list}>
              {status.map((item, i) => (
                <li
                  key={i}
                  className={`${filterStyles.filter_list_item} ${
                    item.isSelect ? filterStyles.is_select : ''
                    }`}
                  onClick={() => onDispatchStatusSort(item.value)}
                >
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>
            <ul className={filterStyles.filter_list}>
              {sort.map((item, i) => (
                <li
                  key={i}
                  className={`${filterStyles.filter_list_item} ${item.isSelect ? filterStyles.is_select : ''
                    }`}
                  onClick={() => onDispatchSort(item.value)}
                >
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className={filterStyles.index}>
            <p>絞り込み</p>
            <ul className={filterStyles.filter_list}>
              {type.map((item, i) => (
                <li
                  key={i}
                  className={`${filterStyles.filter_list_item} ${
                    item.isSelect ? filterStyles.is_select : ''
                    }`}
                  onClick={() => onDispatchTypeFilter(item.value)}
                >
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>
            <ul className={filterStyles.filter_list}>
              {attributes.map((item, i) => (
                <li
                  key={i}
                  className={`${filterStyles.filter_list_item} ${
                    item.isSelect ? filterStyles.is_select : ''
                    }`}
                  onClick={() => onDispatchAttributeFilter(item.value)}
                >
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
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
                  onClick={onDispatchHasCharacter}
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
