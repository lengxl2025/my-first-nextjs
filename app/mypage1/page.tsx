import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Food1";
import Button2 from "../components/Button2";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />

      <main className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            欢迎来到我的网站！ 🌟
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            这里是我的个人网站，记录着我的学习历程和生活点滴。
            点击下面的链接探索更多精彩内容吧！
          </p>
        </div>

        {/* 导航卡片 */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Link href="/about" className="group">
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border-2 border-transparent hover:border-blue-200 group-hover:scale-105">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <span className="text-3xl">👋</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  关于我
                </h3>
                <p className="text-gray-600">了解我的故事、经历和学习journey</p>
              </div>
            </div>
          </Link>

          <Link href="/hobbies" className="group">
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border-2 border-transparent hover:border-green-200 group-hover:scale-105">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                  <span className="text-3xl">🎨</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  我的爱好
                </h3>
                <p className="text-gray-600">分享我喜欢做的事情和兴趣爱好</p>
              </div>
            </div>
          </Link>
        </div>
        <Button2 variant="primary" size="lg">
          主要按钮
        </Button2>
        <Button2 variant="primary" size="lg">
          ci要按钮
        </Button2>
        {/* 成就展示 */}
        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto border-l-4 border-green-400">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            🎉 我的学习成就
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-2xl">📝</span>
              </div>
              <p className="font-semibold text-gray-700">学会了组件</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-2xl">🔗</span>
              </div>
              <p className="font-semibold text-gray-700">掌握了路由</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-2xl">🎨</span>
              </div>
              <p className="font-semibold text-gray-700">学会了样式</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-2xl">💻</span>
              </div>
              <p className="font-semibold text-gray-700">创建了网站</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
