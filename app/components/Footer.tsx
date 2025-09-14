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
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4">学习统计</h3>
            <p className="text-gray-300 leading-relaxed">📅学习天数：4天</p>
            <p className="text-gray-300 leading-relaxed">💻代码行数：500+行</p>
            <p className="text-gray-300 leading-relaxed">🎯完成进度：60%</p>
            <p className="text-gray-300 leading-relaxed">☕️消耗咖啡8杯</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
