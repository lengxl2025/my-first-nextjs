"use client";
import { useState } from "react";
interface LikeButtonProps {
  initialLikes?: number;
  title: string;
}
export default function LikeButton({
  initialLikes = 0,
  title,
}: LikeButtonProps) {
  const [likes, setLikes] = useState(initialLikes);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
      setIsLiked(false);
    } else {
      setLikes(likes + 1);
      setIsLiked(true);
    }
  };
  return (
    <div className="bg-white rounded-xl p-6 max-w-sm mt-15 shadow-lg ">
      <h1 className="text-lg font-semibold ">{title}</h1>
      <div className="flex items-center justify-between">
        <span className="text-gray-600">{likes}个赞</span>

        <button
          onClick={handleLike}
          className={`py-2 px-4 rounded-lg hover:shadow-xl ${
            isLiked
              ? "bg-red-500  text-white  font-semibold shadow-lg"
              : "bg-gray-100 font-bold hover:bg-gray-200"
          }`}
        >
          <span
            className={`text-xl transition-transform ${isLiked ? "animate-pulse" : ""}`}
          >
            {isLiked ? "❤️" : "🤍"}
          </span>
          {isLiked ? "已赞" : "点赞"}
        </button>
      </div>
      {isLiked && (
        <div className="mt-3 text-sm text-red-500">谢谢你的喜欢! 😊</div>
      )}
    </div>
  );
}
