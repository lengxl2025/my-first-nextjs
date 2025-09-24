"use client";
import { useState } from "react";

export default function Calculator() {
  const [display, setDisplay] = useState("0");
  const [previousValue, setPreviousValue] = useState<number | null>(null);
  const [operation, setOperation] = useState<string | null>(null);

  const handleNumber = (num: string) => {
    setDisplay(display === "0" ? num : display + num);
  };

  const handleOperation = (op: string) => {
    const value = parseFloat(display);
    setPreviousValue(value);
    setOperation(op);
    setDisplay("0");
  };

  const calculate = () => {
    const current = parseFloat(display);
    const previous = previousValue || 0;

    let result = 0;
    switch (operation) {
      case "+":
        result = previous + current;
        break;
      case "-":
        result = previous - current;
        break;
      case "*":
        result = previous * current;
        break;
      case "/":
        result = previous / current;
        break;
      default:
        result = current;
    }

    setDisplay(result.toString());
    setPreviousValue(null);
    setOperation(null);
  };

  const clear = () => {
    setDisplay("0");
    setPreviousValue(null);
    setOperation(null);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 max-w-sm mx-auto">
      <div className="bg-gray-900 text-white p-4 rounded mb-4 text-right text-2xl font-mono">
        {display}
      </div>

      <div className="grid grid-cols-4 gap-2">
        <button
          onClick={clear}
          className="bg-red-500 text-white p-3 rounded font-semibold col-span-2"
        >
          清除
        </button>
        <button
          onClick={() => handleOperation("/")}
          className="bg-orange-500 text-white p-3 rounded font-semibold"
        >
          ÷
        </button>
        <button
          onClick={() => handleOperation("*")}
          className="bg-orange-500 text-white p-3 rounded font-semibold"
        >
          ×
        </button>

        <button
          onClick={() => handleNumber("7")}
          className="bg-gray-200 p-3 rounded font-semibold"
        >
          7
        </button>
        <button
          onClick={() => handleNumber("8")}
          className="bg-gray-200 p-3 rounded font-semibold"
        >
          8
        </button>
        <button
          onClick={() => handleNumber("9")}
          className="bg-gray-200 p-3 rounded font-semibold"
        >
          9
        </button>
        <button
          onClick={() => handleOperation("-")}
          className="bg-orange-500 text-white p-3 rounded font-semibold"
        >
          -
        </button>

        <button
          onClick={() => handleNumber("4")}
          className="bg-gray-200 p-3 rounded font-semibold"
        >
          4
        </button>
        <button
          onClick={() => handleNumber("5")}
          className="bg-gray-200 p-3 rounded font-semibold"
        >
          5
        </button>
        <button
          onClick={() => handleNumber("6")}
          className="bg-gray-200 p-3 rounded font-semibold"
        >
          6
        </button>
        <button
          onClick={() => handleOperation("+")}
          className="bg-orange-500 text-white p-3 rounded font-semibold"
        >
          +
        </button>

        <button
          onClick={() => handleNumber("1")}
          className="bg-gray-200 p-3 rounded font-semibold"
        >
          1
        </button>
        <button
          onClick={() => handleNumber("2")}
          className="bg-gray-200 p-3 rounded font-semibold"
        >
          2
        </button>
        <button
          onClick={() => handleNumber("3")}
          className="bg-gray-200 p-3 rounded font-semibold"
        >
          3
        </button>
        <button
          onClick={calculate}
          className="bg-green-500 text-white p-3 rounded font-semibold row-span-2"
        >
          =
        </button>

        <button
          onClick={() => handleNumber("0")}
          className="bg-gray-200 p-3 rounded font-semibold col-span-2"
        >
          0
        </button>
        <button
          onClick={() => handleNumber(".")}
          className="bg-gray-200 p-3 rounded font-semibold"
        >
          .
        </button>
      </div>
    </div>
  );
}
