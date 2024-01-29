import React from 'react';
import './skills.css';
import react from '../../assets/react.png';

const Skills = () => {
    return (
        <section id='skills'>
            <span className='skillTitle'>Qu'est ce que je sais faire</span>
            <span className='skillDesc'>
                Grâce à mes experiences scolaires et profesionnelles, j'ai pu étudier et acquérir des compétences techniques que ce soit : <br />
                la pratique des frameworks comme React.js/Nodejs/React native/Vue.js/Angular/Spring boot,
                la pratique des différents langages de programmation comme le JavaScript/HTML&CSS/Java/Python/PHP/C#,
                la réalisation des bases de données avec /MongoDB et l'édition des requêtes SQL
            </span>
            <span className='skillSubTitle'>Frameworks</span>
            <div className='skillBars'>
                <div className='skillBar'>
                    <img src={react} alt='React' className='skillBarImg' />
                    <div className='skillBarText'>
                        <h2>React.js</h2>
                    </div>
                </div>
                <div className='skillBar'>
                    <img src={react} alt='Nodejs' className='skillBarImg' />
                    <div className='skillBarText'>
                        <h2>Nodejs</h2>
                    </div>
                </div>
                <div className='skillBar'>
                    <img src='' alt='Vue' className='skillBarImg' />
                    <div className='skillBarText'>
                        <h2>Vue.js</h2>
                    </div>
                </div>
                <div className='skillBar'>
                    <img src='' alt='Angular' className='skillBarImg' />
                    <div className='skillBarText'>
                        <h2>Angular</h2>
                    </div>
                </div>
                <div className='skillBar'>
                    <img src='' alt='Spring' className='skillBarImg' />
                    <div className='skillBarText'>
                        <h2>Spring boot</h2>
                    </div>
                </div>
            </div>
            <span className='skillSubTitle'>Langages</span>
            <div className='skillBars'>
                <div className='skillBar'>
                    <img src={react} alt='js' className='skillBarImg' />
                    <div className='skillBarText'>
                        <h2>Javascript</h2>
                    </div>
                </div>
                <div className='skillBar'>
                    <img src={react} alt='js' className='skillBarImg' />
                    <div className='skillBarText'>
                        <h2>HTML&CSS</h2>
                    </div>
                </div>
                <div className='skillBar'>
                    <img src={react} alt='Nodejs' className='skillBarImg' />
                    <div className='skillBarText'>
                        <h2>Java</h2>
                    </div>
                </div>
                <div className='skillBar'>
                    <img src='' alt='Vue' className='skillBarImg' />
                    <div className='skillBarText'>
                        <h2>Python</h2>
                    </div>
                </div>
                <div className='skillBar'>
                    <img src='' alt='Angular' className='skillBarImg' />
                    <div className='skillBarText'>
                        <h2>PHP</h2>
                    </div>
                </div>
                <div className='skillBar'>
                    <img src='' alt='Spring' className='skillBarImg' />
                    <div className='skillBarText'>
                        <h2>C++</h2>
                    </div>
                </div>
            </div>
            <span className='skillSubTitle'>Système de gestion de base de données</span>
            <div className='skillBars'>
                <div className='skillBar'>
                    <img src={react} alt='MySQL' className='skillBarImg' />
                    <div className='skillBarText'>
                        <h2>MySQL</h2>
                    </div>
                </div>
                <div className='skillBar'>
                    <img src={react} alt='PostgreSQL' className='skillBarImg' />
                    <div className='skillBarText'>
                        <h2>PostgreSQL</h2>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;