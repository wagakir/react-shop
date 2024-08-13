import React, { useState } from "react";
import Card from "../components/Card";
const Goods = ({
  onAddToFavorites,
  articleArray,

  onAddToCart,
  ...props
}) => {
  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };
  const [searchValue, setSearchValue] = useState("");
  const items = [
    {
      name: "Мужские Кроссовки Nike Blazer Mid Suede",
      price: 1232999,
      imgUrl: "/img/clothes/sneakers/image1.jpg",
      article: 1,
    },
    {
      name: "Мужские Кроссовки Nike Air Max 270",
      price: 12999,
      imgUrl: "/img/clothes/sneakers/image2.jpg",
      article: 2,
    },
    {
      name: "Мужские Кроссовки Nike Blazer Mid Suede",
      price: 15999,
      imgUrl: "/img/clothes/sneakers/image3.jpg",
      article: 3,
    },
    {
      name: "Кроссовки Puma X Aka Boku Future Rider",
      price: 8999,
      imgUrl: "/img/clothes/sneakers/image4.jpg",
      article: 4,
    },
    {
      name: "Мужские Кроссовки Under Armour Curry 8",
      price: 15199,
      imgUrl: "/img/clothes/sneakers/image5.jpg",
      article: 5,
    },
    {
      name: "Мужские Кроссовки Nike Kyrie 7",
      price: 11299,
      imgUrl: "/img/clothes/sneakers/image6.jpg",
      article: 6,
    },
    {
      name: "Мужские Кроссовки Jordan Air Jordan 11",
      price: 16499,
      imgUrl: "/img/clothes/sneakers/image7.jpg",
      article: 7,
    },
    {
      name: "Мужские Кроссовки Nike LeBron XVIII",
      price: 13999,
      imgUrl: "/img/clothes/sneakers/image8.jpg",
      article: 8,
    },
    {
      name: "Мужские Кроссовки Nike Lebron XVIII Low",
      price: 9999,
      imgUrl: "/img/clothes/sneakers/image9.jpg",
      article: 9,
    },
    {
      name: "Мужские Кроссовки Nike Kyrie Flytrap IV",
      price: 11299,
      imgUrl: "/img/clothes/sneakers/image10.jpg",
      article: 10,
    },
    
  ];
  // const articleArray = []
  // useEffect(() => {
  //   async function fetchData() {
  //     const cartResponse = await axios.get(
  //       "https://6696b23c0312447373c36f73.mockapi.io/favorites"
  //     );
  //     articleArray = cartResponse.data.map((obj) => obj.article);
  //   }

  //   fetchData();
  // }, []);
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
        </div>
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
      <div className="goods">
        {items
          .filter((item) =>
            item.name.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((obj) => (
            <Card
              onClickFavorite={() => onAddToFavorites(obj)}
              articleArray={articleArray}
              onClickPlus={() => onAddToCart(obj)}
              article={obj.article}
              key={obj.article}
              name={obj.name}
              price={obj.price}
              imgUrl={obj.imgUrl}
              
            ></Card>
          ))}
      </div>
    </>
  );
};

export default Goods;
