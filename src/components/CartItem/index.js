import React from "react";
import style from "./CartItem.module.scss";
const CartItem = (props) => {
  return (
    <div className={style.cartItem}>
        
      <img
        src={props.imgUrl}
        alt={props.name}
        className={"cartItemImg"}
      ></img>
      <div>
        <p>{props.name}</p>
        <b>{props.price}руб.</b>
      </div>

      <img className="removeBtn" src="/img/svg/btn-remove.svg" alt="Remove" />
    </div>
  );
};

export default CartItem;
