import React from "react"

const Drawer = (props) => {
  return (
    <div className="overlay">
        <div className="drawer">
          <h2 className="flex justify-between">
            Корзина{" "}
            <img
              className="removeBtn"
              src="/img/svg/btn-remove.svg"
              alt="Remove"
            />
          </h2>
          <div className="items">
            <div className="cartItem">
              <div
                style={{
                  backgroundImage: "url(/img/clothes/sneakers/image1.jpg)",
                }}
                className={"cartItemImg"}
              ></div>
              <div>
                <p>Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 999руб.</b>
              </div>

              <img
                className="removeBtn"
                src="/img/svg/btn-remove.svg"
                alt="Remove"
              />
            </div>
            <div className="cartItem">
              <div
                style={{
                  backgroundImage: "url(/img/clothes/sneakers/image1.jpg)",
                }}
                className={"cartItemImg"}
              ></div>
              <div>
                <p>Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 999руб.</b>
              </div>

              <img
                className="removeBtn"
                src="/img/svg/btn-remove.svg"
                alt="Remove"
              />
            </div>
            <div className="cartItem">
              <div
                style={{
                  backgroundImage: "url(/img/clothes/sneakers/image1.jpg)",
                }}
                className={"cartItemImg"}
              ></div>
              <div>
                <p>Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 999руб.</b>
              </div>

              <img
                className="removeBtn"
                src="/img/svg/btn-remove.svg"
                alt="Remove"
              />
            </div>
          </div>
          <ul className="cartTotalBlock">
            <li>
              <span>Итого:</span>
              <div></div>
              <b>21 309 руб.</b>
            </li>
            <li>
              <span>Налог 5%</span>
              <div></div>
              <b>1000 руб. </b>
            </li>
            <button className="buttonGreen">
              Оформить заказ
              <img src="/img/svg/arrow.svg" alt="Arrow" />
            </button>
          </ul>
        </div>
      </div>
  )
};

export default Drawer;
