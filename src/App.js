import React from "react";
import "./App.scss";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
  return (
    <div className="wrapper bg-white rounded-[20px] min-w-[700px] w-full flex flex-col p-[20px]">
      <Drawer/>

      <Header/>

      <div className="h-fit m-[30px] flex flex-col items-center shadow-[0 10px 20px rgba(0,0,0,0.4)]">
        <div className=" flex justify-between items-center p-[40px 10px] w-full">
          <h1 className="pl-3">Все товары</h1>
          <div className="p-[0px 15px] border-solid border-[2px] border-[#c9c9c9] rounded-[20px] flex">
            <img
              src="/img/svg/search.svg"
              alt="search"
              className="p-[10px] hover:cursor-pointer"
            />
            <input
              className="text-base w-[200px]  m-2 border-none"
              placeholder="Поиск"
            />
          </div>
        </div>

        <div className="goods">
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
      </div>
    </div>
  );
}

export default App;
