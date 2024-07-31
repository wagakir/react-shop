import React from "react";
import CartItem from "./CartItem";
import axios from "axios";
const Drawer = (props) => {

  let tempSumm = 0;
  const [cart, setCart] = React.useState([]); 
  React.useEffect(()=>{axios.get("https://6696b23c0312447373c36f73.mockapi.io/cart").then((res)=>{setCart(res.data)})}, [])
  const [summ, setSumm] = React.useState(0); 
  const countCart = () => {
    
    cart.forEach((element) => {
      tempSumm += element.price;
    });
    return tempSumm;
  };
  

  const [cartCheck, setCartCheck] = React.useState(true)
  
  React.useEffect(()=>{ setCartCheck(countCart()<=0 ); setSumm( countCart()) }, [cart]);
 
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="flex justify-between">
          Корзина
          <img
            onClick={props.onCloseCart}
            className="removeBtn"
            src="/img/svg/btn-remove.svg"
            alt="Remove"
          />
        </h2>
        {}
        <div className="items">
          {
          cart.map((obj, index) => (
            <CartItem 
            onRemove={props.onRemove}
            name={obj.name} 
            price={obj.price} 
            imgUrl={obj.imgUrl} 
            // itemsCart={obj.itemsCart}
            key = {obj.id}
            id = {obj.id}
            />
          ))}
        </div>
        <ul className="cartTotalBlock">
          <li>
            <span>Итого:</span>
            <div></div>
            <b>{summ} руб.</b>
          </li>
          <li>
            <span>Налог 5%</span>
            <div></div>
            <b>1000 руб. </b>
          </li>
          <button className="buttonGreen clickAnimation " disabled={cartCheck} >
            Оформить заказ
            <img src="/img/svg/arrow.svg" alt="Arrow" />
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
