import React, { useContext } from "react"
import '../App.scss'
import { AppContext } from "../App";
const Info = ({title,description,imageUrl}) => {
  const {toggleFieldSet} = useContext(AppContext)
  return (
    <div className="flex-1 flex-col flex justify-center align-center m-3">
            <img
              src={imageUrl}
              alt="empty box"
              height={160}
              width={160}
              className="self-center"
            />

            <h3 className="text-center text-2xl font-bold p-2 pb-0">
             {title}
            </h3>
            <p className="opacity-60 p-2">
             {description}
            </p>
            {/* <div className="h-5 w-5 bg-black"></div><div className="h-5 w-5 bg-black"></div><div className="h-5 w-5 bg-black"></div> */}
            <button
              className="buttonGreen clickAnimation h-fit p-3 text-xl"
              onClick={()=>toggleFieldSet(false)}
            >
              Вернуться к товарам
            </button>
          </div>
  )
};

export default Info;
