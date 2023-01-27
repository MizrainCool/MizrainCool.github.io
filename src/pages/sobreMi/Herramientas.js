import React from 'react'
import visualStudioCode from '../../resources/VisualStudioCode.svg'
import visualStudio from '../../resources/VisualStudio.svg'

export const Herramientas = () => {
  return (
    <div className="row fila">
      <div className="row justify-content-center">
        <div className="col text-center">
          <p>
            <font color="#8d0505">Herramientas</font>
          </p>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-auto text-center">
          <div className="card">
            <div className="card-body">
              <img src={visualStudioCode} height="100" width="100" />
            </div>
          </div>
        </div>
        <div className="col-auto text-center">
          <div className="card">
            <div className="card-body">
              <img src={visualStudio} height="100" width="100" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}