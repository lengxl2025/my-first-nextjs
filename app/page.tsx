import Link from "next/link";
import Header from "./components/Header";
import MyNave from "./components/MyNav";
import PersonnalInfo from "./components/PersonnalInfo";
export default function Home() {
  return (
    <div
      style={{
        padding: "50px",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div />
      <Header />

      <h1 style={{ color: "#2c3e50", fontSize: "48px" }}>
        欢迎来到我的网站！ 🌟
      </h1>

      <p style={{ fontSize: "20px", color: "#666", margin: "20px 0" }}>
        这里是我的个人网站，点击下面的链接探索更多内容
      </p>

      {/* 导航菜单 */}
      <MyNave
        items={[
          { name: "关于我", path: "/about" },
          { name: "联系我", path: "/contact" },
          { name: "我的爱好", path: "/hobbies" },
          { name: "我的博客", path: "/blog" },
          { name: "相册", path: "/gallery" },
          { name: "我的第一个页面", path: "/mypage1" },
        ]}
      />
      <nav
        style={{
          backgroundColor: "#f8f9fa",
          padding: "20px",
          borderRadius: "15px",
          margin: "30px auto",
          maxWidth: "500px",
        }}
      >
        <h2 style={{ color: "#495057", marginBottom: "20px" }}>导航菜单 🧭</h2>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
        >
          <Link
            href="/about"
            style={{
              backgroundColor: "#007bff",
              color: "white",
              padding: "12px 20px",
              borderRadius: "8px",
              textDecoration: "none",
              fontSize: "16px",
              fontWeight: "bold",
              transition: "all 0.3s",
            }}
          >
            👋 关于我
          </Link>

          <Link
            href="/contact"
            style={{
              backgroundColor: "#28a745",
              color: "white",
              padding: "12px 20px",
              borderRadius: "8px",
              textDecoration: "none",
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            🎨 联系我
          </Link>
          <Link
            href="/hobbies"
            style={{
              backgroundColor: "#007bff",
              color: "white",
              padding: "12px 20px",
              borderRadius: "8px",
              textDecoration: "none",
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            🎨 我的爱好
          </Link>

          <Link
            href="/blog"
            style={{
              backgroundColor: "#28a745",
              color: "white",
              padding: "12px 20px",
              borderRadius: "8px",
              textDecoration: "none",
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            🎨 我的博客
          </Link>

          <Link
            href="/gallery"
            style={{
              backgroundColor: "#007bff",
              color: "white",
              padding: "12px 20px",
              borderRadius: "8px",
              textDecoration: "none",
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            🎨 相册
          </Link>

          <Link
            href="/mypage1"
            style={{
              backgroundColor: "#28a745",
              color: "white",
              padding: "12px 20px",
              borderRadius: "8px",
              textDecoration: "none",
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            mypage1
          </Link>
        </div>
      </nav>

      <div
        style={{
          backgroundColor: "#d4edda",
          padding: "20px",
          borderRadius: "10px",
          maxWidth: "600px",
          margin: "30px auto",
          border: "2px solid #c3e6cb",
        }}
      >
        <h3 style={{ color: "#155724" }}>🎉 恭喜你！</h3>
        <p style={{ color: "#155724", margin: "10px 0" }}>你已经学会了：</p>
        <ul style={{ textAlign: "left", color: "#155724" }}>
          <li>创建多个页面</li>
          <li>使用文件夹组织页面</li>
          <li>添加页面导航</li>
          <li>使用 Link 组件</li>
        </ul>
      </div>
    </div>
  );
}
