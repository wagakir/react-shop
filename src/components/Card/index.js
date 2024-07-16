import React from "react";
import styles from "./Card.module.scss";
console.log(styles.card);

const Card = (props) => {
  const [isAdded, setIsAdded] = React.useState(false);
  const toggleIsAdded = () => setIsAdded(true);
  return (
    <div className={styles.card}>
      <div style={{position:'absolute'}}>
        <img src="/img/svg/heart-unliked.svg" alt="" onClick={props.onClickFavorite}
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
