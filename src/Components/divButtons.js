import { useState } from "react";
import calculatorValue from "./calculatorValue";

const DivButtons = () => {
  const [update, setUpdate] = useState("");

  const handleClick = (content, index) => {
    if (index === 1) {
      setUpdate(update.slice(0, -1));
    } else if (index === 0) {
      setUpdate("");
    } else if (index >= 4 && index <= 18 && index !=15 &&update.length<18) {
      setUpdate(update + content);
    }
  };
  console.log(update);
  return (
    <div className="grid  grid-cols-4 rounded-xl grid-rows-6 w-80 h-96  gap-0.5">
      <div className="col-span-4  bg-black  text-3xl  p-1 rounded-xl grid place-content-end ">
        {update}
      </div>
      {calculatorValue.map((content, index) => {
        let className = "hover:rounded-xl rounded-xl grid place-content-center";
        if (
          index === 0 ||
          index === 1 ||
          index === 2 ||
          index === 3 ||
          index === 7 ||
          index === 11
        ) {
          className += " bg-zinc-500 hover:bg-zinc-700";
        } else if (index === 15) {
          className += " bg-orange-500 hover:bg-orange-600 row-span-2";
        } else if (index === 16) {
          className += " col-span-2 bg-black";
        } else {
          className += " bg-black hover:bg-zinc-700";
        }
        return (
          <button
            key={index}
            className={className}
            onClick={() => handleClick(content, index)}
          >
            {content}
          </button>
        );
      })}
    </div>
  );
};

export default DivButtons;
