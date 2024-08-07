import React from "react";
import styles from "./Card.module.scss";
import axios from "axios";

const Card = (props) => {
  
  const [isAdded, setIsAdded] = React.useState(false);
  const [isLiked, setIsLiked] = React.useState(false);
  const toggleIsLiked = () => setIsLiked(!isLiked);
  
  React.useEffect(()=>{
    // axios
    //   .get("https://6696b23c0312447373c36f73.mockapi.io/cart")
    //   .then((res) => {
        props.articleArray.forEach((element) => {
          console.log(element);
          // console.log(props.article);
          if (element.article === props.article) {
            setIsAdded(true);
          }
        // });
    })},[])
  const toggleIsAdded = () => {
   setIsAdded(true)
  };
  return (
    <div className={styles.card}>
      <div className="absolute">
        <img
          onClick={() => {
            toggleIsLiked();
            props.onClickFavorite()
          }}
          src={isLiked ? "/img/svg/liked.svg" : "/img/svg/unliked.svg"}
          alt=""
          className="clickAnimation"
        />
      </div>
      <img width={133} height={112} src={props.imgUrl} alt={props.name} onClick={()=>console.log(props.articleArray)} />
      <p>{props.name}</p>
      <div>
        <div>
          <span>Цена:</span>
          <b>{props.price} руб.</b>
        </div>

        <img
          onClick={() => {
            toggleIsAdded();
            props.onClickPlus();
          }}
          className="clickAnimation"
          src={isAdded ? "/img/svg/btn-checked.svg" : "/img/svg/plus.svg"}
          alt="plus"
        ></img>
      </div>
    </div>
  );
};

export default Card;
