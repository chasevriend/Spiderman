import React from 'react'
import "../styles/Footer.css";

const Footer = () => {
  return (
    <>
        <div className='footer'>
            <div className='footer__container bg-slate-900'>
                <div className='footer__cell'>
                    <img 
                    src='https://insomniac.games/wp-content/themes/insomniacgames/images/insomniac-games-logo-dark.svg' 
                    alt='insomniac logo' 
                    className='footer__img' 
                    />
                </div>
                <div className='footer__cell'>
                    <img 
                    src='https://insomniac.games/wp-content/uploads/2021/05/PS_Studios_footer.svg' 
                    alt='playstation logo' 
                    className='footer__img' 
                    />
                </div>
                <div className='footer__cell'>
                    <p className='footer__header'>Burbank Studio</p>
                    <p>2255 N Ontario St.</p>
                    <p>Suite 550</p>
                    <p>Burbank, CA 91504</p>
                </div>
                <div className='footer__cell'>
                    <p className='footer__header'>Durham Studio</p>
                    <p>7806 NC Hightway 751</p>
                    <p>Suite 300</p>
                    <p>Durham, NC 27713</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer