import React from 'react'
import '../../App.css'

export const Persona = () => {
  return (
    <div className="row fila">
      <div className="row justify-content-center">
        <div className="col-sm-12 col-md-12 col-lg-7 col-xl-7 col-xxl-7 text-center">
          <div className="card fondoTransparente">
            <div className="card-body">
              <p>Hola, mi nombre es Mizrain Jhonatan Cool Manzanilla y soy un desarrollador junior</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center mt-5">
        <div className="col text-center">
          <p>
            <font color="#8d0505">Cualidades</font>
          </p>
        </div>
      </div>
      <div className="row justify-content-center mt-2">
        <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3 mt-2">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-center">Trabajo en equipo </h5>
              <label>
                Sé trabajar en conjunto, puedo comunicarme de forma asertiva y
                sé respetar los espacios de mis compañeros
              </label>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3 mt-2">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-center">Rápido aprendizaje</h5>
              <label>
                Me encanta adquirir nuevos conocimientos, aprender nuevas
                habilidades y compartir mis aprendizajes
              </label>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3 mt-2">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-center">Adaptabilidad</h5>
              <label>
                No tengo problemas en enfrentarme a los cambios,
                el mundo se mueve y yo también
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}