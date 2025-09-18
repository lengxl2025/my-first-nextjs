import Header from "../components/Header";
import Card from "../components/Card";
import BackHome from "../components/BackHome";
import Footer from "../components/Footer";

export default function Hobbies() {
  return (
    <div
      className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100
      "
    >
      <Header />
      <main className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h2>我的爱好</h2>
        </div>
      </main>

      <Card
        title="听音乐"
        content="喜欢各种类型的音乐,特别是流行音乐和轻音乐"
        emoji="🎵"
        bgColor="#e8f5e8"
      ></Card>

      <Card
        title=" 看书"
        content="喜欢看小说和自我提升类的书籍"
        emoji="📚"
        bgColor="#e8f5e8"
      ></Card>
      <Card
        title=" 烘焙"
        content="喜欢做蛋糕和小点心，享受制作的过程"
        emoji="🍰"
        bgColor="#e8f5e8"
      ></Card>
      <Card
        title=" 学编程"
        content="喜欢做蛋糕和小点心，享受制作的过程"
        emoji="💻 "
        bgColor="#e8f5e8"
      ></Card>
      {/*// 在页面底部添加这个*/}
      <BackHome />
      <Footer />
    </div>
  );
}
