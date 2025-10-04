import Card from 'react-bootstrap/Card';

const ServiceCard = ({ title, shortDesc, imageUrl }) => {

  const cardStyle = {
    background: `var(--service-gradient), url(${imageUrl})`,
    backgroundImage: `var(--service-gradient), url(${imageUrl})`, // for ::before pseudo-element
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    border: "1px solid rgba(180, 180, 180, 0.2)", 
    borderRadius: "12px",
    padding: "20px",
    color: "#fff",
    gap: "15px",
  }

  return (
    <Card
      className="service-card text-center shadow-sm d-flex flex-column align-items-center justify-content-between"
      style={cardStyle}
    >
      <h2 style={{ color: "#F8B33E", fontWeight: "bold" }}>{title}</h2>
      <p style={{ margin: 0}}>{shortDesc}</p>
      <button className='enquire-now-btn p-2 mt-3'>Enquire Now</button>
    </Card>
  )
}

export default ServiceCard