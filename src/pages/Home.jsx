import React from 'react'
import Header from '../components/Header.jsx';
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection';
import '../styles/general.css'
import Accordion from '../components/Accordion';
import Galeria from '../components/Galeria.jsx';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Home() {

  //Smooth para que al seleccionar galería baje de forma lenta
  const location = useLocation()

  useEffect(() => {
    if (location.state?.scrollTo === "galeria") {

      const section = document.getElementById("galeria")
      
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]) 


  return (
    <>
      <Header />

      <main >
        <HeroSection />
        <Accordion />
        <Galeria />
      </main>

      <Footer />
      
      
    </>
  )
}

export default Home

