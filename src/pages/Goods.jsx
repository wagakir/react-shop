import React, { useContext, useState } from "react";
import Card from "../components/Card";
import { AppContext } from "../App";
// import axios from "axios";
const Goods = ({ onAddToFavorites, onAddToCart }) => {
  const { isLoading, items} =
    useContext(AppContext);
  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };
  const [searchValue, setSearchValue] = useState("");

  const renderItems = () => {
    const filteredItems = items.filter((item) =>
      item.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    return (isLoading ? [{article:0}, {article:1}, {article:2}, {article:3}, {article:4}, {article:5}, {article:6}, {article:7  }] : filteredItems).map((obj) => (
      <Card
        onClickFavorite={() => onAddToFavorites(obj)}
        onClickPlus={() => onAddToCart(obj)}
        article={obj.article}
        key={obj.article}
        name={obj.name}
        price={obj.price}
        imgUrl={obj.imgUrl}
      ></Card>
    ));
  };
  return (
    <>
      <div className=" flex justify-between items-center p-[40px 10px] w-full">
        <h1 className="pl-3 truncate">Все товары </h1>
        <div className="p-[0px 15px] border-solid border-[2px] border-[#c9c9c9] rounded-[20px] flex">
          <img
            src="img/svg/search.svg"
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
              src="img/svg/btn-remove.svg"
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
