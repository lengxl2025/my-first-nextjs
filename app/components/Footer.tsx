export default function Footer() {
  return (
    <footer
      className="bg-gradient-to-r from-gray-800 to-gray-900 text-white
      mt-20"
    >
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4">我的个人网站</h3>
            <p className="text-gray-300 leading-relaxed">
              这是我学习 Next.js 的成果，记录着我的编程学习之路。 感谢你的访问！
              😊
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">快速导航</h3>
            <p className="text-gray-300 leading-relaxed">🏠 首页</p>
            <p className="text-gray-300 leading-relaxed">👋 关于我</p>
            <p className="text-gray-300 leading-relaxed">🎨我的爱好</p>
          </div>
          <div className="text-center md:text-right">
            <h3 className="text-xl font-bold mb-4">学习统计</h3>
            <div className="space-y-2 text-gray-300">
              <p>📅学习天数：4天</p>
              <p>💻代码行数：500 +行</p>
              <p>🎯完成进度：60%</p>
              <p>☕️消耗咖啡: 8杯</p>
            </div>
          </div>
        </div>
        <div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <div className="flex justify-center items-center space-x-4 mb-4">
              <div className="w-8 h-8  bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">💻</span>
              </div>
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">📚</span>
              </div>
              <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">🎨</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} 我的第一个网站 | 用 ❤️ 和 Next.js
              制作
            </p>
            <p className="text-xs text-gray-500 mt-2">
              从零基础到能创建网站，编程改变生活！
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
