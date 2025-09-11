import Link from "next/link";
export default function MyNave(props: {
  items: { name: string; path: string }[];
}) {
  return (
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
        {/*循环props 生成多个Link*/}
        {props.items.map((item) => (
          <Link
            key={item.path}
            href={item.path}
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
            👋 {item.name}
          </Link>
        ))}

        {/*<Link
          href=
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
          🎨 {{item.name}}
        </Link>*/}
      </div>
    </nav>
  );
}
