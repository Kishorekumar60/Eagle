import Card from 'react-bootstrap/Card';

const ContactInfoCard = ({icon, title, details, description}) => {
  return (
    <Card
      className="shadow-sm"
      style={{
        background: "linear-gradient(to bottom, #212529, #1a1a1a)", // dark gradient
        border: "1px solid rgba(180, 180, 180, 0.1)", 
        borderRadius: "12px",
        padding: "15px",
        color: "#fff",
        gap: "0"
      }}
    >
      <div className='d-flex align-items-center gap-3'>
        <div
            style={{
            backgroundColor: "rgba(248, 180, 62, 0.1)",
            color: "#F8B33E",
            fontSize: "25px",
            borderRadius: "8px",
            display: "inline-flex",
            justifyContent: "center",
            alignItems: "center",
            width: "50px",
            height: "50px",
            }}
        >
            {icon}
        </div>
        <h5 className='text-light'>{title}</h5>
      </div>
        <p className='fw-bold mt-3' style={{ color: "#F8B33E" }}>{details}</p>
        <p style={{ margin: 0 }}>{description}</p>
    </Card>
  )
}

export default ContactInfoCard