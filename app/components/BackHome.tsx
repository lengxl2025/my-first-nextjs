import Link from "next/link";
export default function Header() {
  return (
    <div style={{ marginTop: "40px" }}>
      <Link
        href="/"
        style={{
          backgroundColor: "#6c757d",
          color: "white",
          padding: "10px 20px",
          borderRadius: "5px",
          textDecoration: "none",
        }}
      >
        🏠 返回首页
      </Link>
    </div>
  );
}
