import React from "react";
import {
  Categories,
  SortPopup,
  StudioBlock,
  StudioLoadingBlock,
} from "../components";
import { useSelector, useDispatch } from "react-redux";
import { setCategory, setSortBy } from "../redux//actions/filters";
import { fetchStudios } from "../redux/actions/studios";

const districts = [
  "Дзержинский",
  "Ленинский",
  "Свердловский",
  "Индустриальный",
  "Мотовилихинский",
  "Орджоникидзевский",
  "Кировский",
];

const sortItems = [
  { name: "популярности", type: "popular", order: "desc" },
  { name: "цене", type: "price", order: "desc" },
  { name: "алфавиту", type: "title", order: "desc" },
];

function Home() {
  const dispatch = useDispatch();
  const studios = useSelector(({ studios }) => studios.studios);
  const isLoaded = useSelector(({ studios }) => studios.isLoaded);
  const { category, sortBy } = useSelector(({ filters }) => filters);

  React.useEffect(() => {
    dispatch(fetchStudios(sortBy, category));
  }, [category, sortBy]);

  const onSelectCategoty = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  const onSelectSortType = React.useCallback((type) => {
    dispatch(setSortBy(type));
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={category}
          onClickCategory={onSelectCategoty}
          items={districts}
        />
        <SortPopup
          activeSortType={sortBy.type}
          items={sortItems}
          onClickSortType={onSelectSortType}
        />
      </div>
      <h2 className="content__title">Студии</h2>
      {/* <div className="content__pages">  -----  Возможная пагинация ----------
        {pages.map((elem, index) => (
          <span
            className={currentPage === elem ? "current-page" : "page"}
            key={index}
            onClick={onSelectPage}
          >
            {elem}
          </span>
        ))}
      </div> */}
      <div className="content__items">
        {isLoaded
          ? studios.map((studio) => (
              <StudioBlock {...studio} isLoading={true} key={studio.id} />
            ))
          : Array(8)
              .fill(0)
              .map((_, index) => <StudioLoadingBlock key={index} />)}
      </div>
    </div>
  );
}

export default Home;
