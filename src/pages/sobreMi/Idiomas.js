import React from 'react'
import mx from '../../resources/Mexico.svg'
import eu from '../../resources/EUA.svg'

export const Idiomas = () => {
  return (
    <div className="row fila">
      <div className="row justify-content-center">
        <div className="col text-center">
          <p>
            <font color="#8d0505">Idiomas</font>
          </p>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3 col-xxl-3 mt-2">
          <div className="card text-center">
            <img className="card-img-top" src={mx} />
            <div className="card-body">
              <h5 className="card-title">Español</h5>
              <h7>Idioma nativo</h7>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3 col-xxl-3 mt-2">
          <div className="card text-center">
            <img className="card-img-top" src={eu} />
            <div className="card-body">
              <h5 className="card-title">Ingles</h5>
              <h7>Segundo idioma - Intermedio/Avanzado</h7>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}