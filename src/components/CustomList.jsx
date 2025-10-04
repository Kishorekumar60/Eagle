import { GoDotFill } from "react-icons/go";

const CustomList = ({ items, icon = <GoDotFill className="fs-4 mb-1 me-2" style={{color: '#F8B33E'}} /> }) => {
  return (
    <ul className="list-unstyled text-light">
    {items.map((highlight, index) => (
        <li key={index} className="py-2">
             {icon} {highlight}
        </li>
    ))}
</ul>
  )
}

export default CustomList