import Link from "next/link";
import Header from "../components/Header";
export default function About() {
  return (
    <div
      style={{
        padding: "50px",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <Header />
      <h1 style={{ color: "#2c3e50", fontSize: "36px" }}>关于我 👋</h1>
      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          backgroundColor: "#f8f9fa",
          padding: "30px",
          borderRadius: "15px",
          marginTop: "30px",
        }}
      >
        <h2 style={{ color: "#e74c3c" }}>我是谁？</h2>
        <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
          我是一个正在学习编程的初学者。虽然现在还是新手，
          但我对创建美丽的网站充满热情！
        </p>

        <h2 style={{ color: "#3498db" }}>我的故事</h2>
        <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
          从来没想过自己会学编程，但是现在发现编程原来可以这么有趣！
          每天都在学习新的东西，每天都有小小的进步。
        </p>

        <h2 style={{ color: "#27ae60" }}>联系我</h2>
        <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
          如果你也在学习编程，欢迎和我一起交流学习心得！
        </p>
      </div>
      <div style={{ marginTop: "40px" }}>
        <Link
          href="/"
          style={{
            backgroundColor: "#6c757d",
            color: "white",
            padding: "10px 20px",
            borderRadius: "5px",
            textDecoration: "none",
          }}
        >
          🏠 返回首页
        </Link>
      </div>
      ;
    </div>
  );
}
// 在页面底部添加这个
