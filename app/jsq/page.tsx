"use client";
/**
 * 1. 写界面
 * 2. 写每个按钮的点击事件
 * 3 写了一个 btnClick 点击事件去拿到点击的按钮
 * 4. 根据点击按钮值去哟计算逻辑操作
 * 5. 需要有一个变量记录计算器点击的一个公式
 * 用这个代码记录公式，并显示在屏幕上
 *  const [calExp, setCalExp] = useState("0");
 * 6. 记录的公式使用eval函数编程对应的结果
 * 直接问豆包： js中 eval 函数详解
 * eval() 是 JavaScript 中一个特殊的函数，
 * 它的作用是将传入的字符串当作 JavaScript 代码执行，
 * 并返回执行结果
 * 7. 执行时候会发现多个符号连起来，所以加个最后点击按钮变量，
 * 判断是否要添加到计算变量去
 * const [lastOp, setLastOp] = useState("0");
 *
 */
import { BaseSyntheticEvent, useState } from "react";

export default function Jsq() {
  const [calExp, setCalExp] = useState("0");
  const [lastOp, setLastOp] = useState("0");

  const setCal = (opt: string) => {
    if (calExp === "0") {
      setCalExp(opt);
    } else {
      setCalExp(`${calExp}${opt}`);
    }
    setLastOp(opt);
  };
  const isNumber = (op: string): boolean => {
    const v = parseInt(op);
    return !(v != 0 && !v);
  };
  const btnClick = (e: BaseSyntheticEvent) => {
    console.error(e);
    // 点击的按钮值
    const opt = e.target.innerText;
    // alert(lastOp);
    // alert(calExp.replaceAll("÷", "/").replaceAll("x", "*"));
    // 根据点击按钮值去编写计算逻辑
    switch (opt) {
      case "清除":
        setCalExp("0");
        break;

      case "÷":
      case "x":
      case "-":
      case "+":
        //加减乘除判断最后拼接的字符是不是数字
        if (isNumber(lastOp)) {
          // 是数字，可以继续拼接
          setCal(opt);
        }
        // 不是数字，不做任何操作
        break;
      case "=":
        // 计算结果
        let calStr = calExp.replaceAll("÷", "/").replaceAll("x", "*");
        if (!isNumber(lastOp)) {
          calStr = `${calStr}0`;
        }
        const ret = eval(calStr);
        setCalExp(ret);
        break;
      // 数字可以直接拼接
      case ".":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
      case "0":
        setCal(opt);
    }
  };
  return (
    <div className="shadow-lg w-94 h-100 p-5   mx-auto">
      <div className="bg-black text-white text-3xl text-right p-3  rounded-lg ">
        {calExp}
      </div>
      <div className="flex justify-between">
        <div
          onClick={btnClick}
          className="bg-red-500 text-white text-md font-bold h-10 w-40 leading-10 mt-4
        text-center rounded-lg"
        >
          清除
        </div>
        <div
          onClick={btnClick}
          className="bg-orange-500  text-white text-2xl  h-10 w-20 leading-10 mt-4 text-center rounded-lg"
        >
          ÷
        </div>
        <div
          onClick={btnClick}
          className="bg-orange-500  text-white text-lg  h-10 w-20 leading-10 mt-4 text-center rounded-lg"
        >
          x
        </div>
      </div>
      <div className="flex gap-2">
        <div
          onClick={btnClick}
          className="bg-gray-300  text-black text-md h-10 w-20 leading-10 mt-4 text-center rounded-lg"
        >
          7
        </div>
        <div
          onClick={btnClick}
          className="bg-gray-300  text-black text-md h-10 w-20 leading-10 mt-4 text-center rounded-lg"
        >
          8
        </div>
        <div
          onClick={btnClick}
          className="bg-gray-300  text-black text-md h-10 w-20 leading-10 mt-4 text-center rounded-lg"
        >
          9
        </div>
        <div
          onClick={btnClick}
          className="bg-orange-500  text-white text-2xl  h-10 w-20 leading-10 mt-4 text-center rounded-lg"
        >
          -
        </div>
      </div>
      <div className="flex gap-2">
        <div
          onClick={btnClick}
          className="bg-gray-300  text-black text-md h-10 w-20 leading-10 mt-4 text-center rounded-lg"
        >
          4
        </div>
        <div
          onClick={btnClick}
          className="bg-gray-300  text-black text-md h-10 w-20 leading-10 mt-4 text-center rounded-lg"
        >
          5
        </div>
        <div
          onClick={btnClick}
          className="bg-gray-300  text-black text-md h-10 w-20 leading-10 mt-4 text-center rounded-lg"
        >
          6
        </div>
        <div
          onClick={btnClick}
          className="bg-orange-500  text-white text-2xl  h-10 w-20 leading-10 mt-4 text-center rounded-lg"
        >
          +
        </div>
      </div>
      <div className=" flex justify-between">
        <div className="flex flex-col justify-between">
          <div className="flex gap-1">
            <div
              onClick={btnClick}
              className="bg-gray-300  text-black text-md h-10 w-20 leading-10 mt-4 text-center rounded-lg"
            >
              1
            </div>
            <div
              onClick={btnClick}
              className="bg-gray-300  text-black text-md h-10 w-20 leading-10 mt-4 text-center rounded-lg"
            >
              2
            </div>
            <div
              onClick={btnClick}
              className="bg-gray-300  text-black text-md h-10 w-20 leading-10 mt-4 text-center rounded-lg"
            >
              3
            </div>
          </div>
          <div className="flex gap-1">
            <div
              onClick={btnClick}
              className="bg-gray-300  text-black text-md h-10 w-41 leading-10 mt-4 text-center rounded-lg"
            >
              0
            </div>
            <div
              onClick={btnClick}
              className="bg-gray-300  text-black text-md h-10 w-20 leading-10 mt-4 text-center rounded-lg"
            >
              .
            </div>
          </div>
        </div>
        <div
          onClick={btnClick}
          className="bg-green-500  text-white text-2xl  h-24 w-20 leading-24 mt-4 text-center rounded-lg"
        >
          =
        </div>
      </div>
    </div>
  );
}
