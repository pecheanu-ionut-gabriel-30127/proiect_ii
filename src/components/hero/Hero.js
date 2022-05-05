import React from 'react'
import './HeroStyles.css'

import Video from '../../assets/Renault-video.mp4'

function Hero() {
    return (
        <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src={Video} type='video/mp4' />
            </video>
            <div className="overlay"></div>
            <div className="content">
                <h1>Cele mai bune masini</h1>
                <h2>La cele mai mici preturi</h2>
            </div>
        </div>
    )
}

export default Hero
