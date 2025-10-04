import { Button, Container } from "react-bootstrap"
import ServiceCard from "../components/ServiceCard";
import { useState } from "react";
import { GrAlert } from "react-icons/gr";

const services = [
   {
    "id": 1,
    "title": "Ethical Hacking & Cyber Threat Analysis",
    "shortDesc": "Authorized ethical hacking, red‑team assessments and threat analysis to identify and prioritise risks.",
    "imageUrl": "/ethical_hacking.jpg"
   },
  {
    "id": 2,
    "title": "Network Security & Firewall Implementation",
    "shortDesc": "Design, deploy and tune enterprise firewalls and network segmentation for robust perimeter security.",
    "imageUrl": "/firewall.jpg" 
  },
  {
    "id": 3,
    "title": "Security Audits for IT Infrastructure",
    "shortDesc": "Comprehensive security audits covering servers, endpoints, networks and cloud resources.",
    "imageUrl": "/Security-Audits.png"
  },
  {
    "id": 4,
    "title": "Cyber Security Consultancy",
    "shortDesc": "Strategy, risk assessment, policy design and compliance guidance to protect businesses from cyber threats.",
    "imageUrl": "/cybersecurity.jpg"
  },
  {
    "id": 5,
    "title": "Cyber Forensic Analysis",
    "shortDesc": "In-depth forensic examination of digital devices and logs to recover evidence and reconstruct incidents.",
    "imageUrl": "/cyber-forensic.jpg"
  },
  {
    "id": 6,
    "title": "Mobile & Computer Data Recovery",
    "shortDesc": "Professional recovery of deleted, corrupted or inaccessible files from phones, PCs and storage media.",
    "imageUrl": "/data-recovery.jpg"
  },
  {
    "id": 7,
    "title": "All Cryptocurrency Recovery",
    "shortDesc": "Assistance and investigation aimed at recovering lost or stolen crypto assets where feasible and lawful.",
    "imageUrl": "/crypto-recovery.jpg"
  },
  {
    "id": 8,
    "title": "All OTP Security Analysis",
    "shortDesc": "Security testing and incident analysis related to OTP mechanisms — performed within legal/ethical bounds.",
    "imageUrl": "/otp-security.png"
  },
  {
    "id": 9,
    "title": "All Detected Files Recovery",
    "shortDesc": "Specialized recovery of files flagged or quarantined by security systems, with analysis and restoration.",
    "imageUrl": "/file-recovery.jpg"
  },
  {
    "id": 10,
    "title": "All Finding Tools",
    "shortDesc": "Toolsets and utilities used for detection, investigation and evidence collection in cyber investigations.",
    "imageUrl": "/finding-tools.jpg"
  },
  {
    "id": 11,
    "title": "Digital Evidence 65b Certificate",
    "shortDesc": "Preparation of Section 65B compliant certificates for admissibility of electronic evidence in Indian courts.",
    "imageUrl": "/de-certificate.png"
  },
  {
    "id": 12,
    "title": "Digital Evidence 65b Affidavit",
    "shortDesc": "Affidavit documentation to support digital evidence and attest the authenticity of electronic records.",
    "imageUrl": "/digital-evidence.jpg"
  },
  {
    "id": 13,
    "title": "Digital Evidence Document",
    "shortDesc": "Compilation and formal documentation of recovered digital evidence for legal and investigative use.",
    "imageUrl": "/digital-evidence-docs.jpg"
  },
  {
    "id": 14,
    "title": "Electronic Records Analysis & Report",
    "shortDesc": "Detailed analysis of electronic records and issuance of forensic reports and certificates for legal proceedings.",
    "imageUrl": "/electronic-records.jpg"
  },
  {
    "id": 15,
    "title": "Virtual Numbers Hosting & Tracking",
    "shortDesc": "Provision, hosting and investigative tracking of virtual/temporary numbers for traceability and investigations.",
    "imageUrl": "/virtual-number.png"
  },
  {
    "id": 16,
    "title": "Social Media Pages Recovery & Report",
    "shortDesc": "Recovery services for compromised social pages plus forensic reporting of takeover or tampering incidents.",
    "imageUrl": "/socialmedia.jpg"
  },
  {
    "id": 17,
    "title": "Social Media & Data Recovery & Delete",
    "shortDesc": "Comprehensive recovery and secure deletion services for social media data and personal information.",
    "imageUrl": "/socialmedia-recovery.jpg"
  }
];




const Services = () => {
  const [expanded, setExpanded] = useState(false);

  const visibleServices = expanded ? services : services.slice(0, 6);
  return (
    <section id="services" className="bg-dark p-2 text-light" style={{minHeight: '100vh'}}>
      <Container className="py-5 mt-5">
        <h1 className="text-center mb-4">Our Services</h1>
        <p className="text-center">
          Professional, lawful cybersecurity, forensics & recovery services. All work is performed within the boundaries of applicable laws.
        </p>
        <div className="services-container mt-5">
          {visibleServices.map((service) => (
            <ServiceCard key={service.id} title={service.title} shortDesc={service.shortDesc} imageUrl={service.imageUrl} />
          ))}
        </div>
        <div className="text-center mt-4">
          <div className="d-inline-flex align-items-start p-3 rounded" style={{backgroundColor: '#2c2c2c', color: '#F8B33E', maxWidth: '600px'}}>
            <p className="mb-0" style={{fontSize: '1rem'}}>
              <GrAlert className="me-2" size={20} />
              Note: Certain services require proof of ownership or written consent. All engagements strictly follow Indian law.
            </p>
          </div>
        </div>
        <div className="text-center mt-4">
          <Button
            variant="outline-light"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "Show Fewer Services" : "View All Services"}
          </Button>
        </div>
      </Container>
    </section>
  )
}

export default Services