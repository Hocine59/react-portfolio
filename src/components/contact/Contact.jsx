import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_sftnh9o', 'template_eiojqae', form.current, 'wytwsYZJVuWFvNRu7')
    
    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact--option-icon'/>
            <h4>Email</h4>
            <h5>hocine.aliouat@gmail.com</h5>
            <a href="mailto:hocine.aliouat@gmail.com" target="_blank">Envoyez un message</a>
          </article>
          <article className='contact__option'>
            <MdOutlineEmail className='contact--option-icon'/>
            <h4>Linkedin</h4>
            <h5>hocine.aliouat@gmail.com</h5>
            <a href="mailto:hocine.aliouat@gmail.com" target="_blank">Envoyez un message</a>
          </article>
        </div>
        {/*End of contact*/}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Nom' requiered />
          <input type="text" name='email' placeholder='Votre email' required/>
          <textarea name='message' rows="7" placeholder='Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Envoyez</button>
        </form>
      </div>
    </section>
  )
}

export default Contact