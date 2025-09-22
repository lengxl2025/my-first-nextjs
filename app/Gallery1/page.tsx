import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Gallery() {
  const photos = [
    {
      id: 1,
      title: "美丽的日落",
      location: "海边",
      date: "2024-01-15",
      favorite: true,
      emoji: "🌅",
      category: "风景",
    },
    {
      id: 2,
      title: "可爱的小猫",
      location: "家里",
      date: "2024-02-20",
      favorite: true,
      emoji: "🐱",
      category: "动物",
    },
    {
      id: 3,
      title: "美味的蛋糕",
      location: "厨房",
      date: "2024-03-10",
      favorite: false,
      emoji: "🎂",
      category: "美食",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-100">
      <Header />

      <main className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">我的相册 📸</h2>
          <p className="text-xl text-gray-600">记录生活中的美好瞬间</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center text-6xl">
                {photo.emoji}
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-800">
                    {photo.title}
                  </h3>
                  {photo.favorite && <span className="text-red-500">❤️</span>}
                </div>
                <p className="text-gray-600 mb-2">📍 {photo.location}</p>
                <p className="text-gray-500 text-sm mb-2">📅 {photo.date}</p>
                <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-xs">
                  {photo.category}
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
