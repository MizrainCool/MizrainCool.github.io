import React, { useEffect, useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap';
import './ModalPokemon.css';
import fuego from './pokemonResources/Llamarada.gif';
import agua from './pokemonResources/Agua.gif';
import planta from './pokemonResources/Planta.gif'
import Pokedex from 'pokedex-promise-v2';
const Poke = new Pokedex;

export const ModalPokemon = () => {
  const [pokemonUsuario, setPokemonUsuario] = useState({ nombre: '' })
  const [pokemonMaquina, setPokemonMaquina] = useState({ nombre: '' })
  const inputRef = useRef()
  const arrayNombresPokemon = [
    "squirtle",
    "charmander",
    "bulbasaur",
    "chikorita",
    "cyndaquil",
    "totodile",
    "chespin",
    "froakie",
    "fennekin",
  ]
  const getPokemon = async (nombre, origen) => {
    const pokemon = await Poke.getPokemonByName(nombre)
    const nombresPokemon = await Poke.getPokemonSpeciesByName(nombre)
    const nombrePokemonEspanol = nombresPokemon.names.filter(pokeApiName => pokeApiName.language.name === 'es')[0].name
    const pokemonFormateado = {
      nombre: nombrePokemonEspanol,
      sprite: pokemon.sprites.front_default,
      tipo: pokemon.types[0].type.name,
    }
    if (origen === "maquina") {
      setPokemonMaquina(pokemonFormateado)
    }
    return pokemonFormateado
  }
  const asignarPokemonUsuario = async ({ target }) => {
    if ( target === undefined) return
    const existePokemon = arrayNombresPokemon.find((pokemon) => pokemon === target.value)
    if (!existePokemon) return
    const pokemon = await getPokemon(target.value, "usuario")
    setPokemonUsuario(pokemon)
  }
  const peleaPokemon = () => {
    if (pokemonUsuario.nombre !== '' && pokemonMaquina.nombre !== '') {
      document.getElementById('alerta').style.display = "block"
      document.getElementById("ataqueUsuario").classList.remove('ataque')
      document.getElementById("ataqueMaquina").classList.remove('ataque')
      setTimeout(() => {
        document.getElementById("ataqueUsuario").classList.add('ataque')
        document.getElementById("ataqueMaquina").classList.add('ataque')
        setPokemonUsuario({ nombre: '' })
        setPokemonMaquina({ nombre: '' })
        document.getElementById('alerta').style.display = "none"
        inputRef.current.value = ''
        return
      }, 4000)
    }
  }
  useEffect(() => {
    if (pokemonUsuario.nombre !== '') {
      getPokemon(arrayNombresPokemon[Math.floor(Math.random() * 8)], "maquina")
    }
  }, [pokemonUsuario])
  return (
    <div id="ModalPokemon" className="modal fade" tabIndex="-1" aria-hidden="true" data-bs-backdrop="static">
      <div className="modal-dialog modal-xl">
        <div className="modal-content estadio">
          <div className="modal-header">
            <font face="Noto Sans JP">Programa Pokemon</font>
            <button className="btn-close" type="button" data-bs-dismiss="modal"></button>
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-1">
                <input
                  type="text"
                  ref={inputRef}
                  placeholder="Nombre del pokemon"
                  list="pokemon"
                  onChange={(e) => asignarPokemonUsuario(e)} 
                />
                <datalist id="pokemon">
                  {arrayNombresPokemon.map((pokemon) => {
                    return (
                      <option key={pokemon} value={pokemon}>
                        {pokemon}
                      </option>
                    )
                  })}
                </datalist>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-2 text-center pokemonUsuario">
                <img src={pokemonUsuario.sprite}/>
              </div>
              <div className="col-1 text-center">
                <img
                  id="ataqueUsuario"
                  className={
                    pokemonUsuario.tipo === 'fire'
                    ? "fuegoUsuario ataque"
                    : pokemonUsuario.tipo === 'water'
                    ? "aguaUsuario ataque"
                    : "plantaUsuario ataque"
                  }
                  src={
                    pokemonUsuario.tipo === 'fire'
                    ? fuego
                    : pokemonUsuario.tipo === 'water'
                    ? agua
                    : planta
                  }
                  width="200px"
                  height="60px"
                />
                <img
                  id="ataqueMaquina"
                  className={
                    pokemonMaquina.tipo === 'fire'
                    ? "fuegoMaquina ataque"
                    : pokemonMaquina.tipo === 'water'
                    ? "aguaMaquina ataque"
                    : "plantaMaquina ataque"
                  }
                  src={
                    pokemonMaquina.tipo === 'fire'
                    ? fuego
                    : pokemonMaquina.tipo === 'water'
                    ? agua
                    : planta
                  }
                  width="200px"
                  height="60px"
                />
              </div>
              <div className="col-2 text-center pokemonMaquina">
                <img src={pokemonMaquina.sprite}/>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-auto">
                <button
                  className="btn btn-secondary botonPelear"
                  type="button"
                  onClick={() => peleaPokemon()}
                  data-bs-toggle="collapse"
                  data-bs-target="#alerta"
                  aria-expanded="false"
                >
                  Pelear
                </button>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-auto">
                <div id="alerta" className="collapse collapse-horizontal">
                  <div className="card card-body">
                    {pokemonUsuario.tipo === "fire" && pokemonMaquina.tipo === "fire"
                      ? "La pelea es un empate"
                      : pokemonUsuario.tipo === "fire" && pokemonMaquina.tipo === "water"
                      ? "Has perdido la pelea"
                      : pokemonUsuario.tipo === "fire" && pokemonMaquina.tipo === "grass"
                      ? "Has ganado la pelea"
                      : pokemonUsuario.tipo === "water" && pokemonMaquina.tipo === "fire"
                      ? "Has ganado la pelea"
                      : pokemonUsuario.tipo === "water" && pokemonMaquina.tipo === "grass"
                      ? "Has perdido la pelea"
                      : pokemonUsuario.tipo === "water" && pokemonMaquina.tipo === "water"
                      ? "La pelea es un empate"
                      : pokemonUsuario.tipo === "grass" && pokemonMaquina.tipo === "fire"
                      ? "Has perdido la pelea"
                      : pokemonUsuario.tipo === "grass" && pokemonMaquina.tipo === "water"
                      ? "Has ganado la pelea"
                      : pokemonUsuario.tipo === "grass" && pokemonMaquina.tipo === "grass"
                      ? "La pelea es un empate"
                      : ""
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}