export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#34495e",
        color: "white",
        padding: "30px",
        textAlign: "center",
        marginTop: "50px",
      }}
    >
      <div style={{ maxWidth: "600px", margin: "0 auto" }}>
        <h3 style={{ margin: "0 0 15px 0" }}>感谢访问我的网站！</h3>
        <p style={{ margin: "0 0 20px 0", fontSize: "14px", opacity: "0.8" }}>
          这是我学习 Next.js 的成果，希望你喜欢 😊
        </p>
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.2)",
            paddingTop: "20px",
            fontSize: "12px",
            opacity: "0.6",
          }}
        >
          <p>
            © {new Date().getFullYear()} 我的第一个网站 | 用 ❤️ 和 Next.js 制作
          </p>
        </div>
      </div>
    </footer>
  );
}
