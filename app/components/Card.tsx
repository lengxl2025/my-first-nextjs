interface CardProps {
  title: string;
  content: string;
  emoji: string;
  backgroundColor?: string;
}

export default function Card({
  title,
  content,
  emoji,
  backgroundColor = "#ffffff",
}: CardProps) {
  return (
    <div
      style={{
        backgroundColor: backgroundColor,
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        margin: "10px",
        textAlign: "center",
      }}
    >
      <h3 style={{ fontSize: "24px", margin: "0 0 10px 0" }}>
        {emoji} {title}
      </h3>
      <p style={{ fontSize: "16px", color: "#666", lineHeight: "1.5" }}>
        {content}
      </p>
    </div>
  );
}
