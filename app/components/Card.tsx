interface CardProps {
  title: string;
  content: string;
  emoji: string;
  bgColor?: string;
}

export default function Card({
  title,
  content,
  emoji,
  bgColor = "bg-white",
}: CardProps) {
  return (
    <div
      className="`${bgColor} rounded-xl shadow-lg hover:shadow-xl
      transition-shadow duration-300 p-6 border border-gray-100'}>
      <div className="
      text-content
    >
      <div className="trxt-4x1 mb-4">{emoji}</div>
      <h3 className="text-x1 font-bold text-grey-800 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{content}</p>
    </div>
  );
}
