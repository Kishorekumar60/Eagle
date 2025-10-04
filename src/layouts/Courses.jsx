import { Container } from "react-bootstrap"
import CourseCard from "../components/CourseCard"


const Courses = () => {
    const courses = [
    {
        id: 1,
        title: "Cyber Security Online Course Level 1",
        level: "Beginner",
        duration: "6 months",
        certificate: "Course completion certificate",
        extra: "Admission fees applicable",
        price: "₹20,000",
        imageUrl: "/course-images/course-1.png"
    },
    {
        id: 2,
        title: "Cyber Security Online Course Level 2",
        level: "Intermediate",
        duration: "1 year",
        certificate: "Course completion certificate + Job Offer",
        price: "₹35,000",
        imageUrl: "/course-images/course-2.png"
    },
    {
        id: 3,
        title: "Cyber Security Online Course Level 3",
        level: "Advanced Professional",
        duration: "3 years",
        certificate: "Course completion certificate, Professional certificate, Marksheet, Job offer in our company",
        price: "₹2,00,000",
        imageUrl: "/course-images/course-3.jpg"
    }
    ];

  return (
    <section id='courses' className="p-2 text-light" style={{minHeight: '100vh', backgroundColor: '#1a1a1a'}}>
        <Container className="py-5 mt-5">
            <h1 className="text-center mb-4">Courses</h1>
            <p className="text-center">
                Start your journey into the world of Cyber Security — from beginner to professional.
            </p>
            <div className="course-cards mt-5">
                {courses.map(course => (
                    <CourseCard key={course.id} {...course} />
                ))}
            </div>
        </Container>
    </section>
  )
}

export default Courses