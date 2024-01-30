import React from "react";
import './portfolio.css';
import projet_native from '../../assets/projet scolaire.jpg';
import projet_native1 from '../../assets/projet scolaire 1.jpg';
import projet_native2 from '../../assets/projet scolaire 2.jpg';
import projet_native3 from '../../assets/projet scolaire 3.jpg';
import projet_admin from '../../assets/projet scolaire admin.jpg';
import projet_admin1 from '../../assets/projet scolaire admin 1.jpg';
import projet_admin2 from '../../assets/projet scolaire admin 2.jpg';


const Portfolio = () => {

    return (
        <section id='works'>
            <h2 className="worksTitle">Mon portfolio</h2>
            <span className="worksDesc">Ayant étudié à Epitech qui est une école d'ingénieur qui se base sur l'apprentissage par projet, j'ai eu l'occasion de réaliser de nombreux projets notamment des projets web avec Reactjs et nodejs mais aussi des applications mobiles avec React native.</span>
            <span className='worksSubTitle'>Projet avec react native</span>
            <div className="worksImgs">
                <img src={projet_native} alt="projet_native" className="worksImg" />
                <img src={projet_native1} alt="projet_native1" className="worksImg" />
                <img src={projet_native2} alt="projet_native2" className="worksImg" />
                <img src={projet_native3} alt="projet_native2" className="worksImg" />
            </div>
            <span className='worksSubTitle'>Projet avec react </span>
            <div className="worksImgs">
                <img src={projet_admin} alt="projet_native" className="worksImg1" />
                <img src={projet_admin1} alt="projet_native1" className="worksImg1" />
                <img src={projet_admin2} alt="projet_native2" className="worksImg1" />
            </div>
        </section>
    )
}

export default Portfolio;