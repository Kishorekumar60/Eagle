import NavigationBar from "../components/NavigationBar"
import AboutUs from "../layouts/AboutUs"
import Contact from "../layouts/Contact"
import Courses from "../layouts/Courses"
import Footer from "../layouts/Footer"
import HeroSection from "../layouts/HeroSection"
import Memberships from "../layouts/Memberships"
import Services from "../layouts/Services"

const IndexPage = () => {
  return (
    <>
        <NavigationBar />
        <HeroSection />
        <AboutUs />
        <Services />
        <Courses />
        <Memberships />
        <Contact />
        <Footer />
    </>
  )
}

export default IndexPage