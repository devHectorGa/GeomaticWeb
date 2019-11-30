import React from 'react'
import { Link } from 'react-router-dom'
import './header.styles.scss'

const Header = ()=>(
  <nav className='header'>
    <Link className='header-logo' to='/'>Inicio</Link>
    <ul className='header-items'>
      <li className='header-item'>
        <Link className='header-link' to='/levantamiento-con-cinta'>levantamiento con Cinta</Link>
      </li>          
    </ul>
  </nav>
)

export default Header