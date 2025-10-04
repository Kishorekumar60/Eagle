import Card from 'react-bootstrap/Card';
import CustomList from './CustomList';
import { MdDone } from "react-icons/md";
import { FaRupeeSign } from "react-icons/fa";

const MembershipCard = ({ type, icon, price, benefits, mostPopular }) => {
  return (
    <Card
      style={{
        background: "linear-gradient(to bottom, #212529, #1a1a1a)",
        border: "1px solid rgba(180, 180, 180, 0.2)", 
        borderRadius: "12px",
        padding: "20px",
        color: "#fff",
        gap: "0",
        position: 'relative',
        overflow: 'visible',
        transform: mostPopular ? 'scale(1.05)' : 'scale(1)',
      }}
    >
      {mostPopular && (
        <div className="top-right-badge">Most Popular</div>
      )}
      <Card.Body>
        <div className='card-title d-flex justify-content-start align-items-center mb-3 gap-3'>
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
            }}
          >
            {icon}
          </div>
          <h4 style={{fontWeight: '700'}}>{type}</h4>
        </div>
        <h5 className='text-center' style={{fontWeight: '700', color: '#F8B33E'}}><FaRupeeSign />{price} / Year</h5>
        <CustomList items={benefits} icon={<MdDone className="fs-4 mb-1 me-2" style={{color: '#F8B33E'}}/>}/>
      </Card.Body>
    </Card>
  )
}

export default MembershipCard