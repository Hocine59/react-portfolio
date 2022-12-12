import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <ul className='permalinks'>
        <li><a href='#'>Accueil</a></li>
        <li><a href='#about'>A propos</a></li>
        <li><a href='#experience'>Formation</a></li>
        <li><a href='#services'>Compétences</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__copyright'>
        <small>&copy; Hocine. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer