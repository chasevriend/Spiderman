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
                        <h1 className='text-6xl font-semibold text-slate-900'>
                            Spider-Man 2
                        </h1>
                        <p className='text-xl font-medium text-slate-500'>Marvel's Spider-Man 2 is the newly released game in PlayStation's critically acclaimed Marvel's 
                        Spider-Man franchise.</p>
                        <button className='hero__btn font-semibold bg-red-600'>Buy Now</button>
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