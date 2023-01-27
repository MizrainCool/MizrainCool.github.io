import React from 'react';
import '../../App.css'
import { Footer } from '../../components/footer/Footer';
import { Habilidades } from './Habilidades';
import { Herramientas } from './Herramientas';
import { Idiomas } from './Idiomas';
import { Persona } from './Persona';

export const SobreMi = () => {
  return (
    <div>
      <div className="row justify-content-center pad fila pb-5">
        <div className="col">
          <Persona></Persona>
          <Idiomas></Idiomas>
          <Habilidades></Habilidades>
          <Herramientas></Herramientas>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}