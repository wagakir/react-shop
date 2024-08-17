import React, { useContext, useState } from "react";
import CartItem from "./CartItem";
import { AppContext } from "../App";
import Info from "./Info";
import axios from "axios";
const Drawer = (props) => {
  const { onRemoveItem, summ, cart, toggleFieldSet, setCart } =
    useContext(AppContext);
  const [ isComplete, setIsComplete] = useState(false);
  const [ isLoading, setIsLoading] = useState(false)
  const clickOrder = async() => {
    try{
      setIsLoading(true)
    await cart.forEach(element => {
      setCart((prev) => prev.filter((item) => element.id !== item.id));
      axios.delete(
      `https://6696b23c0312447373c36f73.mockapi.io/cart/${element.id}`
    );
    setIsLoading(false)
    });
    setIsComplete(true);
    setCart([]);}catch{alert("Не удалось создать заказ")}
  };
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="flex justify-between">
          Корзина
          <img
            onClick={() => toggleFieldSet()}
            className="removeBtn"
            src="/img/svg/btn-remove.svg"
            alt="Remove"
          />
        </h2>

        {cart.length > 0 ? (
          <div className="flex flex-col flex-1 ">
            <div className="overflow-auto flex-1 mt-3">
              {cart.map((obj, index) => (
                <CartItem
                  onRemove={() => {
                    onRemoveItem(obj.id);
                  }}
                  name={obj.name}
                  price={obj.price}
                  imgUrl={obj.imgUrl}
                  key={obj.id}
                  id={obj.id}
                  article={obj.article}
                />
              ))}
            </div>
            <ul className="cartTotalBlock">
              <li>
                <span>Товаров на: </span>
                <div></div>
                <b>{summ} руб.</b>
              </li>
              <li>
                <span>Налог (15%) :</span>
                <div></div>
                <b>{Math.round(summ * 0.15)} руб.</b>
              </li>
              <li>
                <span>Итого:</span>
                <div></div>
                <b>{Math.round(summ * 0.15) + summ} руб.</b>
              </li>
              <button
                className="buttonGreen clickAnimation "
                onClick={()=>clickOrder()}
                disabled={isLoading}
              >
                Оформить заказ
                <img src="/img/svg/arrow.svg" alt="Arrow" />
              </button>
            </ul>
          </div>
        ) : (
          <Info
            title={isComplete ?"Заказ оформлен!": "Корзина пустая"}
            description={isComplete?"Ваш заказ №13 готов":"Добавьте хотя бы пару кроссовок чтобы сделать заказ"}
            imageUrl={isComplete?"./img/svg/orderComplete.svg":"./img/svg/emptyCart.svg"}
          />
        )}
      </div>
    </div>
  );
};

export default Drawer;
