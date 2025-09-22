import Header from "../components/Header";
import Footer from "../components/Footer";

export default function HobbiesData() {
  // 定义爱好数据
  const hobbies = [
    {
      id: 1,
      name: "听音乐",
      emoji: "🎵",
      description: "喜欢各种类型的音乐，特别是流行音乐和轻音乐",
      level: "高级",
      startYear: 2010,
      favorite: true,
    },
    {
      id: 2,
      name: "看书",
      emoji: "📚",
      description: "阅读让我增长知识，开拓视野，特别喜欢小说和励志类书籍",
      level: "高级",
      startYear: 2008,
      favorite: true,
    },
    {
      id: 3,
      name: "烘焙",
      emoji: "🍰",
      description: "享受制作甜品的过程，看到成品的那一刻充满成就感",
      level: "中级",
      startYear: 2018,
      favorite: false,
    },
    {
      id: 4,
      name: "学编程",
      emoji: "💻",
      description: "我的新爱好！正在学习如何制作网站，每天都有新发现",
      level: "初级",
      startYear: 2024,
      favorite: true,
    },
    {
      id: 5,
      name: "旅行",
      emoji: "✈️",
      description: "喜欢探索新的地方，体验不同的文化和风土人情",
      level: "中级",
      startYear: 2015,
      favorite: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
      <Header />

      <main className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            我的爱好数据 📊
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            这是一个动态的爱好展示页面，数据来自 JavaScript 数组
          </p>
        </div>

        {/* 统计信息 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">
              {hobbies.length}
            </div>
            <div className="text-gray-600">总爱好数</div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">
              {hobbies.filter((hobby) => hobby.favorite).length}
            </div>
            <div className="text-gray-600">最喜欢的</div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">
              {hobbies.filter((hobby) => hobby.level === "高级").length}
            </div>
            <div className="text-gray-600">高级技能</div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">
              {new Date().getFullYear() -
                Math.min(...hobbies.map((h) => h.startYear))}
            </div>
            <div className="text-gray-600">年学习经验</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {hobbies.map((hobby) => (
            <div
              key={hobby.id}
              className="bg-white rounded-xl shadow-2xl hover:shadow-xl transtition-all duration-300 p-6  border-2 border-transparent
             hover:border-purple-200 "
            >
              <div className="flex justify-between ">
                <div className="text-4xl">{hobby.emoji}</div>
                {hobby.favorite && (
                  <div className="bg-red-100 text-red-600 px-2  h-5 leading-5 rounded-xl  text-xs font-semibold ">
                    ❤️ 最爱
                  </div>
                )}
              </div>

              <p className="text-xl font-bold text-gray-800 mb-2">
                {hobby.name}
              </p>
              <p className="text-md text-gray-600 mb-4 leading-relaxed ">
                {hobby.description}
              </p>
              <div className="flex justify-between">
                <div className="text-sm text-gray-500">技能等级：</div>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-semibold
                ${
                  hobby.level === "高级"
                    ? "bg-green-100 text-green-600"
                    : hobby.level === "中级"
                      ? "bg-yellow-100 text-yellow-600"
                      : "bg-blue-100 text-blue-600"
                }
                `}
                >
                  {hobby.level}
                </span>
              </div>

              <div className="flex justify-between">
                <div className=" text-sm text-gray-500">开始时间</div>
                <span className="text-sm  ">
                  {hobby.startYear}({new Date().getFullYear() - hobby.startYear}
                  年经验 )
                </span>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
