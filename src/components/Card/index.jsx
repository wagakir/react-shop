import React from "react";
import styles from "./Card.module.scss";

import ContentLoader from "react-content-loader";
const Card = ({onClickFavorite,
articleArray,
onClickPlus,
article,

name,
price,
imgUrl,
favorited,
added,
liked,
loading}) => {
  
  const [isAdded, setIsAdded] = React.useState(added);
  const [isLiked, setIsLiked] = React.useState(liked);
  const toggleIsLiked = () => setIsLiked(!isLiked);
  
  // React.useEffect(()=>{
    // axios
    //   .get("https://6696b23c0312447373c36f73.mockapi.io/cart")
    //   .then((res) => {
    //     res.data.forEach((element) => {

    //       if (element.article === article) {
    //         setIsAdded(true);
    //       }
    //     });
    // })},[])
  const toggleIsAdded = () => {
   setIsAdded(true)
  };
  return (
    
    <div className={styles.card}>
    {  loading ? <ContentLoader 
    speed={1.5}
    width={239}
    height={318}
    viewBox="0 0 239 318"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    className="self-center"
    
  >
    <rect x="57" y="30" rx="10" ry="10" width="133" height="112" /> 
    <rect x="40" y="150" rx="5" ry="5" width="160" height="18" /> 
    <rect x="40" y="174" rx="5" ry="5" width="160" height="18" /> 
    <rect x="40" y="198" rx="5" ry="5" width="160" height="18" /> 
    <rect x="40" y="270" rx="5" ry="5" width="77" height="20" /> 
    <rect x="40" y="246" rx="0" ry="0" width="45" height="18" /> 
    <rect x="165" y="256" rx="7" ry="7" width="33" height="33" />
  </ContentLoader>:<> <div className="absolute">
        <img
          onClick={() => {
            toggleIsLiked();
            onClickFavorite()
          }}
          src={isLiked ? "/img/svg/liked.svg" : "/img/svg/unliked.svg"}
          alt=""
          className="clickAnimation"
        />
      </div>
      <img width={133} height={112} src={imgUrl} alt={name}/>
      <p>{name}</p>
      <div>
        <div>
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>

        <img
          onClick={() => {
            toggleIsAdded();
            onClickPlus();
          }}
          className="clickAnimation"
          src={isAdded ? "/img/svg/btn-checked.svg" : "/img/svg/plus.svg"}
          alt="plus"
        ></img>
      </div></>}
     
    </div>
  );
};

export default Card;
