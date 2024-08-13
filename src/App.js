import React, { useState, useEffect } from "react";
import "./App.scss";
import Header from "./components/Header.jsx";
import Drawer from "./components/Drawer.jsx";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Favorites from "./pages/Favorites.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import Goods from "./pages/Goods.jsx";

function App() {
  // const [searchedItems, setSearchedItems] = useState([])
  // useEffect(()=>{}, [])
  // const [cart, setCart] = useState()

  const [summ, setSumm] = useState(0);
  const [articleArray, setArticleArray] = useState([]);

  const [cart, setCart] = useState([]);
  const [favoritesArray, setFavoritesArray] = useState([]);
  // useEffect(()=>{setSearchedItems(items.filter((obj) => obj.name === searchValue))}, [searchValue])
  // достать соседа
  // const callBackSumm = (prev) =>{
  //   setSumm(prev)
  // }

  useEffect(() => {
    async function fetchData() {
      const cartResponse = await axios.get(
        "https://6696b23c0312447373c36f73.mockapi.io/cart"
      );
      setCart(cartResponse.data);
      setArticleArray(cartResponse.data.map((obj) => obj.article));
    }
    fetchData();
  }, []);
  useEffect(() => {
    countSumm();
  }, [cart]);
  const onAddToCart = (obj) => {
    axios
      .post("https://6696b23c0312447373c36f73.mockapi.io/cart", obj)
      .then((res) => {
        setCart((prev) => [...prev, res.data]);
      });
  };
  const onAddToFavorites = async (obj) => {
    try {
      const favoriteResponse = await axios.get(
        "https://6696b23c0312447373c36f73.mockapi.io/favorites"
      );
      const favArr = favoriteResponse.data;

      if (
        favArr.find((favObj) => Number(favObj.article) === Number(obj.article))
      ) {
        let favArrArticle = favArr
          .filter((item) => item.article === obj.article)
          .map((obj) => obj.id);
        console.log(favArrArticle);
        favArrArticle.forEach((itemArticle) => {
          axios.delete(
            `https://6696b23c0312447373c36f73.mockapi.io/favorites/${itemArticle}`
          );
        });
        setFavoritesArray(favArr);
        // axios.put(
        //   `https://6696b23c0312447373c36f73.mockapi.io/favorites/`,favoritesArray
        // );
      } else {
        await axios.post(
          "https://6696b23c0312447373c36f73.mockapi.io/favorites",
          obj
        );
        
        setFavoritesArray(prev=>[...prev,obj]);
      }
    } catch {
      alert("Не удалось добавить в закладки");
    }
  };
  const onRemoveItem = async (id) => {
    await axios.delete(
      `https://6696b23c0312447373c36f73.mockapi.io/cart/${id}`
    );
    setCart((prev) => prev.filter((item) => id !== item.id));
  };

  const countSumm = async () => {
    const cartResponse = await axios.get(
      "https://6696b23c0312447373c36f73.mockapi.io/cart"
    );
    setSumm(0);
    cartResponse.data.forEach((element) =>
      setSumm((prev) => element.price + prev)
    );
  };
  const [drawerVisible, setDrawerVisible] = useState(false);
  const toggleFieldset = () => setDrawerVisible(!drawerVisible);

  return (
    <>
      <div className="wrapper bg-white rounded-[20px] min-w-[700px] w-full flex flex-col p-[20px]">
        {drawerVisible && (
          <Drawer
            summ={summ}
            cart={cart}
            onRemove={onRemoveItem}
            onCloseCart={toggleFieldset}
            // callBack={callBackSumm}
          />
        )}
        <Header
          summ={summ}
          onOpenCart={() => {
            toggleFieldset();
          }}
        />

        <div className="h-fit m-[30px] flex flex-col items-center shadow-[0 10px 20px rgba(0,0,0,0.4)]">
          <Routes>
            
            <Route
              path="/"
              element={
                <Goods
                  onAddToFavorites={onAddToFavorites}
                  articleArray={articleArray}
                  onAddToCart={onAddToCart}
                />
              }
            />

            <Route
              path="/favorites"
              element={
                <Favorites
                  favoritesArray={favoritesArray}
                  onAddToFavorites={onAddToFavorites}
                  articleArray={articleArray}
                  onAddToCart={onAddToCart}
                />
              }
            />
            
            <Route path="" element={NotFoundPage} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
