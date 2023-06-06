import React from 'react';
import "../styles/Images.css";

const Images = () => {
  return (
    <>
        <section id='images'>
            <div className='images'>
            <h2>Images</h2>
                <div className='images__container'>
                    <div className='images__cell'>
                        <img src='https://insomniac.games/wp-content/uploads/2021/10/MSM2_Reveal_Venom_4K_Legal-scaled.jpg' alt='spiderman game screenshot' className='images__img' />
                    </div>
                    <div className='images__cell'>
                        <img src='https://insomniac.games/wp-content/uploads/2021/10/MSM2_GameplayReveal_Kraven_4K_Legal_2023-scaled.jpg' alt='spiderman game screenshot' className='images__img' />
                    </div>
                    <div className='images__cell'>
                        <img src='https://insomniac.games/wp-content/uploads/2021/10/MSM2_Reveal_Heroes_4K_Legal-scaled.jpg' alt='spiderman game screenshot' className='images__img' />
                    </div>

                    <div className='images__cell'>
                        <img src='https://insomniac.games/wp-content/uploads/2021/10/MSM2_GameplayReveal_PeteMiles_4K_Legal_2023-scaled.jpg' alt='spiderman game screenshot' className='images__img' />
                    </div>
                    <div className='images__cell'>
                        <img src='https://insomniac.games/wp-content/uploads/2021/10/MSM2_GameplayReveal_MilesEnchancedVenom_4K_Legal_2023-scaled.jpg' alt='spiderman game screenshot' className='images__img' />
                    </div>
                    <div className='images__cell'>
                        <img src='https://insomniac.games/wp-content/uploads/2021/10/MSM2_GameplayReveal_SymbioteSlam_4K_Legal_2023-scaled.jpg' alt='spiderman game screenshot' className='images__img' />
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Images