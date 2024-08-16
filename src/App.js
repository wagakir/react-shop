import React, { useState, useEffect } from "react";
import "./App.scss";
import Header from "./components/Header.jsx";
import Drawer from "./components/Drawer.jsx";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Favorites from "./pages/Favorites.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import Goods from "./pages/Goods.jsx";

export const AppContext = React.createContext({});
function App() {

  // const [searchedItems, setSearchedItems] = useState([])
  // useEffect(()=>{}, [])
  // const [cart, setCart] = useState()
  const [items, setItems] = useState([]);
  const [summ, setSumm] = useState(0);
  const [articleArray, setArticleArray] = useState([]);
  const [favoritesArticleArray, setFavoritesArticleArray] = useState([]);
  const [cart, setCart] = useState([]);
  const [favoritesArray, setFavoritesArray] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  // useEffect(()=>{setSearchedItems(items.filter((obj) => obj.name === searchValue))}, [searchValue])
  // достать соседа
  // const callBackSumm = (prev) =>{
  //   setSumm(prev)
  // }

  useEffect(() => {
    async function fetchData() {
      try{
      setIsLoading(true)
      const cartResponse = await axios.get(
        "https://6696b23c0312447373c36f73.mockapi.io/cart"
      );
      const favoriteResponse = await axios.get(
        "https://6696b23c0312447373c36f73.mockapi.io/favorites"
      );
      setIsLoading(false)
      setFavoritesArray(favoriteResponse.data);
      setCart(cartResponse.data);
      setArticleArray(cartResponse.data.map((obj) => obj.article));
      setFavoritesArticleArray(favoriteResponse.data.map((obj) => obj.article));
      setItems([
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
      ]);}catch{alert(`не удалось загрузить данные с сервера, ошибка:
        ""`)}

    }
    fetchData();
  }, []);
  useEffect(() => {
    countSumm();
  }, [cart]);
  const onAddToCart = (obj) => {
    setCart((prev) => [...prev, obj]);
    axios
      .post("https://6696b23c0312447373c36f73.mockapi.io/cart", obj)
      .catch((err)=>alert(`не удалось доваить в корзину, ошибка:
         "${err}"`))
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
          // favArr.splice(favArr.indexOf(itemArticle))
        });
        setFavoritesArray(favArr
          .filter((item) => item.article !== obj.article)
          .map((obj) => obj))
        setFavoritesArticleArray(favArr
          .filter((item) => item.article !== obj.article)
          .map((obj) => obj.article))
        // setFavoritesArray((prev)=>prev.filter((item) => item.article !== obj.article)
        // .map((obj) => obj.id));
        
      } else {
        await axios.post(
          "https://6696b23c0312447373c36f73.mockapi.io/favorites",
          obj
        );
        if(!favoritesArray.includes(obj))
        {setFavoritesArray([...favArr, obj]);
          setFavoritesArticleArray([...favArr.map((obj) => obj.article),obj.article])
        }
      }
    } catch {
      alert("Не удалось добавить в закладки");
    }
  };
  const onRemoveItem = (id) => {
    setCart((prev) => prev.filter((item) => id !== item.id));
    axios.delete(
      `https://6696b23c0312447373c36f73.mockapi.io/cart/${id}`
    );
    
  };

  const countSumm =  () => {
    
    setSumm(0);
    cart.forEach((element) =>
      setSumm((prev) => element.price + prev)
    );
  };
  const [drawerVisible, setDrawerVisible] = useState(false);
  const toggleFieldset = () => setDrawerVisible(!drawerVisible);

  return (
    <AppContext.Provider value={{items,summ,articleArray,favoritesArray,isLoading, favoritesArticleArray}}>
      
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
                  onAddToCart={onAddToCart}
                />
              }
            />

            <Route
              path="/favorites"
              element={
                <Favorites
                  onAddToFavorites={onAddToFavorites}
                  articleArray={articleArray}
                  onAddToCart={onAddToCart}
                />
              }
            />

            <Route path="*" element={<NotFoundPage></NotFoundPage>} />
          </Routes>
        </div>
      </div>
    
    </AppContext.Provider>
  );
}

export default App;
