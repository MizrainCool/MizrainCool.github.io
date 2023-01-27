import React from 'react'

export const ModalPortafolio = () => {
  return (
    <div id="ModalPortafolio" className="modal fade" tabIndex="-1" aria-hidden="true" data-bs-backdrop="static">
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <font face="Noto Sans JP">Proyecto Portafolio</font>
            <button className="btn-close" type="button" data-bs-dismiss="modal"></button>
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col">
                <h6>
                  El presente portafolio es 100% de mi autoría y es una
                  muestra de las habilidades que poseo, para su creación no emplee
                  ninguna plantilla prediseñada y mis principales herramientas de
                  desarrollo fueron las librerías de React y Bootstrap
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}