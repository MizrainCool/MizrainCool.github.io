import React from 'react'
import { Link } from 'react-router-dom'
import instagram from '../../resources/Instagram.svg'
import linkedin from '../../resources/Linkedin.svg'
import './Footer.css'

export const Footer = () => {
  return (
    <footer>
      <div className="row justify-content-center fila">
        <div className="col-5">
          <font face="">Página diseñada y desarrollada por Mizrain Cool Manzanilla</font>
        </div>
        <div className="col-5 text-end">
        <a href="https://www.instagram.com/mizrainjcm/" target="_blank">
          <img src={instagram} height="20" width="20" className="imgMargin" />
        </a>
        <a href="https://www.linkedin.com/in/mizrain-cool-manzanilla-48232bba/" target="_blank">
          <img src={linkedin} height="20" width="20" className="imgMargin" />
        </a>
        </div>
      </div> 
    </footer>
  )
}