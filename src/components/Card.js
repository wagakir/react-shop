import React from "react";
function Card() {
  return (
    <div className="card">
      <div className="favorite">
        <img src="/img/svg/heart-unliked.svg" alt="unliked" />
      </div>

      <img
        width={133}
        height={112}
        src="/img/clothes/sneakers/image7.jpg"
        alt="Мужские кроссовки Nike Blazer Mid Suede"
      />
      <p>Мужские кроссовки Nike Blazer Mid Suede</p>
      <div>
        <div>
          <span>Цена:</span>
          <b>199 999 руб.</b>
        </div>
        <button>
          <img width={30} height={30} src="/img/svg/plus.svg" alt="plus"></img>
        </button>
      </div>
    </div>
  );
}
export default Card;
