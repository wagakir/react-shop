import React from "react";


const Card = (props) => {
  const onClickButton = () =>{
    alert(props.price)
  };
  return (
    <div className="card">
      <div className="favorite">
        <img src="/img/svg/heart-unliked.svg" alt="unliked" />
      </div>

      <img
        width={133}
        height={112}
        src={props.imgUrl}
        alt={props.name}
      />
      <p>{props.name}</p>
      <div >
        <div>
          <span>Цена:</span>
          <b>{props.price} руб.</b>
        </div>
        <button  onClick={onClickButton}>
          
        </button>
      </div>
    </div>
  );
};

export default Card;
