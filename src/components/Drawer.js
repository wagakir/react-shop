import React, { useEffect } from "react";
import CartItem from "./CartItem";
// import axios from "axios";
const Drawer = (props) => {
  let tempSumm = 0;
  // const [cart, setCart] = React.useState([]);
  // React.useEffect(()=>{axios.get("https://6696b23c0312447373c36f73.mockapi.io/cart").then((res)=>{setCart(res.data)})}, [])
  const [summ, setSumm] = React.useState(0);

  const countCart = () => {
    props.cart.forEach((element) => {
      tempSumm += element.price;
    });
    return tempSumm;
  };

  const [cartCheck, setCartCheck] = React.useState(true);

  React.useEffect(() => {
    setCartCheck(countCart() <= 0);
    setSumm(countCart());
  }, [props.cart]);

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

        {props.cart.length > 0 ? (
          <div className="flex flex-col flex-1 ">
            <div className="overflow-auto flex-1 mt-3">
              {props.cart.map((obj, index) => (
                <CartItem
                  onRemove={() => {
                    props.onRemove(obj.id);
                  }}
                  name={obj.name}
                  price={obj.price}
                  imgUrl={obj.imgUrl}
                  // itemsCart={obj.itemsCart}
                  key={obj.id}
                  id={obj.id}
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
              <button
                className="buttonGreen clickAnimation "
                disabled={cartCheck}
              >
                Оформить заказ
                <img src="/img/svg/arrow.svg" alt="Arrow" />
              </button>
            </ul>
          </div>
        ) : (
          <div className="flex-1 flex-col flex justify-center align-center m-3">
            <img
              src="./img/svg/emptyCart.svg"
              alt="empty box"
              height={160}
              width={160}
              className="self-center"
            />

            <h3 className="text-center text-2xl font-bold p-2 pb-0">
              Корзина пустая
            </h3>
            <p className="opacity-60 p-2">
              Добавьте хотя бы пару кроссовок чтобы сделать заказ
            </p>
            {/* <div className="h-5 w-5 bg-black"></div><div className="h-5 w-5 bg-black"></div><div className="h-5 w-5 bg-black"></div> */}
            <button
              className="buttonGreen clickAnimation h-fit p-3 text-xl"
              onClick={props.onCloseCart}
            >
              Вернуться к товарам
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Drawer;
