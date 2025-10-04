import Card from 'react-bootstrap/Card';

const StatsCards = ({ title, value, icon }) => {
  return (
    <Card
      className=" text-center shadow-sm d-flex flex-column align-items-center justify-content-between"
      style={{
        background: "linear-gradient(to bottom, #212529, #1a1a1a)", // dark gradient
        border: "1px solid rgba(180, 180, 180, 0.1)", 
        borderRadius: "12px",
        padding: "20px",
        color: "#fff",
        gap: "0"
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(248, 180, 62, 0.1)",
          color: "#F8B33E",
          fontSize: "30px",
          borderRadius: "8px",
          display: "inline-flex",
          justifyContent: "center",
          alignItems: "center",
          width: "60px",
          height: "60px",
          marginBottom: "15px",
        }}
      >
        {icon}
      </div>
      <h2 style={{ color: "#F8B33E", fontWeight: "bold" }}>{value}</h2>
      <p style={{ margin: 0}}>{title}</p>
    </Card>
  )
}

export default StatsCards