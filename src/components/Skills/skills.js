import React from 'react';
import './skills.css';
import react from '../../assets/react.png';
import node from '../../assets/node.png';
import vue from '../../assets/vue.png';
import angular from '../../assets/angular.png';
import spring from '../../assets/spring.png';
import js from '../../assets/js.png';
import htmlcss from '../../assets/htmlcss.png';
import java from '../../assets/java.png';
import python from '../../assets/python.png';
import php from '../../assets/php.png';
import c from '../../assets/c++.png';
import mysql from '../../assets/mysql.png';
import postgres from '../../assets/posdtgres.png';

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
                    <img src={react} alt='React' center className='skillBarImg' />
                    <div className='skillBarText'>
                        <h3>React.js</h3>
                    </div>
                </div>
                <div className='skillBar'>
                    <img src={node} alt='Nodejs' className='skillBarImg' />
                    <div className='skillBarText'>
                        <h3>Nodejs</h3>
                    </div>
                </div>
                <div className='skillBar'>
                    <img src={vue} alt='Vue' className='skillBarImg' />
                    <div className='skillBarText'>
                        <h3>Vue.js</h3>
                    </div>
                </div>
                <div className='skillBar'>
                    <img src={angular} alt='Angular' className='skillBarImg' />
                    <div className='skillBarText'>
                        <h3>Angular</h3>
                    </div>
                </div>
                <div className='skillBar'>
                    <img src={spring} alt='Spring' className='skillBarImg' />
                    <div className='skillBarText'>
                        <h3>Spring boot</h3>
                    </div>
                </div>
            </div>
            <span className='skillSubTitle'>Langages</span>
            <div className='skillBars'>
                <div className='skillBar'>
                    <img src={js} alt='js' className='skillBarImg' />
                    <div className='skillBarText'>
                        <h3>Javascript</h3>
                    </div>
                </div>
                <div className='skillBar'>
                    <img src={htmlcss} alt='js' className='skillBarImg' />
                    <div className='skillBarText'>
                        <h3>HTML&CSS</h3>
                    </div>
                </div>
                <div className='skillBar'>
                    <img src={java} alt='Nodejs' className='skillBarImg' />
                    <div className='skillBarText'>
                        <h3>Java</h3>
                    </div>
                </div>
                <div className='skillBar'>
                    <img src={python} alt='Vue' className='skillBarImg' />
                    <div className='skillBarText'>
                        <h3>Python</h3>
                    </div>
                </div>
                <div className='skillBar'>
                    <img src={php} alt='Angular' className='skillBarImg' />
                    <div className='skillBarText'>
                        <h3>PHP</h3>
                    </div>
                </div>
                <div className='skillBar'>
                    <img src={c} alt='Spring' className='skillBarImg' />
                    <div className='skillBarText'>
                        <h3>C++</h3>
                    </div>
                </div>
            </div>
            <span className='skillSubTitle'>Système de gestion de base de données</span>
            <div className='skillBars'>
                <div className='skillBar'>
                    <img src={mysql} alt='MySQL' className='skillBarImg' />
                    <div className='skillBarText'>
                        <h3>MySQL</h3>
                    </div>
                </div>
                <div className='skillBar'>
                    <img src={postgres} alt='PostgreSQL' className='skillBarImg' />
                    <div className='skillBarText'>
                        <h3>PostgreSQL</h3>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;