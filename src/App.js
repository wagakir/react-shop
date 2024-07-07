import React from "react";
import './App.scss';


function App() {
  return (
      <div className="wrapper bg-white border-r-[20px] min-w-[800px] flex flex-col">
          {/* <div className='overlay'>
              <div className='drawer'>
                  <h2>Корзина</h2>
                  <div className='items'>
                      <div className='cartItem'>
                          <div style={{backgroundImage: 'url(/img/clothes/sneakers/image1.jpg)'}}
                               className={'cartItemImg'}></div>
                          <div>
                              <p>Мужские Кроссовки Nike Air Max 270</p>
                              <b>12 999 999руб.</b>
                          </div>

                          <img className='removeBtn' src='/img/svg/btn-remove.svg' alt='Remove'/>
                      </div>
                      <div className='cartItem'>
                          <div style={{backgroundImage: 'url(/img/clothes/sneakers/image1.jpg)'}}
                               className={'cartItemImg'}></div>
                          <div>
                              <p>Мужские Кроссовки Nike Air Max 270</p>
                              <b>12 999 999руб.</b>
                          </div>

                          <img className='removeBtn' src='/img/svg/btn-remove.svg' alt='Remove'/>
                      </div>
                      <ul>
                        <li>
                            <span></span>
                            <div></div>
                            <b></b>
                        </li>
                        <li>
                            <span></span>
                            <div></div>
                            <b></b>
                        </li>
                      </ul>
                  </div>

              </div>
          </div> */}


          <header className="header">
              <div className="headerLeft">

                  <img src="/img/logo.png" height={50} width={50} alt='logo'/>
                  <div className="headerInfo">
                      <h3>Reactive Shop</h3>
                      <p>Онлайн магазин одежды</p>
                  </div>


              </div>
              <ul className="headerRight">
                  <li>
                  <img height={40} width={40} src='/img/profile.png' alt=''/>
                      <span>1221 руб.</span>

                  </li>
                  <li >
                      <img height={40} width={40} src='/img/cart.png' alt=''/>
                  </li>
              </ul>
          </header>
          <div className="content flex flex-col shadow-[0 10px 20px rgba(0,0,0,0.4)]">
              <div>
                  <h1>Все товары</h1>
                  <div className='search-block'>
                      <img src='/img/svg/search.svg' alt='search'/>
                      <input placeholder='Поиск'/>
                  </div>
              </div>


              <div className='grid justify-evenly '>
                  <div className='card'>
                      <div className='favorite'>
                          <img src='/img/svg/heart-unliked.svg' alt='unliked'/>
                      </div>

                      <img width={133} height={112} src='/img/clothes/sneakers/image7.jpg'
                           alt='Мужские кроссовки Nike Blazer Mid Suede'/>
                      <p>Мужские кроссовки Nike Blazer Mid Suede</p>
                      <div>
                          <div>
                              <span>Цена:</span>
                              <b>199 999 руб.</b>
                          </div>
                          <button>
                              <img width={30} height={30} src='/img/svg/plus.svg' alt='plus'></img>
                          </button>
                      </div>
                  </div>
                  <div className='card'>
                      <img width={133} height={112} src='/img/clothes/sneakers/image1.jpg'
                           alt='Мужские кроссовки Nike Blazer Mid Suede'/>
                      <p>Мужские кроссовки Nike Blazer Mid Suede</p>
                      <div>
                          <div>
                              <span>Цена:</span>
                              <b>199 999 руб.</b>
                          </div>
                          <button>
                              <img width={30} height={30} src='/img/svg/plus.svg' alt='plus'></img>
                          </button>
                      </div>
                  </div>
                  <div className='card'>
                      <img width={133} height={112} src='/img/clothes/sneakers/image2.jpg'
                           alt='Мужские кроссовки Nike Blazer Mid Suede'/>
                      <p>Мужские кроссовки Nike Blazer Mid Suede</p>
                      <div>
                          <div>
                              <span>Цена:</span>
                              <b>199 999 руб.</b>
                          </div>
                          <button>
                              <img width={30} height={30} src='/img/svg/plus.svg' alt='plus'></img>
                          </button>
                      </div>
                  </div>
                  <div className='card'>
                      <img width={133} height={112} src='/img/clothes/sneakers/image3.jpg'
                           alt='Мужские кроссовки Nike Blazer Mid Suede'/>
                      <p>Мужские кроссовки Nike Blazer Mid Suede</p>
                      <div>
                          <div>
                              <span>Цена:</span>
                              <b>199 999 руб.</b>
                          </div>
                          <button>
                              <img width={30} height={30} src='/img/svg/plus.svg' alt='plus'></img>
                          </button>
                      </div>
                  </div>
                  <div className='card'>
                      <img width={133} height={112} src='/img/clothes/sneakers/image4.jpg'
                           alt='Мужские кроссовки Nike Blazer Mid Suede'/>
                      <p>Мужские кроссовки Nike Blazer Mid Suede</p>
                      <div>
                          <div>
                              <span>Цена:</span>
                              <b>199 999 руб.</b>
                          </div>
                          <button>
                              <img width={30} height={30} src='/img/svg/plus.svg' alt='plus'></img>
                          </button>
                      </div>
                  </div>
                  <div className='card'>
                      <img width={133} height={112} src='/img/clothes/sneakers/image5.jpg'
                           alt='Мужские кроссовки Nike Blazer Mid Suede'/>
                      <p>Мужские кроссовки Nike Blazer Mid Suede</p>
                      <div>
                          <div>
                              <span>Цена:</span>
                              <b>199 999 руб.</b>
                          </div>
                          <button>
                              <img width={30} height={30} src='/img/svg/plus.svg' alt='plus'></img>
                          </button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default App;
