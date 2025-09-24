"use client";
import { BaseSyntheticEvent, useState } from "react";

export default function Wyjsq() {
  const [calExp, setCalExp] = useState("0");

  const btnClick = (e: BaseSyntheticEvent) => {
    console.error(e);

    const v = e.target.innerText;
    if (v === "清除") {
      setCalExp("0");
      return;
    }
    if (v === "=") {
      const ret = eval(calExp);
      setCalExp(ret);
      return;
    }
    if (calExp === "0") {
      setCalExp(v);
      return;
    }

    setCalExp(calExp + v);
  };
  return (
    <div className="w-90 h-100 shadow-lg mx-auto mt-4 rounded-lg">
      <div className="bg-gray-900 text-4xl text-right text-white  w-82 p-3 mx-4 rounded-md mb-3">
        {calExp}
      </div>
      <div className="flex gap-2 py-2 px-4 ">
        <div
          onClick={btnClick}
          className="bg-red-500 text-xl text-white w-42 p-2 rounded-md text-center"
        >
          清除
        </div>
        <div
          onClick={btnClick}
          className="bg-orange-500 text-xl text-white w-20 h-12 text-center p-2 rounded-md
          "
        >
          ÷
        </div>
        <div
          onClick={btnClick}
          className="bg-orange-500 text-xl text-white w-20 h-12 text-center p-2 rounded-md"
        >
          x
        </div>
      </div>
      <div className="flex gap-1 px-4 ">
        <div
          onClick={btnClick}
          className="bg-gray-300 text-md font-bold  text-gray-900 w-20 p-2 rounded-md text-center"
        >
          7
        </div>
        <div
          onClick={btnClick}
          className="bg-gray-300 text-md font-bold  text-gray-900 w-20 h-12 text-center p-2 rounded-md"
        >
          8
        </div>
        <div
          onClick={btnClick}
          className="bg-gray-300 text-md font-bold  text-gray-900 w-20 h-12 text-center p-2 rounded-md"
        >
          9
        </div>
        <div
          onClick={btnClick}
          className="bg-orange-500 text-xl text-white w-20 p-2 rounded-md text-center"
        >
          -
        </div>
      </div>
      <div className="flex gap-1 my-2 px-4">
        <div
          onClick={btnClick}
          className="bg-gray-300 text-md font-bold  text-gray-900 w-20 p-2 rounded-md text-center"
        >
          4
        </div>
        <div
          onClick={btnClick}
          className="bg-gray-300 text-md font-bold  text-gray-900 w-20 h-12 text-center p-2 rounded-md"
        >
          5
        </div>
        <div
          onClick={btnClick}
          className="bg-gray-300 text-md font-bold  text-gray-900 w-20 h-12 text-center p-2 rounded-md"
        >
          6
        </div>
        <div
          onClick={btnClick}
          className="bg-orange-500 text-xl text-white w-20 p-2 rounded-md text-center"
        >
          +
        </div>
      </div>
      <div className="flex items-center justify-between px-3 gap-1">
        <div>
          <div className="flex gap-1 my-1 mx-1 mt-0.5 ">
            <div
              onClick={btnClick}
              className="bg-gray-300 text-md font-bold  text-gray-900 w-20 p-2 rounded-md text-center"
            >
              1
            </div>
            <div
              onClick={btnClick}
              className="bg-gray-300 text-md font-bold  text-gray-900 w-20 h-12 text-center p-2 rounded-md"
            >
              2
            </div>
            <div
              onClick={btnClick}
              className="bg-gray-300 text-md font-bold  text-gray-900 w-20 h-12 text-center p-2 rounded-md"
            >
              3
            </div>
          </div>
          <div>
            <div className="flex gap-1 my-2 mx-1">
              <div
                onClick={btnClick}
                className="bg-gray-300 text-md font-bold  text-gray-900 w-41 h-12 text-center p-2 rounded-md"
              >
                0
              </div>
              <div
                onClick={btnClick}
                className="bg-gray-300 text-md font-bold  text-gray-900 w-20 h-12 text-center p-2 rounded-md"
              >
                .
              </div>
            </div>
          </div>
        </div>
        <div
          onClick={btnClick}
          className="bg-green-500 text-xl text-center text-white w-20 h-26  p-2 rounded-md  "
        >
          =
        </div>
      </div>
    </div>
  );
}
