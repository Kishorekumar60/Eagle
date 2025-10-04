import Card from 'react-bootstrap/Card';

const CourseCard = ({ title, level, duration, certificate, extra, price, imageUrl }) => {
  return (
    <Card bg='dark' text='light'
    className='course-card' 
    style={{
        border: "1px solid rgba(180, 180, 180, 0.2)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
    }}
    >
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <h5 className='m-0'>{title}</h5>
        <h6 className="text-muted">Level: {level}</h6>
        <p className="mt-2"><strong>Duration:</strong> {duration}</p>
        <p><strong>Certification:</strong> {certificate}</p>
        {extra && <p><strong>Note:</strong> {extra}</p>}
        <div className="d-flex justify-content-between align-items-center mt-3">
            <p className="fw-bold fs-5" style={{ color: "#F8B33E" }}>Price: {price}</p>
            <button className='join-course-btn p-2 text-center'>Join Course</button>
        </div>
      </Card.Body>
    </Card>
  )
}

export default CourseCard