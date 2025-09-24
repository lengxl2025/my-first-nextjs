"use client";
import { useState } from "react";

interface Message {
  id: number;
  text: string;
  time: string;
  emoji: string;
}

export default function MessageBoard() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "欢迎来到我的网站！这是第一条消息 🎉",
      time: new Date().toLocaleTimeString(),
      emoji: "👋",
    },
  ]);

  const [newMessage, setNewMessage] = useState("");
  const [selectedEmoji, setSelectedEmoji] = useState("😊");

  const emojis = ["😊", "🎉", "❤️", "👍", "🌟", "🎨", "📚", "☕"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (newMessage.trim() === "") return;

    const message: Message = {
      id: Date.now(),
      text: newMessage,
      time: new Date().toLocaleTimeString(),
      emoji: selectedEmoji,
    };

    setMessages([...messages, message]);
    setNewMessage("");
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 max-w-2xl mx-auto">
      <h3 className="text-2xl font-bold mb-6 text-gray-800 text-center">
        💬 留言板
      </h3>

      {/* 留言表单 */}
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            选择表情：
          </label>
          <div className="flex gap-2 flex-wrap">
            {emojis.map((emoji) => (
              <button
                key={emoji}
                type="button"
                onClick={() => setSelectedEmoji(emoji)}
                className={`p-2 rounded-lg text-2xl transition-all ${
                  selectedEmoji === emoji
                    ? "bg-blue-100 border-2 border-blue-500 scale-125"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                {emoji}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            留言内容：
          </label>
          <textarea
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="写下你想说的话..."
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            rows={3}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
        >
          📤 发送留言
        </button>
      </form>

      {/* 留言列表 */}
      <div className="space-y-4 max-h-96 overflow-y-auto">
        {messages.map((message) => (
          <div
            key={message.id}
            className="bg-gray-50 rounded-lg p-4 border-l-4 border-blue-500"
          >
            <div className="flex items-start gap-3">
              <span className="text-2xl">{message.emoji}</span>
              <div className="flex-1">
                <p className="text-gray-800">{message.text}</p>
                <p className="text-xs text-gray-500 mt-2">{message.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 text-center text-sm text-gray-600">
        共有 {messages.length} 条留言
      </div>
    </div>
  );
}
