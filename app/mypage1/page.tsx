export default function MyPage1() {
  return (
    <div
      style={{
        padding: "50px",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1
        style={{
          color: "red",
          fontSize: "48px",
          marginBottom: "20px",
        }}
      >
        欢迎来到我的第一个网站！
      </h1>

      <p
        style={{
          fontSize: "20px",
          color: "#666",
          marginBottom: "30px",
        }}
      >
        我正在学习 Next.js，这是我的第一个页面 🎉
      </p>

      <div
        style={{
          backgroundColor: "#f0f8ff",
          padding: "20px",
          borderRadius: "10px",
          maxWidth: "600px",
          margin: "0 auto",
        }}
      >
        <h2>关于我</h2>
        <p>我是一个编程新手，正在学习前端开发。</p>
        <p>今天是我学习 Next.js 的第一天！</p>
        <p>我叫菜鸟月亮🌛</p>
      </div>
    </div>
  );
}
