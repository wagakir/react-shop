import React from "react";
import styles from "./Card.module.scss";
import { AppContext } from "../../App";
import ContentLoader from "react-content-loader";
const Card = ({onClickFavorite,
onClickPlus,
name,
price,
imgUrl,
added,
liked}) => {
  const {isLoading} = React.useContext(AppContext)
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
    {  isLoading ? <ContentLoader 
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
