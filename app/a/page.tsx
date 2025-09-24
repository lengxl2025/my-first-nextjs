import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Summary() {
  const achievements = [
    {
      day: 1,
      title: "环境搭建",
      desc: "成功启动第一个 Next.js 项目",
      emoji: "🚀",
    },
    { day: 2, title: "页面导航", desc: "创建多个页面并实现导航", emoji: "🧭" },
    { day: 3, title: "组件化", desc: "学会创建和复用组件", emoji: "🧩" },
    {
      day: 4,
      title: "样式美化",
      desc: "使用 Tailwind 让页面变漂亮",
      emoji: "🎨",
    },
    { day: 5, title: "数据展示", desc: "掌握动态数据渲染", emoji: "📊" },
    { day: 6, title: "交互功能", desc: "实现用户交互和状态管理", emoji: "⚡" },
    { day: 7, title: "部署上线", desc: "网站成功发布到互联网", emoji: "🌐" },
  ];

  const stats = [
    { label: "学习天数", value: "7", emoji: "📅" },
    { label: "创建页面", value: "6+", emoji: "📄" },
    { label: "编写组件", value: "8+", emoji: "🧩" },
    { label: "代码行数", value: "800+", emoji: "💻" },
    { label: "喝咖啡", value: "12", emoji: "☕" },
    { label: "成就感", value: "100%", emoji: "🎉" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-100">
      <Header />

      <main className="container mx-auto px-6 py-12">
        {/* 标题部分 */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-gray-800 mb-6">🎓 学习总结</h1>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            经过7天的努力学习，我从零基础变成了能够创建和部署网站的初级开发者！
          </p>
          <div className="mt-8 inline-block bg-green-100 text-green-800 px-6 py-3 rounded-full font-semibold text-lg">
            🎉 恭喜你！网站已成功部署上线！
          </div>
        </div>

        {/* 学习历程 */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
            📚 7天学习历程
          </h2>
          <div className="max-w-4xl mx-auto">
            {achievements.map((achievement) => (
              <div key={achievement.day} className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-6">
                  Day {achievement.day}
                </div>
                <div className="flex-1 bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        {achievement.title}
                      </h3>
                      <p className="text-gray-600">{achievement.desc}</p>
                    </div>
                    <span className="text-4xl">{achievement.emoji}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 学习统计 */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
            📈 学习统计
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 text-center"
              >
                <div className="text-4xl mb-3">{stat.emoji}</div>
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 技能树 */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
            🌳 技能树
          </h2>
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  前端技能
                </h3>
                <div className="space-y-3">
                  {[
                    { skill: "HTML/JSX", level: 85 },
                    { skill: "CSS/Tailwind", level: 80 },
                    { skill: "JavaScript", level: 70 },
                    { skill: "React 基础", level: 75 },
                  ].map((item) => (
                    <div key={item.skill}>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-700">{item.skill}</span>
                        <span className="text-gray-500">{item.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-green-500 h-3 rounded-full transition-all duration-1000"
                          style={{ width: `${item.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  开发技能
                </h3>
                <div className="space-y-3">
                  {[
                    { skill: "Next.js", level: 70 },
                    { skill: "组件设计", level: 75 },
                    { skill: "状态管理", level: 65 },
                    { skill: "项目部署", level: 90 },
                  ].map((item) => (
                    <div key={item.skill}>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-700">{item.skill}</span>
                        <span className="text-gray-500">{item.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full transition-all duration-1000"
                          style={{ width: `${item.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 感谢和下一步 */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl p-8 max-w-3xl mx-auto mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              💝 特别感谢
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  感谢我的老公 ❤️
                </h3>
                <p className="text-gray-600">
                  感谢你的耐心教导、鼓励和支持。没有你的帮助，
                  我不可能在短短7天内学会这么多知识！
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  感谢坚持的自己 💪
                </h3>
                <p className="text-gray-600">
                  感谢自己没有放弃，每天都坚持学习。
                  从对编程一无所知到能创建网站，这个转变太神奇了！
                </p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-2xl p-8 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              🚀 下一步计划
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <h3 className="text-lg font-bold mb-3 text-blue-800">
                  短期目标（1-2周）
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• 深入学习 React Hooks</li>
                  <li>• 学习更多 CSS 动画</li>
                  <li>• 创建个人博客项目</li>
                  <li>• 学习 TypeScript 基础</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-3 text-green-800">
                  长期目标（1-3个月）
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• 学习后端开发基础</li>
                  <li>• 掌握数据库操作</li>
                  <li>• 创建全栈应用</li>
                  <li>• 寻找前端开发工作</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
