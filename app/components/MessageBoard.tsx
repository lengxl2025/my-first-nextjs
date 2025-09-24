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
  const [newMessage, setNewMessage] = useState("");
  const [selectedEmoji, setselectedEmoji] = useState("😊");
  const [messages, setMessage] = useState<Message[]>([]);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (newMessage.trim() === "") return;
    const message: Message = {
      id: Date.now(),
      text: newMessage,
      time: new Date().toLocaleDateString(),
      emoji: selectedEmoji,
    };
    setMessage([...messages, message]);
    setNewMessage("");
  };
  return (
    <div>
      <div className="text-2xl font-bold  mt-6 max-w-28 mx-auto">💬 留言板</div>

      {/*=========表情部分=========*/}
      <div className=" bg-white shadow-lg mx-10 px-6 ">
        <div className="text-sm font-bold">选择表情:</div>
        <div className="flex gap-2 flex-wrap my-4">
          {emojis.map((emoji) => (
            <button
              key={emoji}
              onClick={() => setselectedEmoji(emoji)}
              className={` p-2 bg-gray-100 rounded-xl text-2xl transition-all ${
                selectedEmoji === emoji
                  ? "hover:bg-blue-100 border-2 border-blue-400 scale-125"
                  : "bg-gray-100 hover:bg-gray-100 "
              }`}
            >
              {emoji}
            </button>
          ))}
        </div>
        {/*=========发送留言部分========*/}

        <label className="py-3 text-sm font-bold text-gray-600  ">
          留言内容:
        </label>
        <div>
          <textarea
            className="w-full min-h-20 border-2 border-gray-300  rounded-lg p-2 "
            value={newMessage}
            placeholder="写下你想说的话..."
            onChange={(e) => setNewMessage(e.target.value)}
          ></textarea>
        </div>
        <div
          className="bg-blue-500 py-3 text-white font-semibold text-center rounded-lg mt-6"
          onClick={handleSubmit}
        >
          📤 发送留言
        </div>

        {/*{messages.map((msg) => (
          <div key={msg.id}></div>
        ))}
        {messages.map((msg) => {
          return <div key={msg.id}></div>;
        })}*/}

        {/*{messages.map((message) => (

        ))}*/}
        {messages.map((message) => (
          <div
            key={message.id}
            className="flex py-6 text-gray-600 bg-gray-100 border-l-4 border-blue-500 rounded-2xl my-4 px-4"
          >
            <div className="text-2xl ">{message.emoji}</div>
            <div className="px-2">
              <div>{message.text}</div>
              <div className="text-xs pt-2">{message.time}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
