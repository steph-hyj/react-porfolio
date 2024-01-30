import React from 'react';
import './contact.css';

const Contact = () => {
    return (
        <section id='contactPage'>
            <div id='contact'>
                <h1 className='contactPageTitle'> Me contacter</h1>
                <span className='contactDesc'>Ce formulaire vous permet de me contacter directement via adresse e-mail</span>
                <form className='contactForm'>
                    <input type='text' className='name' placeholder='Votre nom' />
                    <input type='email' className='email' placeholder='Votre adresse e-mail' />
                    <textarea className='msg' name='message' rows='5' placeholder='Votre message'></textarea>
                    <button type='submit' value='Envoyer' className='submitBtn'>Envoyer</button>
                </form>
            </div>
        </section>
    )
}

export default Contact;