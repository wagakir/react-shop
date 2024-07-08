import React from "react";
import './App.scss';


function App() {
  return (
      <div className="wrapper bg-white rounded-[20px] min-w-[700px]  flex flex-col p-[20px]">
        
           <div className='overlay'>
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
          </div> 


          <header className=" border-b-[2px] border-b-[#eaeaea] h-[120px] flex px-[10px] pt-[20px] pb-[40px] justify-between items-center ">
              <div className="headerLeft">

                  <img src="/img/logo.png" height={50} width={50} alt='logo'/>
                  <div className="headerInfo">
                      <h3>Reactive Shop</h3>
                      <p>Онлайн магазин одежды</p>
                  </div>


              </div>
              <ul className="headerRight">
                  <li>
                  <img height={40} width={40} src='/img/profile.png'  alt=''/>
                  </li>
                  <li>
                  <span>1221 руб.</span>
                  </li>
                  <li >
                      <img height={40} width={40} src='/img/cart.png' alt=''/>
                  </li>
              </ul>
          </header>
          <div className="h-fit m-[30px] flex flex-col items-center shadow-[0 10px 20px rgba(0,0,0,0.4)]">
              <div className=' flex justify-between items-center p-[40px 10px] w-full'>
                <h1 className="pl-3">Все товары</h1>
                  <div  className='p-[0px 15px] border-solid border-[2px] border-[#c9c9c9] rounded-[20px] flex' >
                      <img src='/img/svg/search.svg' alt='search' className="p-[10px] hover:cursor-pointer"/>
                      <input className="text-base w-[200px]  m-2 border-none" placeholder='Поиск'/>
                  </div>
              </div>


              <div className='goods'>
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
