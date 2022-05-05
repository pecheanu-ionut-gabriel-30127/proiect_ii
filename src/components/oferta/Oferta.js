import React from 'react'
import './OfertaStyles.css'

import Arkana from '../../assets/arkana.png'
import Captur from '../../assets/captur.jpg'
import Kadjar from '../../assets/kadjar.jpg'
import Kangoo from '../../assets/kangoo.jpg'
import Koleos from '../../assets/koleos.jpg'
import Talisman from '../../assets/talisman.png'

import SelectsImg from '../SelectsImg/SelectsImg'


function Selects() {
    return (
        <div name='views' className='selects'>
            <div className='container'>
                <SelectsImg bgImg={Arkana} text='Arkana' />
                <SelectsImg bgImg={Captur} text='Captur' />
                <SelectsImg bgImg={Kadjar} text='Kadjar' />
                <SelectsImg bgImg={Kangoo} text='Kangoo' />
                <SelectsImg bgImg={Koleos} text='Koleos' />
                <SelectsImg bgImg={Talisman} text='Talisman' />
            </div>

        </div>
    )
}

export default Selects
