import {useState} from 'react';

import { changeSortBy} from 'src/store/action.ts';
import {SortType} from 'src/types';
import {useAppDispatch, useAppSelector} from 'src/hooks/redux.ts';

function Sort() {
  const dispatch = useAppDispatch();
  const currentSort = useAppSelector((store) => store.sortBy);
  const [isOpened, setIsOpened] = useState(false);

  const onSortItemClick = (sortBy: string) => {
    dispatch(changeSortBy(sortBy));
    setIsOpened(false);
  };

  const onSortTitleClick = () => {
    setIsOpened(!isOpened);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={onSortTitleClick}>
        {currentSort}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpened ? 'places__options--opened' : ''}`}>
        <li
          className="places__option places__option--active"
          tabIndex={0}
          onClick={()=>{
            onSortItemClick(SortType.popular);
          }}
        >
          Popular
        </li>
        <li className="places__option" tabIndex={0}
          onClick={()=>{
            onSortItemClick(SortType.priceAsc);
          }}
        >
          Price: low to high
        </li>
        <li className="places__option" tabIndex={0}
          onClick={()=>{
            onSortItemClick(SortType.priceDesc);
          }}
        >
          Price: high to low
        </li>
        <li className="places__option" tabIndex={0}
          onClick={()=>{
            onSortItemClick(SortType.rating);
          }}
        >
          Top rated first
        </li>
      </ul>
    </form>
  );
}


export default Sort;
