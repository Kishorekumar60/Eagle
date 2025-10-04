import { Container } from "react-bootstrap"
import { MdChevronRight } from "react-icons/md";


const HeroSection = () => {
  return (
    <section id="home" className="hero-section bg-dark text-light" style={{height: '100vh'}}>
        <Container className="hero-container p-3 d-flex flex-column flex-md-row justify-content-center align-items-center gap-4 h-100">
            <div className="hero-text ps-3">
                <h1 className="hero-title">Your Trusted Eye in the <span style={{color: '#F8B33E'}}>Digital World!</span></h1>
                <p className="hero-description text-light">At Eagle Sight Detective Services, we don’t just monitor — we protect. 
                    Our mission is to safeguard individuals, businesses, 
                    and organizations from the rising threats of the digital world 
                    through expert cyber security and investigative services.
                </p>
                <button className="get-protected-btn p-3 fw-bold d-flex justify-content-center align-items-center">Get Protected Now <MdChevronRight className="ms-2 fs-3" /></button>
            </div>
            <img className="img-fluid hero-image" src="/esds-logo.png" alt="esds-logo" />
        </Container>
    </section>
  )
}

export default HeroSection