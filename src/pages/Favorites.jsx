import React from "react";
import Card from "../components/Card";
import { AppContext } from "../App";

const Favorites = ({
 
  onAddToFavorites,
  articleArray,
  onAddToCart,
 
}) => {
  const {favoritesArray} = React.useContext(AppContext)
  const {favoritesArray,articleArray} = React.useContext(AppContext)
  
  // const [items, setItems] = useState([]);
  // useEffect(() => {
  //   async function fetchData() {
  //     const cartResponse = await axios.get(
  //       "https://6696b23c0312447373c36f73.mockapi.io/favorites"
  //     );
  //     setItems(cartResponse.data);
  //   }

  //   fetchData();
  // }, []);

  return (
    <>
      {favoritesArray.length>0 ? 
      <>
        <div className=" flex justify-between items-start p-[40px 10px] w-full">
        <h1 className="pl-6 truncate">Мои избранные </h1>
      </div>
      <div className="goods">
        {favoritesArray.map((obj) => (
          <Card
            onClickFavorite={() => onAddToFavorites(obj)}
            articleArray={articleArray}
            onClickPlus={() => onAddToCart(obj)}
            article={obj.article}
            key={obj.id}
            name={obj.name}
            price={obj.price}
            imgUrl={obj.imgUrl}
            liked={true}
          ></Card>
        ))}
      </div>
      </>:<div className=" flex justify-center items-center p-[40px 10px] w-full">
        <h1 className="text-center ">Ну добать в избранные хоть что-то! <br/>🥺</h1>
        

      </div>}
    </>
  );
};

export default Favorites;
