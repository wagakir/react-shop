import React from "react";
import styles from "./Card.module.scss";
console.log(styles.card);

const Card = (props) => {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isLiked,setIsLiked] =React.useState(false)
  const toggleIsLiked = ()=>setIsLiked(!isAdded)
  const toggleIsAdded = () => setIsAdded(true);
  return (
    <div className={styles.card}>
      <div className="absolute">
        <img onClick={()=>{toggleIsLiked();props.onClickFavorite()}} src={isLiked ? '/img/svg/liked.svg' : '/img/svg/unliked.svg'} alt="" 
          className="clickAnimation" />
      </div>
      <img width={133} height={112} src={props.imgUrl} alt={props.name} />
      <p>{props.name}</p>
      <div>
        <div>
          <span>Цена:</span>
          <b>{props.price} руб.</b>
        </div>
        
        <img onClick={() =>{toggleIsAdded(); props.onClickPlus()}}  className="clickAnimation" src={isAdded ? '/img/svg/btn-checked.svg' : '/img/svg/plus.svg'} alt="plus"></img>
      </div>
    </div>
  );
};

export default Card;
