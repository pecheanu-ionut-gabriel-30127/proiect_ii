import React, { useState } from 'react'
import { BsPerson } from 'react-icons/bs'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import { FaFacebook, FaInstagram,FaTwitter} from 'react-icons/fa'

import { Link } from 'react-scroll'

import './NavbarStyles.css'

function Navbar() {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)

    return (
        <div name='home' className={nav ? 'navbar navbar-bg' : 'navbar'}>
            <div className={nav ? 'logo dark' : 'logo'}>
                <h2>DEALERSHIP.</h2>
            </div>
            <ul className="nav-menu">
                <Link to='home' smooth={true} duration={500} ><li>Home</li></Link>
                <Link to='rabla' smooth={true} duration={500} ><li>Programul Rabla 2022</li></Link>
                <Link to='oferta' smooth={true} duration={500} ><li>Oferta</li></Link>
                <Link to='clienti' smooth={true} duration={500} ><li>Clienti multumiti</li></Link>
            </ul>
            <div className="nav-icons">
                <BsPerson className='icon' />
            </div>
            <div className="hamburger" onClick={handleNav}>
                {!nav ? (<HiOutlineMenuAlt4 className='icon' />) : (<AiOutlineClose style={{ color: '#000' }} className='icon' />)}

            </div>

            <div className={nav ? 'mobile-menu active' : 'mobile-menu'}>
                <ul className="mobile-nav">
                <Link to='home' smooth={true} duration={500} ><li>Home</li></Link>
                <Link to='rabla' smooth={true} duration={500} ><li>Rabla</li></Link>
                <Link to='oferta' smooth={true} duration={500} ><li>Oferta</li></Link>
                <Link to='happy customers' smooth={true} duration={500} ><li>Clienti multumiti</li></Link>
                </ul>
                <div className="mobile-menu-bottom">
                    <div className="menu-icons">
                        <button>Account</button>
                    </div>
                    <div className="social-icons">
                        <FaFacebook className='icon' />
                        <FaInstagram className='icon' />
                        <FaTwitter className='icon' />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar
