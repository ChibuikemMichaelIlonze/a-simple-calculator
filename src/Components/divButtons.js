import React, { useState, useEffect } from "react";
import calculatorValue from "./calculatorValue";
import * as math from "mathjs";

const DivButtons = () => {
  const [update, setUpdate] = useState("");

  const handleClick = (content, index) => {
    if (index === 1) {
      setUpdate(update.slice(0, -1));
    } else if (index === 0) {
      setUpdate("");
    } else if (index === 15) {
      try {
        const result = math.evaluate(update);
        setUpdate(result.toString());
      } catch (error) {}
    } else if (
      (index >= 2 && index <= 18 && index !== 15 && update.length < 18) ||
      (index === 17 && !update.includes(".")) ||
      (index === 2 && !update.includes("/")) ||
      (index === 3 && !update.includes("*")) ||
      (index === 7 && !update.includes("-")) ||
      (index === 11 && !update.includes("+"))
    ) {
      if (
        !(content === "." && update.includes(".")) &&
        !(content === "/" && update.includes("/")) &&
        !(content === "*" && update.includes("*")) &&
        !(content === "-" && update.includes("-")) &&
        !(content === "+" && update.includes("+"))
      ) {
        setUpdate(update + content);
      }
    }
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      const keyContent = event.key;
      const keyIndex = calculatorValue.indexOf(keyContent);
      if (keyIndex !== -1) {
        handleClick(keyContent, keyIndex);
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div className="grid grid-cols-4 rounded-xl grid-rows-6  w-[21rem] md:h-[30rem] md:w-[25rem]  h-[27rem] gap-0.5">
      <div className="col-span-4 bg-black text-3xl p-1 rounded-xl grid place-content-end">
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
