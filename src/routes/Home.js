import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";
 function Home (){ 
    return(
      
        <>
        <Navbar/>
        <Hero
        cName="hero"
        heroImg="https://images.unsplash.com/photo-1682651342414-9950cb235470?ixlib=rb-4.0.
        3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDd8RnpvM3p1T0hONnd8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
title ="Lets make memories"
        text = "select the destination"
        buttonText="Plan"
        url="/"
        btnClass="show"/>
        <Destination/>
        <Trip/>
        <Footer/>
        </>
    );


}
export default Home;