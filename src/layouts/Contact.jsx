import { Button, Card, Container, Form } from "react-bootstrap"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MdOutlineEmail, MdOutlineAccessTime } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
import ContactInfoCard from "../components/ContactInfoCard";


const Contact = () => {

    const contactInfo = [
        {
        icon: <MdOutlineEmail />,
        title: 'Email Us',
        details: 'yugamcyberworld2277@gmail.com',
        description: 'Get in touch for any inquiries'
        },
        {
        icon: <FiPhone />,
        title: 'Call Us',
        details: '+91-9791312277',
        description: '24/7 emergency hotline available'
        },
        {
        icon: <SlLocationPin />,
        title: 'Visit Us',
        details: '130/37A, Near Railway Gate, Krishnapuram (PO), Madathukulam (TK), Tiruppur (DT) - 642111. Ph - 9791312277.',
        description: 'Our headquarters and main office'
        },
        {
        icon: <MdOutlineAccessTime />,
        title: 'Business Hours',
        details: 'Mon-Fri: 9AM-6PM',
        description: 'Emergency support: 24/7'
        }
    ];

  return (
    <section id='contact' className="p-2 text-light" style={{minHeight: '100vh', backgroundColor: '#1a1a1a'}}>
        <Container className="py-5 mt-5">
            <h1 className="text-center mb-4">Contact Us</h1>
            <p className="text-center mb-5">
                Ready to safeguard your digital world? Contact Eagle Sight Detective Services today for a confidential consultation and a tailored security assessment.
            </p>
            <Row className="g-5">
                <Col md={12} lg={6}>
                    <Card
                    style={{
                        background: "linear-gradient(to bottom, #212529, #1a1a1a)",
                        border: "1px solid rgba(180, 180, 180, 0.2)", 
                        padding: "25px",
                        color: "#fff",
                        gap: "0",
                    }}
                    >   
                        <Form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                            <h3 className="mb-3">Quick Enquiry Form</h3>
                        <Row className="mb-4">
                            <Form.Group as={Col} controlId="formFirstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter First Name" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formLastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Last Name" />
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-4" controlId="formPhoneNumber">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control type="text" placeholder="Enter Phone Number" />
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter Email" />
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Example textarea</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Tell us about your security needs..."/>
                        </Form.Group>

                        <Button 
                        className="w-100 mt-2" 
                        style={{backgroundColor: '#F8B33E', borderColor: '#fff', border: '1px solid #F8B33E'}} 
                        type="submit"
                        >
                            Submit
                        </Button>
                        </Form>                        
                    </Card>
                </Col>
                <Col md={12} lg={6}>
                    <h3 className="mb-3">Get in Touch</h3>
                    <p>
                       Our cyber investigation and security experts are ready to assist you. 
                       Whether you require urgent support, confidential guidance, 
                       or a complete security plan, Eagle Sight Detective Services is 
                       here to protect you every step of the way.
                    </p>
                    <div className="contact-info mt-4">
                        {contactInfo.map((info, index) => (
                            <ContactInfoCard key={index} {...info} />
                        ))}
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Contact