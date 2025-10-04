import { Container } from "react-bootstrap"
import CustomList from "../components/CustomList";
import StatsCards from "../components/StatsCards";
import { FaUserGroup, FaGraduationCap } from "react-icons/fa6";
import { LiaCertificateSolid } from "react-icons/lia";
import { WiTime4 } from "react-icons/wi";

const AboutUs = () => {

    const highlights = [
        "Collaborations with Indian Air Force & Indian Army",
        "Cyber Security Awareness Programs in schools & colleges",
        "Authorized for Cyber Law Digital Evidence Certificates",
        "Trusted by clients across multiple industries"
    ];

    const stats = [
        { title: "Clients Secured", value: "200+", icon: <FaUserGroup /> },
        { title: "Years of Experience", value: "2+", icon:  <LiaCertificateSolid />},
        { title: "Incident Monitoring", value: "24/7", icon: <WiTime4 /> },
        { title: "Institutional Collaborations", value: "5+", icon: <FaGraduationCap /> }
    ];

  return (
    <section id="about" className="p-2 text-light" style={{minHeight: '100vh', backgroundColor: '#1a1a1a'}}>
        <h1 className="text-center mt-5 py-5">About Us</h1>
        <Container className="d-flex flex-column flex-lg-row align-items-start gap-4">
            <div className="about-text">
                <h2 className="about-title">Leading the Fight Against 
                <span style={{color: '#F8B33E'}}> Cyber Crime &amp; Digital Threats</span></h2>
                <p className="about-description">With cutting-edge expertise and government recognition, Eagle Sight Detective Services has been at the forefront of cyber security since 2023. Founded by <strong>Mr. Aravinth Subramanian</strong>, an International Level Cyber Security Expert and awardee of the <b>Dr. Abdul Kalam Award & Indian Icon 2023</b>, we specialize in protecting individuals, businesses, and institutions from the ever-evolving world of digital threats.We believe cyber security isn’t just about technology—it’s about trust, confidentiality, and resilience. That’s why we take a holistic approach, ensuring every aspect of your digital ecosystem is secured against modern-day attacks.</p>
                <CustomList items={highlights} />
            </div>
            <div className="stats-cards mb-5">
                <div>
                    {stats.map((stat, index) => (
                        <StatsCards 
                            key={index}
                            title={stat.title}
                            value={stat.value}
                            icon={stat.icon}
                        />
                    ))}
                </div>
            </div>
        </Container>
    </section>
  )
}

export default AboutUs