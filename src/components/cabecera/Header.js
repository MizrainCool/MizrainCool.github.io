import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Header.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { Inicio } from '../../pages/inicio/Inicio'
import { SobreMi } from '../../pages/sobreMi/SobreMi'
import { Proyectos } from '../../pages/proyectos/Proyectos'
import { Contacto } from '../../pages/contacto/Contacto'

export const Header = () => {
  return (
    <BrowserRouter>
      <header className="navbar navbar-expand-md">
        <div className="row fila justify-content-center">
          <div className="col-1">
            <nav class="navbar">
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navigation"
                aria-controls="navigation"
                aria-expanded="false"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
            </nav>
          </div>
        </div>
        <div id="navigation" className="row fila collapse navbar-collapse">
          <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
            <nav className="navbar navbar-expand-lg justify-content-center">
              <ul className="nav">
                <li className="nav-item">
                  <Link to="/">
                    INICIO
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-sm-12 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
            <nav className="navbar navbar-expand-lg justify-content-center">
              <ul className="nav">
                <li className="nav-item">
                  <Link to="/SobreMi">Sobre Mi</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-sm-12 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
            <nav className="navbar navbar-expand-lg justify-content-center">
              <ul className="nav">
                <li className="nav-item">
                  <Link to="/Proyectos">Proyectos</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-sm-12 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
            <nav className="navbar navbar-expand-lg justify-content-center">
              <ul className="nav">
                <li className="nav-item">
                  <Link to="/Contactos">Contacto</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Inicio></Inicio>}></Route>
        <Route path="/SobreMi" element={<SobreMi></SobreMi>}></Route>
        <Route path="/Proyectos" element={<Proyectos></Proyectos>}></Route>
        <Route path="/Contactos" element={<Contacto></Contacto>}></Route>
      </Routes>
    </BrowserRouter>
  )
}