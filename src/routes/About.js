import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../assets/3.jpeg";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";
function About (){
    return(
        <>
<Navbar/>
        <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title ="About"
        
       
        url="/"
        btnClass="hide"/>
        <AboutUs/>
        <Footer/>
        
        </>
    );
    


}
export default About;