import React from "react"

const Header = (props) => {
  return (
    <header className=" border-b-[2px] border-b-[#eaeaea] h-[120px] flex px-[10px] pt-[20px] pb-[40px] justify-between items-center ">
        <div className="headerLeft">
          <img src="/img/logo.png" className="clickAnimation" height={50} width={50} alt="logo" />
          <div className="headerInfo">
            <h3>Reactive Shop</h3>
            <p>Онлайн магазин одежды</p>
          </div>
        </div>
        <ul className="headerRight">
          <li>
            <img height={40} width={40} src="/img/profile.png" alt="" />
          </li>
          <li onClick={props.onOpenCart}>
            <span>{props.summ} руб.</span>
          </li>
          <li onClick={props.onOpenCart}>
            <img height={40} width={40} src="/img/cart.png" alt=""/>
          </li>
        </ul>
      </header>
  )
};

export default Header;
