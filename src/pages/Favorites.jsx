import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import axios from "axios";

const Favorites = (
 { favoritesArray,

  onAddToFavorites,
  articleArray,
  onAddToCart,
  ...props}
) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const cartResponse = await axios.get(
        "https://6696b23c0312447373c36f73.mockapi.io/favorites"
      );
      setItems(cartResponse.data);
    }

    fetchData();
  }, []);
  console.log(favoritesArray[1]);
  return (
    <div className="goods">
      {items.map((obj) => (
        <Card
          onClickFavorite={() => onAddToFavorites(obj)}
          articleArray={articleArray}
          onClickPlus={() => onAddToCart(obj)}
          article={obj.article}
          key={obj.id}
          name={obj.name}
          price={obj.price}
          imgUrl={obj.imgUrl}
        ></Card>
      ))}
    </div>
  );
};

export default Favorites;
