import { Col, Container, Row } from "react-bootstrap"
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
import { FaXTwitter, FaInstagram, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4" style={{borderTop: '1px solid rgba(180, 180, 180, 0.2)'}}>
        <Container className="border-bottom border-secondary mt-4 pb-4">
            <Row>
                <Col md={12} lg={4}>
                    <div className='d-flex align-items-center gap-2'>
                        <img
                            alt=""
                            src="/ESDS-FINAL-LOGO-BLACK.png"
                            width="60"
                            height="60"
                            className="d-inline-block align-top"
                        />{' '}
                        <div className='d-flex flex-column text-light'>
                            <span>Eagle Sight</span>
                            <span style={{fontSize: '0.8rem', color: '#b4b4b4'}}>Detective Services</span>
                        </div>
                    </div>
                    <p className="text-light mt-4">Protecting individuals and organizations with trusted cyber investigation and security services. Our mission is to make the digital world safer, smarter, and more secure for everyone.</p>
                    <ul className="list-unstyled mt-4 mb-4">
                        <li className="mb-2"><MdOutlineEmail size={20} className="me-2"/> eaglesightteam@gmail.com</li>
                        <li className="mb-2"><FiPhone size={20} className="me-2"/> +91-7305373567</li>
                        <li className="mb-2 d-flex align-items-start">
                            <SlLocationPin size={40} className="me-2" />
                            <span>
                                17/2, Mounasamy Nagar, Near High Sec School, Cheran ma Nagar, Coimbatore - 641035.
                            </span>
                        </li>
                    </ul>
                </Col>
                <Col md={12} lg={4}>
                    <h5>Quick Links</h5>
                    <ul className="list-unstyled mt-4 mb-4">
                        <li className="mb-3"><a href="#home" className="text-light text-decoration-none">Home</a></li>
                        <li className="mb-3"><a href="#about" className="text-light text-decoration-none">About Us</a></li>
                        <li className="mb-3"><a href="#services" className="text-light text-decoration-none">Services</a></li>
                        <li className="mb-3"><a href="#courses" className="text-light text-decoration-none">Courses</a></li>
                        <li className="mb-3"><a href="#memberships" className="text-light text-decoration-none">Memberships</a></li>
                        <li className="mb-3"><a href="#contact" className="text-light text-decoration-none">Contact</a></li>
                    </ul>
                </Col>
                <Col md={12} lg={4}>
                    <h5>Follow Us</h5>
                    <div className="d-flex gap-3 mt-4 mb-4">
                        <a href="https://www.instagram.com/eage_sight_detective_services/?igsh=MWZiYm5rbHN1Y2E5bw%3D%3D#" target="_blank" rel="noopener noreferrer" className="text-light">
                            <FaInstagram size={25} />
                        </a>
                        <a href="" target="_blank" rel="noopener noreferrer" className="text-light">
                            <FaXTwitter size={25} />
                        </a>
                        <a href="" target="_blank" rel="noopener noreferrer" className="text-light">
                            <FaLinkedin size={25} />
                        </a>
                    </div>
                </Col>
            </Row>
        </Container>
        <Container>
            <p className="pt-3">© {new Date().getFullYear()} Eagle Sight Detective Services. All rights reserved.</p>
        </Container>
    </footer>
  )
}

export default Footer
