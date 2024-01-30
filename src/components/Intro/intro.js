import React from 'react';
import { Link } from 'react-scroll';
import { ImBubbles2 } from "react-icons/im";

import Fullstack from '../../assets/fullstack.png';
import Fullstack1 from '../../assets/fullstack1.png';
import './intro.css';

const Intro = () => {
    return (
        <section id='intro'>
            <div className='introContent'>
                <span className='hello'>Enchanté, </span>
                <span className='introText'>
                    Je suis
                    <span className='introName'> Stéphane UNG</span>
                    <br />
                    Développer Fullstack
                    <p className='introPara'>Une personne passionée par le développer web,
                        <br />
                        ayant des connaissances sur différents outils comme le React.js/Vue.js/Angular pour le frontend et Node.js/Spring boot côté backend
                    </p>
                    <Link><button className='btn'><ImBubbles2 alt='contact' className='btnImg'/>Me contacter</button></Link>
                </span>
            </div>
            <div className='fullstack'>
                <img src={Fullstack} alt='fullstack' className='fullstack1' />
                <img src={Fullstack1} alt='fullstack' className='fullstack2' />
            </div>
        </section>
    )
}

export default Intro;