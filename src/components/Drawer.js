
import React from "react"
import CartItem from "./CartItem";
const Drawer = (props) => {
  
  
  // useEffect(()=>{
  //   setSumm(0)
  //   props.itemsCart.forEach(element => {
  //     console.log(element);
  //     setSumm(summ + element.price)
  //   });
  // })
  return (
    <div className="overlay" >
        <div className="drawer">
          <h2 className="flex justify-between">
            Корзина{" "}
            <img
              onClick={props.onCloseCart}
              className="removeBtn"
              src="/img/svg/btn-remove.svg"
              alt="Remove"
            />
          </h2>
          <div className="items">
            {props.itemsCart.map((obj) => (<CartItem
             name={obj.name}
             price={obj.price}
             imgUrl={obj.imgUrl}
            />))
            }
          </div>
          <ul className="cartTotalBlock">
            <li>
              <span>Итого:</span>
              <div></div>
              <b>{props.summ} руб.</b>
            </li>
            <li>
              <span>Налог 5%</span>
              <div></div>
              <b>1000 руб. </b>
            </li>
            <button className="buttonGreen clickAnimation ">
              Оформить заказ
              <img src="/img/svg/arrow.svg" alt="Arrow" />
            </button>
          </ul>
        </div>
      </div>
  )
};

export default Drawer;
