import Header from "../components/Header";
import Footer from "../components/Footer";

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

export default function Gallery() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-100 ">
      <Header />
      <div>
        <div className="text-5xl font-bold p-10 text-center  ">我的相册 📸</div>
        <div className="text-xl text-gray-600 text-center mb-12">
          记录生活中的美好瞬间
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 text-center   ">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="text-5xl bg-white rounded-xl mx-5 my-10"
          >
            <div
              className="bg-gradient-to-br from-blue-200 to-pink-100
              w-full py-15
              rounded-t-xl
              "
            >
              {photo.emoji}
            </div>
            <div className="text-center ">
              <div className="px-5 m-2 flex flex-col gap-2">
                <div className="flex justify-between items-center pt-5">
                  <p className="text-xl font-bold text-left ">{photo.title}</p>
                  <p className="text-sm">❤️{photo.favorite}</p>
                </div>

                <p className="text-gray-600 text-sm text-left py-1 ">
                  📍 {photo.location}
                </p>
                <p className="text-sm text-gray-600 text-left">
                  📅 {photo.date}
                </p>
                <div className="text-xs  text-blue-800 bg-blue-100 w-10 h-5 rounded-xl leading-5">
                  {photo.category}
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="  "></div>
      </div>
      <Footer />
    </div>
  );
}
