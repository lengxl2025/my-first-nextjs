interface PersonnalInfoProps {
  name?: string;
  age?: string;
  status?: string;
  city?: string;
  bgc?: string;
}

export default function PersonnalInfo(props: PersonnalInfoProps) {
  return (
    <div
      style={{
        backgroundColor: props.bgc || "#f8f9fa",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        width: "400px",
        margin: "10px auto",
        textAlign: "center",
      }}
    >
      <h2 style={{ fontSize: "24px", margin: "0 0 10px 0" }}>
        <h2 style={{ color: "#2c3e50", marginBottom: "20px" }}></h2>
        👤个人信息
      </h2>

      <div style={{ textAlign: "left" }}>
        <p>
          <strong>姓名：</strong>
          {props.name}
        </p>
        <p>
          <strong>年龄：</strong>
          {props.age}
        </p>
        <p>
          <strong>状态：</strong>
          {props.status}
        </p>
        <p>
          <strong>城市：</strong>
          {props.city}
        </p>
      </div>
    </div>
  );
}
