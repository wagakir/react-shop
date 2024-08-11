import React from "react";
import { Link } from "react-router-dom";
const Header = (props) => {
  return (
    <header className=" border-b-[2px] border-b-[#eaeaea] h-[120px] flex px-[10px] pt-[20px] pb-[40px] justify-between items-center ">
      <Link to="/goods">
        <div className="headerLeft">
          <img
            src="/img/logo.png"
            className="clickAnimation"
            height={50}
            width={50}
            alt="logo"
          />
          <div className="headerInfo">
            <h3>Reactive Shop</h3>
            <p>Онлайн магазин одежды</p>
          </div>
        </div>
      </Link>
      <ul className="headerRight">
        <li>
          <Link to="/favorites">
            <img
              height={70}
              width={70}
              src="\img\svg\favorite.svg"
              alt="favorites"
            ></img>
          </Link>
        </li>
        <li>
          <img height={40} width={40} src="/img/profile.png" alt="profile" />
        </li>
        <li onClick={props.onOpenCart}>
          {props.summ > 0 ? (
            <span>{props.summ} руб.</span>
          ) : (
            <span>Корзина пуста</span>
          )}
        </li>
        <li onClick={props.onOpenCart}>
          <img height={40} width={40} src="/img/cart.png" alt="" />
        </li>
      </ul>
    </header>
  );
};

export default Header;
