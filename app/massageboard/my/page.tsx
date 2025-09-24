"use client";
import { useState } from "react";
interface Message {
  id: number;
  text: string;
  time: string;
  emoji: string;
}

export default function MessageBoard() {
  const emojis = ["😊", "🎉", "❤️", "👍", "🌟", "🎨", "📚", "☕"];

  const initMsgs = [] as Message[];
  const [newMsg, setNewMsg] = useState("");
  const [activeEmoji, setActiveEmoji] = useState(0);
  const [msgs, setMsgs] = useState<Message[]>(initMsgs);

  const getId = (): number => Date.now();
  const sendMsg = () => {
    const emoji = emojis[activeEmoji];
    const id = getId();
    // msgs.push( as Message);
    setMsgs([
      {
        id,
        text: newMsg,
        emoji,
        time: new Date().toLocaleTimeString(),
      },
      ...msgs,
    ]);
  };

  const calEmojiClass = (idx: number) => `border-1
  shadow-xs
  p-2
  text-2xl
  rounded-lg
   ${activeEmoji == idx ? "scale-110 border-2 border-blue-700 bg-blue-100" : "hover:bg-gray-200 bg-gray-100 border-transparent"}`;

  return (
    <div className="p-4 mx-10 border-1 border-transparent shadow-2xl h-500">
      <div className="text-center text-2xl font-bold mt-8">💬 留言板</div>
      {/*======选择表情开始======*/}
      <div>选择表情：</div>
      <div className="flex gap-2 my-3">
        {emojis.map((emoji, idx) => (
          <div
            key={idx}
            className={calEmojiClass(idx)}
            onClick={() => setActiveEmoji(idx)}
          >
            {emoji}
          </div>
        ))}
      </div>
      {/*===========选择表情结束========*/}
      <div>留言内容：</div>
      <textarea
        value={newMsg}
        onChange={(e) => setNewMsg(e.target.value)}
        className="border-1 border-gray-300 w-full h-30 rounded-2xl p-2"
        placeholder="写下你想说的话..."
      ></textarea>
      <button
        className="bg-blue-500 w-full py-3 rounded-2xl text-white
        font-bold
        hover:bg-blue-600
        "
        onClick={sendMsg}
      >
        📤 发送留言
      </button>
      <div className="mt-5 flex flex-col gap-2">
        {msgs.map((msg) => (
          <div
            key={msg.id}
            className="flex bg-gray-100 py-3 rounded-2xl border-l-4 border-blue-500"
          >
            <div className="text-2xl m-3">{msg.emoji}</div>
            <div>
              <p>{msg.text}</p>
              <p>{msg.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
