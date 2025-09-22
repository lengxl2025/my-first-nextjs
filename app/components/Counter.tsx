"use client";
import { useState } from "react";
export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="text-center ">
        <div className="bg-white  p-5  rounded-lg shadow-xl max-w-md mx-auto ">
          <div className="text-2xl font-bold ">🔢计数器</div>
          <div className="text-blue-600 text-6xl font-bold mt-4 ">{count}</div>
          <div className="flex items-center px-6 gap-3 pt-5 justify-between">
            <div
              className="text-white font-bold bg-red-500 px-6 py-3  rounded-lg"
              onClick={() => setCount(count - 1)}
            >
              ➖ 减1
            </div>
            <div
              className="text-white font-bold bg-gray-500 px-6 py-3 rounded-lg "
              onClick={() => setCount(0)}
            >
              🔄 重制
            </div>
            <div
              className="bg-green-500 font-bold text-white px-6 py-3 rounded-lg "
              onClick={() => setCount(count + 1)}
            >
              ➕ 加1
            </div>
          </div>
          <div className="text-sm text-gray-700 pt-8 ">
            {count === 0 && "点击按钮开始计数吧"}
            {count > 0 && "太棒了！你已经点击了1次${count }次"}
            {count < 0 && "哎呀，数字变成负数了！"}
          </div>
        </div>
      </div>
    </div>
  );
}
