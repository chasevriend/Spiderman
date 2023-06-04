import React from 'react'
import "../styles/Hero.css";
import SpiderMan from "../images/spiderman.png";

const Hero = () => {
  return (
    <>
        <section id='home'>
            <div className='hero'>
                <div className='hero__container'>
                    <div className='hero__content'>
                        <h1>Marvel's Spider-Man 2</h1>
                        <p>Marvel's Spider-Man 2 is the newly released game in PlayStation's critically acclaimed Marvel's 
                        Spider-Man franchise.</p>
                        <button className='hero__btn'>Buy Now</button>
                    </div>
                    <div className='hero__imgs'>
                        <img src={SpiderMan} alt='spiderman' className='hero__img' />
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Hero