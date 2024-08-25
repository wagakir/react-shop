import React, { useState, useEffect } from "react";
import Header from "./components/Header.jsx";
import Drawer from "./components/Drawer/index.jsx";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Favorites from "./pages/Favorites.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import Goods from "./pages/Goods.jsx";

export const AppContext = React.createContext({});
function App() {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);
  const [favoritesArray, setFavoritesArray] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const cartResponse = await axios.get(
          "https://6696b23c0312447373c36f73.mockapi.io/cart"
        );
        const favoriteResponse = await axios.get(
          "https://6696b23c0312447373c36f73.mockapi.io/favorites"
        );
        setIsLoading(false);
        setFavoritesArray(favoriteResponse.data);
        setCart(cartResponse.data);

        setItems([
          {
            name: "Мужские Кроссовки Nike Blazer Mid Suede",
            price: 1232999,
            imgUrl: "img/clothes/sneakers/image1.jpg",
            article: 1,
          },
          {
            name: "Мужские Кроссовки Nike Air Max 270",
            price: 12999,
            imgUrl: "img/clothes/sneakers/image2.jpg",
            article: 2,
          },
          {
            name: "Мужские Кроссовки Nike Blazer Mid Suede",
            price: 15999,
            imgUrl: "img/clothes/sneakers/image3.jpg",
            article: 3,
          },
          {
            name: "Кроссовки Puma X Aka Boku Future Rider",
            price: 8999,
            imgUrl: "img/clothes/sneakers/image4.jpg",
            article: 4,
          },
          {
            name: "Мужские Кроссовки Under Armour Curry 8",
            price: 15199,
            imgUrl: "img/clothes/sneakers/image5.jpg",
            article: 5,
          },
          {
            name: "Мужские Кроссовки Nike Kyrie 7",
            price: 11299,
            imgUrl: "img/clothes/sneakers/image6.jpg",
            article: 6,
          },
          {
            name: "Мужские Кроссовки Jordan Air Jordan 11",
            price: 16499,
            imgUrl: "img/clothes/sneakers/image7.jpg",
            article: 7,
          },
          {
            name: "Мужские Кроссовки Nike LeBron XVIII",
            price: 13999,
            imgUrl: "img/clothes/sneakers/image8.jpg",
            article: 8,
          },
          {
            name: "Мужские Кроссовки Nike Lebron XVIII Low",
            price: 9999,
            imgUrl: "img/clothes/sneakers/image9.jpg",
            article: 9,
          },
          {
            name: "Мужские Кроссовки Nike Kyrie Flytrap IV",
            price: 11299,
            imgUrl: "img/clothes/sneakers/image10.jpg",
            article: 10,
          },
        ]);
      } catch {
        alert(`не удалось загрузить данные с сервера, ошибка:
        ""`);
      }
    }
    fetchData();
  }, []);

  const onAddToCart = (obj) => {
    axios
      .post("https://6696b23c0312447373c36f73.mockapi.io/cart", obj)
      .then((item) => setCart((prev) => [...prev, item.data]))
      .catch((err) =>
        alert(`не удалось доваить в корзину, ошибка:
         "${err}"`)
      );
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

        favArrArticle.forEach((itemArticle) => {
          axios.delete(
            `https://6696b23c0312447373c36f73.mockapi.io/favorites/${itemArticle}`
          );
        });
        setFavoritesArray(
          favArr
            .filter((item) => item.article !== obj.article)
            .map((obj) => obj)
        );
      } else {
        await axios.post(
          "https://6696b23c0312447373c36f73.mockapi.io/favorites",
          obj
        );
        if (!favoritesArray.includes(obj)) {
          setFavoritesArray([...favArr, obj]);
        }
      }
    } catch {
      alert("Не удалось добавить в закладки");
    }
  };
  const onRemoveItem = async (id) => {
    setCart((prev) => prev.filter((item) => id !== item.id));
    await axios.delete(
      `https://6696b23c0312447373c36f73.mockapi.io/cart/${id}`
    );
  };
  // functions for checking the availability of goods in favorites and shopping cart
  const checkCardAdded = (id) => {
    if (cart.length > 0) {
      return cart.some((obj) => Number(obj.article) === Number(id));
    } else {
      return false;
    }
  };
  const checkFavoriteAdded = (id) => {
    if (favoritesArray.length > 0) {
      return favoritesArray.some((obj) => Number(obj.article) === Number(id));
    } else {
      return false;
    }
  };

  const [drawerVisible, setDrawerVisible] = useState(false);
  const toggleFieldSet = (element) => {
    setDrawerVisible(element);
    if (element) {
      document.body.className = "overflow-hidden";
    } else {
      document.body.className = "";
    }
  };

  return (
    <AppContext.Provider
      value={{
        items,
        drawerVisible,
        favoritesArray,
        isLoading,
        cart,
        checkCardAdded,
        checkFavoriteAdded,
        onAddToFavorites,
        onAddToCart,
        onRemoveItem,
        toggleFieldSet,
        setCart,
      }}
    >
      <div className="wrapper">
        <Drawer />
        <Header />

        <div className="h-fit m-[30px] flex flex-col items-center shadow-[0 10px 20px rgba(0,0,0,0.4)]">
          <Routes>
            <Route
              path="/"
              element={
                <Goods
                  onAddToFavorites={onAddToFavorites}
                  onAddToCart={onAddToCart}
                />
              }
            />

            <Route path="/favorites" element={<Favorites />} />

            <Route path="*" element={<NotFoundPage></NotFoundPage>} />
          </Routes>
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
