import React, { useContext } from "react";
import styles from "./Card.module.scss";
import { AppContext } from "../../App";
import ContentLoader from "react-content-loader";
const Card = ({onClickFavorite,
onClickPlus,
name,
price,
imgUrl,
article,

}) => {
  const {isLoading,checkCardAdded,checkFavoriteAdded} = useContext(AppContext)
  const toggleIsLiked = () => checkFavoriteAdded(article);
  
  
  // React.useEffect(()=>{},[])
  const toggleIsAdded = () => {
    checkCardAdded(article) 
  };
  return (
    
    <div className={styles.card}>
    {  isLoading  ? <ContentLoader 
    speed={1.5}
    width={158}
    height={238}
    viewBox="0 0 158 238"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    className="self-center"
    
  >
    <rect x="5" y="10" rx="10" ry="10" width="133" height="102" /> 
    <rect x="5" y="122" rx="10" ry="10" width="160" height="16" /> 
    <rect x="5" y="146" rx="10" ry="10" width="160" height="16" /> 
    <rect x="5" y="170" rx="10" ry="10" width="160" height="16" /> 
    <rect x="5" y="195" rx="10" ry="10" width="45" height="14" /> 
    <rect x="5" y="215" rx="10" ry="10" width="90" height="18" /> 
   
    <rect x="128" y="207" rx="7" ry="7" width="31" height="31" />
  </ContentLoader>:<> <div className="absolute">
        <img
          onClick={() => {
            toggleIsLiked();
            onClickFavorite()
          }}
          src={checkFavoriteAdded(article) ? "/img/svg/liked.svg" : "/img/svg/unliked.svg"}
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
          src={checkCardAdded(article) ? "/img/svg/btn-checked.svg" : "/img/svg/plus.svg"}
          alt="plus"
        ></img>
      </div></>}
     
    </div>
  );
};

export default Card;
