import React, { useContext, useState, useEffect } from "react";
import axios from "axios";

import CartItem from "../CartItem/index";
import { AppContext } from "../../App";
import Info from "../Info";

import styles from "./Drawer.module.scss";


const Drawer = (isVisible) => {
  useEffect(() => {
    document.getElementsByTagName("body");
  }, []);
  const delay = (ms)=>new Promise((resolve)=>setTimeout(resolve, ms))
  const { onRemoveItem, cart, toggleFieldSet, setCart } =
    useContext(AppContext);
  const [isComplete, setIsComplete] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const summ = cart.reduce((sum,obj)=>obj.price+sum,0)
  const clickOrder = async () => {
    try {
      setIsLoading(true);
      for (let i = 0; i < cart.length; i++){
        const item = cart[i]
        await axios.delete(`https://6696b23c0312447373c36f73.mockapi.io/cart/${item.id}`)
        await delay(300)
      }
      // await cart.forEach((element) => { 
      //   setCart((prev) => prev.filter((item) => element.id !== item.id));
      //   axios.delete(
      //     `https://6696b23c0312447373c36f73.mockapi.io/cart/${element.id}`
      //   );
      // });
      setIsComplete(true);
      setCart([]);
    } catch {
      alert("Не удалось создать заказ");
    }
    setIsLoading(false);
  };
  return (
    <div className={`${styles.overlay} ${isVisible ? styles.overlayVisible: ''}`}>
      <div className={styles.drawer}>
        <h2 className="flex justify-between">
          Корзина
          <img
            onClick={() => toggleFieldSet(false)}
            className="removeBtn"
            src="/img/svg/btn-remove.svg"
            alt="Remove"
          />
        </h2>

        {cart.length > 0 ? (
          <div className="flex flex-col flex-1 overflow-auto">
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
                onClick={() => clickOrder()}
                disabled={isLoading}
              >
                Оформить заказ
                <img src="/img/svg/arrow.svg" alt="Arrow" />
              </button>
            </ul>
          </div>
        ) : (
          <Info
            title={isComplete ? "Заказ оформлен!" : "Корзина пустая"}
            description={
              isComplete
                ? "Ваш заказ №13 готов"
                : "Добавьте хотя бы пару кроссовок чтобы сделать заказ"
            }
            imageUrl={
              isComplete
                ? "./img/svg/orderComplete.svg"
                : "./img/svg/emptyCart.svg"
            }
          />
        )}
      </div>
    </div>
  );
};

export default Drawer;
