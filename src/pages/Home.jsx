import React from 'react';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Images from '../components/Images';
import Nav from '../components/Nav';

const Home = () => {
  return (
    <>
        {/* Nav, Hero, Images, Videos, Banner, Call to Action, Footer */}
        <Nav />
        <Hero />
        <Images />

        <Banner /> 
        <Footer />
    </>
  )
}

export default Home