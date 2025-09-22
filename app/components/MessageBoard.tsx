"use client";
import { useState } from "react";
interface Message {
  id: number;
  text: string;
  time: string;
  emoji: string;
}
export default function MessageBoard() {
  const [Messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "欢迎来到我的网站！这是第一条消息 🎉",
      time: new Date().toLocaleDateString(),
      emoji: "👋",
    },
  ]);
  const [newMessage, setNewMessages] = useState("");
  const [selectedEmoji, setSelectedmoji] = useState("😊");
  const emoji = ["😊", "🎉", "❤️", "👍", "🌟", "🎨", "📚", "咖啡"];
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim() === "") return;
  };
  return <></>;
}
