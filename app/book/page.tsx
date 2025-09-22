import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
export default function Book() {
  const books = [
    {
      id: 1,
      title: "小王子",
      author: "圣埃克苏佩里",
      year: 1943,
      rating: 5,
      status: "已读完",
      cover: "📖",
      genre: "童话",
      favorite: true,
    },
    {
      id: 2,
      title: "哈利波特与魔法石",
      author: "J.K.罗琳",
      year: 1997,
      rating: 5,
      status: "已读完",
      cover: "🪄",
      genre: "奇幻",
      favorite: true,
    },
    {
      id: 3,
      title: "百年孤独",
      author: "加西亚·马尔克斯",
      year: 1967,
      rating: 4,
      status: "正在读",
      cover: "📚",
      genre: "文学",
      favorite: false,
    },
    {
      id: 4,
      title: "三体",
      author: "刘慈欣",
      year: 2006,
      rating: 5,
      status: "已读完",
      cover: "🚀",
      genre: "科幻",
      favorite: true,
    },
    {
      id: 5,
      title: "活着",
      author: "余华",
      year: 1993,
      rating: 4,
      status: "想要读",
      cover: "📝",
      genre: "文学",
      favorite: false,
    },
  ];
  return (
    <div>
      <div className="bg-blue-50 ">
        <Header />
        <div className="text-5xl font-bold text-center mt-10">我的书架 📚</div>
        <p className="text-xl text-gray-600 text-center py-6">
          记录我读过的、正在读的和想要读的书籍
        </p>
        <div className="bg-white px-2 pt-10 pb-14 m-10 rounded-2xl shadow-2xl">
          <div className="text-2xl font-bold text-center mb-4">📊 阅读统计</div>
          <div className="flex items-center  justify-around ">
            <div className="text-center">
              <div className="text-blue-600 text-3xl font-bold ">
                {books.filter((b) => b.status === "已读完").length}
              </div>

              <p className="text-gray-800">已读完</p>
            </div>
            <div className="text-center">
              <div className="text-orange-500 text-3xl font-bold">
                {books.filter((b) => b.status === "正在读").length}
              </div>
              <p className="text-gray-800 text-x1">正在读</p>
            </div>
            <div className="text-center">
              <div className="text-green-600 text-3xl font-bold">
                {books.filter((b) => b.status === "想要读").length}
              </div>
              <p className="text-gray-800">想要读</p>
            </div>
            <div className="text-center">
              <div className="text-red-600 text-3xl font-bold">
                {books.filter((b) => b.favorite).length}
              </div>
              <p className="text-gray-800">最喜欢</p>
            </div>
          </div>
        </div>
        {["已读完", "正在读", "想要读"].map((status) => (
          <div key={status} className="mb-12">
            <h3 className="text-2xl font-bold text-gray-800 text-center">
              {status === "已读完" && "✅"}
              {status === "正在读" && "📖"}
              {status === "想要读" && "💭"}
              {status}
            </h3>
            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
            mx-auto"
            >
              {books
                .filter((book) => book.status === status)
                .map((book) => (
                  <div
                    key={book.id}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl
                  transition-all duration-300 p-6 m-4"
                  >
                    <div className=" flex items-start justify-between mb-4">
                      <div className="text-3xl">{book.cover}</div>
                      <div className="text-right">
                        {book.favorite && (
                          <span className="text-red-500">❤️</span>
                        )}
                        <div
                          className={`px-2 py-1 rounded-full text-xs font-semibold mt-1
                       ${
                         book.genre === "童话"
                           ? "bg-pink-100 text-pink-600"
                           : book.genre === "奇幻"
                             ? "bg-purple-100 text-purple-600"
                             : book.genre === "文学"
                               ? "bg-blue-100 text-blue-600"
                               : book.genre === "科幻"
                                 ? "bg-green-100 text-green-600"
                                 : "bg-gray-100 text-gray-600"
                       }`}
                        >
                          {book.genre}
                        </div>
                      </div>
                    </div>
                    <div className="text-xl font-bold ">{book.title}</div>
                    <div className="text-md text-gray-600 py-1 ">
                      作者:{book.author}
                    </div>
                    <div className="text-sm text-gray-500 py-2">
                      出版年份:{book.year}
                    </div>
                    <div className="text-sm text-gray-500">
                      评分:{"⭐️".repeat(book.rating)}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
        <div className="text-center p-8">
          <Link
            href="/"
            className=" inline-flex bg-gradient-to-r  from-indigo-500
            to-blue-500 p-4 px-8 rounded-xl
            text-white font-bold
           hover:from-indigo-500 hover:to-blue-600
           transition-all duration-300 shadow-lg
           hover:shadow-xl transform hover:scale-105 "
          >
            🏠 返回首页
          </Link>
        </div>
        <Footer />;
      </div>
    </div>
  );
}
