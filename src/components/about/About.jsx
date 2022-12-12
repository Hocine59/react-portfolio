import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {AiFillFire} from 'react-icons/ai'
import {ImBook} from 'react-icons/im'
/*import {AiFillFire} from 'react-icons/ai'*/


const About = () => {
  return (
    <section id='about'>
      <h5>A propos</h5>
      <h2>de moi</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about"></img>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
          <article className="about__card">
            <AiFillFire className="about__icon" />
              <h5/>
              <small>Je suis</small>
              <h5>Passionné</h5>
            </article> <article className="about__card">
             <ImBook className="about__icon" />
             <h5/>
              <small>Je suis</small>
              <h5>Curieux</h5>

            </article> <article className="about__card">
             <AiFillFire className="about__icon" />
              <h5/>
              <small>Je suis</small>
              <h5>Motivé</h5>
              
            </article>
          </div>
        <p>
          Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum rem ipsumLorem ipsum
        </p>
        
        <a href="#contact" className='btn btn-primary'>Contact</a>
        </div>
      </div>
    </section>
  )
}

export default About