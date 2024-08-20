import React from "react";
import style from "./CartItem.module.scss";
const CartItem = (props) => {
  // const removeClick = () =>{
  //   props.onRemove(props.id)
  //   // props.itemsCart.forEach(element => {
  //   //   if(element.id === props.id){
  //   //     props.itemsCart.pop(element)
  //   //   }     
  //   // });
  // }
  
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

      <img className="removeBtn" src="img/svg/btn-remove.svg" onClick={()=>(props.onRemove(props.id))} alt="Remove" />
    </div>
  );
};

export default CartItem;
