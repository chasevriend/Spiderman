import React from 'react';
import "../styles/Banner.css";

const Banner = () => {
  return (
    <>
        <div className='banner'>
            <div className='banner__container bg-slate-900'>
                <img 
                src='https://insomniac.games/wp-content/uploads/2021/10/Fall2023.png' 
                alt='release date' 
                className='banner__img' 
                />
                <img 
                src='https://insomniac.games/wp-content/uploads/2020/10/platformPS5.png' 
                alt='platforms' 
                className='banner__img' 
                />
                <img 
                src='https://insomniac.games/wp-content/uploads/2017/07/spiderman_marvel_logo.jpg' 
                alt='marvel logo' 
                className='banner__img' 
                />
                <img 
                src='https://insomniac.games/wp-content/uploads/2020/10/PublisherPSS.png' 
                alt='play station' 
                className='banner__img' 
                />
            </div>
        </div>
    </>
  )
}

export default Banner