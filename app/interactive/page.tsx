import Header from "../components/Header";
import Footer from "../components/Footer";
import Counter from "../components/Counter";

export default function Interactive() {
  return (
    <div>
      <div className="bg-gradient-to-b from-cyan-50 to-blue-100">
        <Header />
        <div className="text-5xl font-bold mt-10 text-center">交互功能 ⚡️</div>
        <p className="text-xl text-gray-600 text-center mt-6 mb-12">
          体验 React 的状态管理，让页面变得生动有趣！
        </p>
        <Counter />
        <Footer />
      </div>
    </div>
  );
}
