import Header from "../components/Header";
import Card from "../components/Card";
import BackHome from "../components/BackHome";
export default function Hobbies() {
  return (
    <div
      style={{
        padding: "50px",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#fff5f5",
      }}
    >
      <Header />
      <h1 style={{ color: "#e74c3c", fontSize: "36px" }}>我的爱好 🎨</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          maxWidth: "800px",
          margin: "30px auto",
        }}
      >
        <Card
          title="听音乐"
          content="喜欢各种类型的音乐,特别是流行音乐和轻音乐"
          emoji="🎵"
          backgroundColor="#e8f5e8"
        ></Card>

        <Card
          title=" 看书"
          content="喜欢看小说和自我提升类的书籍"
          emoji="📚"
          backgroundColor="#e8f5e8"
        ></Card>
        <Card
          title=" 烘焙"
          content="喜欢做蛋糕和小点心，享受制作的过程"
          emoji="🍰"
          backgroundColor="#e8f5e8"
        ></Card>
        <Card
          title=" 学编程"
          content="喜欢做蛋糕和小点心，享受制作的过程"
          emoji="💻 "
          backgroundColor="#e8f5e8"
        ></Card>
      </div>
      {/*// 在页面底部添加这个*/}
      <BackHome />
    </div>
  );
}
