import React, { useState } from "react";
import calculatorValue from "./calculatorValue";

const Calculator = () => {
  const [displayedValue, setDisplayedValue] = useState("");

  const handleDisplay = (content, index) => {
    if (index == 2) {
      setDisplayedValue(displayedValue.slice(0, -1));
    } else if (index === 1) {
      setDisplayedValue("");
    } else if (
      index >= 3 &&
      index <= 18 &&
      index != 16 &&
      displayedValue.length < 18
    ) {
      setDisplayedValue(displayedValue + content);
    }
  };

  return (
    <div className="bg-slate-400 h-screen w-screen grid place-items-center text-white">
      <div className="rounded-md gap-0.5 h-96 w-80  grid grid-rows-6 grid-cols-4">
        {calculatorValue.map((content, index) => {
          let className =
            "grid place-items-center first:place-items-end    rounded-lg";
          if (index === 0) {
            className +=
              " bg-black col-span-4  text-3xl place-items-end p-1 ";
          } else if (["C", "⌫", "-", "x", "/", "+"].includes(content)) {
            className += " bg-zinc-500 hover:bg-zinc-800";
          } else if (content === "=") {
            className += " bg-orange-500 hover:bg-orange-600 row-span-2";
          } else if (content === "0") {
            className += " bg-black hover:bg-zinc-800 col-span-2";
          } else {
            className += " bg-black hover:bg-zinc-800";
          }

          let innerContent = content;
          if (index === 0) {
            innerContent = displayedValue;
          }

          return (
            <p
              key={index}
              className={`${className} `}
              onClick={() => handleDisplay(content, index)}
            >
              {innerContent}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Calculator;
