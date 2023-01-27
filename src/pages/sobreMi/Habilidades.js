import React from 'react'
import reactLogo from '../../resources/React.svg'
import javaScriptLogo from '../../resources/JavaScript.svg'
import nodejsLogo from '../../resources/NodeJs.svg'
import bootstrapLogo from '../../resources/Bootstrap.svg'
import cLogo from '../../resources/C.svg'
import angularLogo from '../../resources/Angular.svg'
import html from '../../resources/HTML.svg'
import css from '../../resources/CSS.svg'

export const Habilidades = () => {
  return (
    <div className="row fila">
      <div className="row justify-content-center mt-3">
        <div className="col text-center">
          <p>
            <font color="#8d0505">Habilidades</font>
          </p>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-auto text-center">
          <div className="card">
            <div className="card-body">
              <img src={javaScriptLogo} height="100" width="100"/>
            </div>
          </div>
        </div>
        <div className="col-auto text-center">
          <div className="card">
            <div className="card-body">
              <img src={nodejsLogo} height="100" width="100" />
            </div>
          </div>
        </div>
        <div className="col-auto text-center">
          <div className="card">
            <div className="card-body">
              <img src={reactLogo} height="100" width="100" />
            </div>
          </div>
        </div>
        <div className="col-auto text-center">
          <div className="card">
            <div className="card-body">
              <img src={bootstrapLogo} height="100" width="100" />
            </div>
          </div>
        </div>
        <div className="col-auto text-center">
          <div className="card">
            <div className="card-body">
              <img src={html} height="100" width="100" />
            </div>
          </div>
        </div>
        <div className="col-auto text-center">
          <div className="card">
            <div className="card-body">
              <img src={css} height="100" width="100" />
            </div>
          </div>
        </div>
        <div className="col-auto text-center">
          <div className="card">
            <div className="card-body">
              <img src={angularLogo} height="100" width="100" />
            </div>
          </div>
        </div>
        <div className="col-auto text-center">
          <div className="card">
            <div className="card-body">
              <img src={cLogo} height="100" width="100" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}