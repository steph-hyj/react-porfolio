import React from 'react'
import { Link } from 'react-scroll';

//Import Css file for navbar
import './navbar.css';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='desktopMenu'>
                <Link className='desktopMenuListItem'>Accueil</Link>
                <Link className='desktopMenuListItem'>A propos</Link>
                <Link className='desktopMenuListItem'>Portfolio</Link>
                <Link className='desktopMenuListItem'>Parcours scolaire</Link>
                <Link className='desktopMenuListItem'>Parcours professionnel</Link>
                <Link className='desktopMenuListItem'>Me contacter</Link>
            </div>
            {/* <button className='desktopBtn'>
                <img src='' alt='' className='desktopImgBtn' />
                Me contacter
            </button> */}
        </nav>
    )
}

export default Navbar