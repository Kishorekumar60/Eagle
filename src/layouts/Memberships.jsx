import { Container } from "react-bootstrap"
import MembershipCard from "../components/MembershipCard"
import { FaGraduationCap } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import { FaBuilding } from "react-icons/fa";

const Memberships = () => {

  const memberships = [
    {
      id: 1,
      type: "Student Membership",
      icon: <FaGraduationCap />,
      price: 3000,
      mostPopular: false,
      benefits: [
        "ID Card",
        "Badge",
        "Certificate"
      ]
    },
    {
      id: 2,
      type: "Individual Membership",
      icon: <IoPerson />,
      price: 6000,
      mostPopular: true,
      benefits: [
        "ID Card",
        "Badge",
        "Certificate",
        "Website Profile Verification",
        "T-shirt Uniform"
      ]
    },
    {
      id: 3,
      type: "Corporate Membership",
      icon: <FaBuilding />,
      price: 10000,
      mostPopular: false,
      benefits: [
        "ID Card",
        "Badge",
        "Certificate",
        "T-shirt Uniform",
        "Website Tools Login Access",
        "E-books",
        "Name Letter Pad",
        "RF Tag",
        "Authorized Log Seal"
      ]
    }
  ];


  return (
    <section id='memberships' className="p-2 text-light bg-dark" style={{minHeight: '100vh'}}>
        <Container className="py-5 mt-5">
            <h1 className="text-center mb-4">Membership Plans</h1>
            <p className="text-center">
                Join Eagle Sight Detective Services and unlock exclusive benefits.
            </p>
            <div className="membership-cards mt-5">
                {memberships.map((membership) => (
                    <MembershipCard key={membership.id} {...membership} />
                ))}
            </div>
        </Container>
    </section>
  )
}

export default Memberships