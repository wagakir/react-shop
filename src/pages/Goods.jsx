import React, { useContext, useState } from "react";
import Card from "../components/Card";
import { AppContext } from "../App";
// import axios from "axios";
const Goods = ({ onAddToFavorites, onAddToCart }) => {
  const { isLoading, items, favoritesArticleArray, articleArray } =
    useContext(AppContext);
  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };
  const [searchValue, setSearchValue] = useState("");

  const renderItems = () => {
    console.log(Array(10));
    console.log(Array(10).length);
    const filteredItems = items.filter((item) =>
      item.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    return (isLoading ? [0, 0, 0, 0, 0, 0, 0, 0] : filteredItems).map((obj) => (
      <Card
        onClickFavorite={() => onAddToFavorites(obj)}
        articleArray={articleArray}
        onClickPlus={() => onAddToCart(obj)}
        article={obj.article}
        key={obj.article}
        name={obj.name}
        price={obj.price}
        imgUrl={obj.imgUrl}
        added={articleArray.includes(obj.article)}
        liked={favoritesArticleArray.includes(obj.article)}
      ></Card>
    ));
  };
  return (
    <>
      <div className=" flex justify-between items-center p-[40px 10px] w-full">
        <h1 className="pl-3 truncate">Все товары </h1>
        <div className="p-[0px 15px] border-solid border-[2px] border-[#c9c9c9] rounded-[20px] flex">
          <img
            src="/img/svg/search.svg"
            alt="search"
            className="p-[10px] m-1 hover:cursor-pointer rounded-full clickAnimation"
          />
          <input
            onChange={handleSearchChange}
            className="text-base w-[200px]  m-2 border-none truncate"
            placeholder="Поиск"
            value={searchValue}
          />
          {searchValue && (
            <img
              onClick={() => {
                setSearchValue("");
              }}
              className="removeBtn p-2 rounded-full border-none"
              src="/img/svg/btn-remove.svg"
              alt="Remove"
            />
          )}
        </div>
      </div>
      <div className="goods">{renderItems()}</div>
    </>
  );
};

export default Goods;
