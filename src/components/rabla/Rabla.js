import React from 'react'
import './RablaStyles.css'

import RablaClasic from '../../assets/RablaClasic.png'
import RablaPlus from '../../assets/RablaPlus.png'

function Rabla() {
    return (
        <div name='rabla' className='rabla'>
            <div className="row">
                <h1>Programul Rabla 2022</h1>
                <p>Afla tot ce trebuie pentru a profita de programul de anul acesta!</p>
                <div className="img-container">
                    <img src={RablaClasic} alt="/"/>
                    <img src={RablaPlus} alt="/"/>
                </div>
            </div>
        </div>
    )
}

export default Rabla
