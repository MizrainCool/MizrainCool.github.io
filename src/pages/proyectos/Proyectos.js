import React from 'react'
import pokeLogo from '../../resources/PokemonLogo.svg'
import famargLogo from '../../resources/FamargLogo.png'
import logo from '../../resources/PortafolioLogo.jpg'
import { Footer } from '../../components/footer/Footer'
import { ModalPokemon } from './pokemon/ModalPokemon'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap';
import { ModalPortafolio } from './portafolio/ModalPortafolio'
import { ModalFamarg } from './famarg/ModalFamarg'

export const Proyectos = () => {
  return (
    <div>
      <ModalPokemon></ModalPokemon>
      <ModalPortafolio></ModalPortafolio>
      <ModalFamarg></ModalFamarg>
      <div className="row justify-content-center pad fila pb-5">
        <div className="col-9">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 mt-2">
                  <div className="card">
                    <div className="card-body" data-bs-toggle="modal" data-bs-target="#ModalPokemon">
                      <div className="row">
                        <div className="col text-center">
                          <img src={pokeLogo} width="150px" height="100px" />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col text-center">
                          <font face="Noto Sans JP">Programa Pokemon</font>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 mt-2">
                  <div className="card">
                    <div className="card-body" data-bs-toggle="modal" data-bs-target="#ModalFamarg">
                      <div className="row">
                        <div className="col text-center">
                          <img src={famargLogo} width="100px" height="100px" />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col text-center">
                          <font face="Noto Sans JP">Proyecto Famarg</font>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 mt-2">
                  <div className="card">
                    <div className="card-body" data-bs-toggle="modal" data-bs-target="#ModalPortafolio">
                      <div className="row">
                        <div className="col text-center">
                          <img src={logo} width="120px" height="100px" />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col text-center">
                          <font face="Noto Sans JP">Proyecto Portafolio</font>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}