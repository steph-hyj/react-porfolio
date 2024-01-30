import React from 'react'
import { Link } from 'react-scroll';

//Import Css file for navbar
import './navbar.css';
import { ImBubbles2 } from 'react-icons/im';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='desktopMenu'>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Accueil</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Mes compétences</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Portfolio</Link>
            </div>
            {/* <button className='desktopBtn'>
                <img src='' alt='' className='desktopImgBtn' />
                Me contacter
            </button> */}
            <button className='desktopMenuBtn' onClick={() => { document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }) }}>
                <ImBubbles2 alt='contact' className='desktopImgBtn' />Me contacter
            </button>
        </nav>
    )
}

export default Navbar