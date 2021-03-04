import React from 'react';
import '../../App.css'
import { Button } from '../Button'
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';


function Home () {
    return (
        <>
          <HeroSection />
          <Cards />
          <Footer />
        </>
    )
}

export default Home;