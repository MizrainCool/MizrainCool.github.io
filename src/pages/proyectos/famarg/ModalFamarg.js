import React from 'react';
import EvidenciaUno from './famargResources/E1.png';
import EvidenciaDos from './famargResources/E2.png';
import EvidenciaTres from './famargResources/E3.png';
import EvidenciaCuatro from './famargResources/E4.png';
import EvidenciaCinco from './famargResources/E5.png';
import EvidenciaSeis from './famargResources/E6.png';
import EvidenciaSiete from './famargResources/E7.png';
import EvidenciaOcho from './famargResources/E8.png';
import EvidenciaNueve from './famargResources/E9.png';
import EvidenciaDiez from './famargResources/E10.png';
import './ModalFamarg.css'

export const ModalFamarg = () => {
  return (
    <div id="ModalFamarg" className="modal fade" tabIndex="-1" aria-hidden="true" data-bs-backdrop="static">
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <font face="Noto Sans JP">Proyecto Famarg</font>
            <button className="btn-close" type="button" data-bs-dismiss="modal"></button>
          </div>
          <div className="modal-body">
            <div className="row">
              <h6>
                El proyecto Famarg se desarrolló con la finalidad de ayudar a
                los empleados a llevar un mejor control sobre los procesos de
                ventas, empaque y entrega de productos.
              </h6>
              <h6>
                A lo largo de este proyecto, fui el encargado de desarrollar
                las interfaces y formularios del sistema. Dichos módulos fueron
                programados con la ayuda de las plantillas Core UI. 
              </h6>
              <h6>
                A continuación, se presentan algunas de las interfaces realizadas:
              </h6>
            </div>
            <div className="row">
              <div className="col-12">
                <div id="Evidencias" className="carousel slide carousel-dark">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img className="img-fluid" src={EvidenciaUno} />
                    </div>
                    <div className="carousel-item">
                      <img className="img-fluid" src={EvidenciaDos} />
                    </div>
                    <div className="carousel-item">
                      <img className="img-fluid" src={EvidenciaTres} />
                    </div>
                    <div className="carousel-item">
                      <img className="img-fluid" src={EvidenciaCuatro} />
                    </div>
                    <div className="carousel-item">
                      <img className="img-fluid" src={EvidenciaCinco} />
                    </div>
                    <div className="carousel-item">
                      <img className="img-fluid" src={EvidenciaSeis} />
                    </div>
                    <div className="carousel-item">
                      <img className="img-fluid" src={EvidenciaSiete} />
                    </div>
                    <div className="carousel-item">
                      <img className="img-fluid" src={EvidenciaOcho} />
                    </div>
                    <div className="carousel-item">
                      <img className="img-fluid" src={EvidenciaNueve} />
                    </div>
                    <div className="carousel-item">
                      <img className="img-fluid" src={EvidenciaDiez} />
                    </div>
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#Evidencias"
                    data-bs-slide="prev"
                  >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#Evidencias"
                    data-bs-slide="next"
                  >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  </button>
                </div>
              </div>
            </div>
            <hr></hr>
            <div className="row">
              <div className="col-12">
                <div className="videoYT">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/ePWhW3V4EqQ"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  >
                  </iframe>
                </div>
              </div>
            </div>
            <div className="row">
              <h6>
                Por acuerdos tomados dentro de la empresa, no se me
                permite mostrar el código de las interfaces.
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}