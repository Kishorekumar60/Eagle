import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="bg-dark d-flex flex-column align-items-center justify-content-center text-white" style={{height: '100vh'}}>
        <h1>404</h1>
        <p className="">Oops! Page not found</p>
        <Link to="/">Return to Home</Link>
    </div>
  )
}

export default NotFound