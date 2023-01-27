import React, { useState } from 'react'
import '../../App.css'
import { Link } from 'react-router-dom'
import whats from '../../resources/Whatsapp.svg'
import gmail from '../../resources/Gmail.svg'
import { Footer } from '../../components/footer/Footer'

export const Contacto = () => {
  const [activeKey, setActiveKey] = useState(1)
  return (
    <div>
      <div className="row justify-content-center pad fila pb-5">
        <div className="col-sm-12 col-md-9 col-lg-9 col-xl-9 col-xxl-9">
          <div className="card">
            <div className="card-header">
              <ul id="id" className="nav nav-tabs card-header-tabs">
                <li className="nav-item">
                  <Link
                    className={activeKey === 1 ? "nav-link active linkMenu" : "nav-link linkMenu"}
                    onClick={() => setActiveKey(1)}
                  >
                    Teléfonos
                  </Link>
                </li>
                <li className="nav-item">
                  <Link 
                    className={activeKey === 2 ? "nav-link active linkMenu" : "nav-link linkMenu"}
                    onClick={() => setActiveKey(2)}
                  >
                    Correo
                  </Link>
                </li>
              </ul>
            </div>
            <div className="card-body">
              <div className="row justify-content-center text-center">
                <h4>
                  <font face="Noto Sans JP">Si has llegado hasta aquí, es porque te gustaría contactarme</font>
                </h4>
                <h3>
                  <font face="Noto Sans JP">Muchas gracias por el interés</font>
                </h3>
              </div>
              <div className="tab-content">
                <div
                  className={activeKey === 1 ? "tab-pane active" : "tab-pane"}
                  role="tabpanel"
                >
                  <div className="row justify-content-center mt-4">
                    <div className="row justify-content-center">
                      <div className="d-none d-md-block col-auto">
                        <img className="text-center" src={whats} height="50" width="50" />
                      </div>
                      <div className="col-auto">
                        <h4>997-178-8170</h4>
                      </div>
                    </div>
                    <div className="d-none d-md-block col-auto">
                      <img className="text-center" src={whats} height="50" width="50" />
                    </div>
                    <div className="col-auto">
                      <h4>997-117-2220</h4>
                    </div>
                  </div>
                </div>
                <div
                  className={activeKey === 2 ? "tab-pane active" : "tab-pane"}
                  role="tabpanel"
                >
                  <div className="row justify-content-center mt-4">
                    <div className="d-none d-md-block col-auto">
                      <img src={gmail} height="50" width="50" />
                    </div>
                    <div className="col-auto">
                      <h4>mizraincoolmanzanilla@gmail.com</h4>
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