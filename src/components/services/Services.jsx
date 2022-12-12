import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3> UI/UX Design ex</h3>
          </div>
            
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icons'/>
              <p>Lorem, ipsum</p>
            </li> <li>
              <BiCheck className='service__list-icons'/>
              <p>Lorem, ipsum</p>
            </li> <li>
              <BiCheck className='service__list-icons'/>
              <p>Lorem, ipsum</p>
            </li> <li>
              <BiCheck className='service__list-icons'/>
              <p>Lorem, ipsum</p>
            </li> <li>
              <BiCheck className='service__list-icons'/>
              <p>Lorem, ipsum</p>
            </li> <li>
              <BiCheck className='service__list-icons'/>
              <p>Lorem, ipsum</p>
            </li>
          </ul>
        </article>
         {/*END OF THE UI/UX*/ }

         <article className='service'>
          <div className='service__head'>
            <h3> WEB DEV ex</h3>
          </div>
            
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icons'/>
              <p>Lorem, ipsum</p>
            </li> <li>
              <BiCheck className='service__list-icons'/>
              <p>Lorem, ipsum</p>
            </li> <li>
              <BiCheck className='service__list-icons'/>
              <p>Lorem, ipsum</p>
            </li> <li>
              <BiCheck className='service__list-icons'/>
              <p>Lorem, ipsum</p>
            </li> <li>
              <BiCheck className='service__list-icons'/>
              <p>Lorem, ipsum</p>
            </li> <li>
              <BiCheck className='service__list-icons'/>
              <p>Lorem, ipsum</p>
            </li>
          </ul>
        </article>
         {/*END OF THE UI/UX*/ }

         <article className='service'>
          <div className='service__head'>
            <h3>BDD</h3>
          </div>
            
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icons'/>
              <p>Lorem, ipsum</p>
            </li> <li>
              <BiCheck className='service__list-icons'/>
              <p>Lorem, ipsum</p>
            </li> <li>
              <BiCheck className='service__list-icons'/>
              <p>Lorem, ipsum</p>
            </li> <li>
              <BiCheck className='service__list-icons'/>
              <p>Lorem, ipsum</p>
            </li> <li>
              <BiCheck className='service__list-icons'/>
              <p>Lorem, ipsum</p>
            </li> <li>
              <BiCheck className='service__list-icons'/>
              <p>Lorem, ipsum</p>
            </li>
          </ul>
        </article>
         {/*END OF THE UI/UX*/ }
      </div>
    </section>
  )
}

export default Services