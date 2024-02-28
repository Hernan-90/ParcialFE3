import { useState } from "react"
import { Card } from "./Card"

export const Form = () => {

  const [usuario, setUsuario] = useState({
        nombre: '',
        email: '',
        pokemon: ''
    })

  const pokemonInicial = [
    {
      id: 1,
      nombre: 'Bulbasaur',
      tipo: 'Planta',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    },
    {
      id: 4,
      nombre: 'Charmander',
      tipo: 'Fuego',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
    },
    {
      id: 7,
      nombre: 'Squirtle',
      tipo: 'Agua',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
    }
  ]

  const [showForm, setShowForm] = useState(true)
  const [showCard, setShowCard] = useState(false)

  const [err, setErr] = useState(false)

  const seleccionarPokemon = () => {
    const pokemonElegido = Math.floor(Math.random() * pokemonInicial.length)
    return pokemonInicial[pokemonElegido]
  }

  const handleSubmit = (e) => {
      e.preventDefault()
      if(usuario.nombre.length > 3 && usuario.nombre.charAt(0) !== ' ' && usuario.email.length >= 6){
          setShowCard(true)
          setShowForm(false)
          setUsuario({...usuario, pokemon: seleccionarPokemon()})
      } else {
          setErr(true)
      }
  }


  return (
    <>
      {
        showForm && 
        <form onSubmit={ handleSubmit } className="form_container">
            <div className="form_input">
              <label className="form_label">Ingrese su Nombre:</label>
              <input type="text" onChange={ ({target}) => setUsuario({...usuario, nombre: target.value}) }/>  
            </div>

            <div className="form_input">
              <label className="form_label">Ingrese su correo electrónico:</label>
              <input type="text" onChange={ ({target}) => setUsuario({...usuario, email: target.value}) }/>
            </div>

            <button className="btn_form">Ingresar</button>
        </form>
      }
        { err && <p>Por favor chequea que la información sea correcta.</p> }
        { showCard && <Card userData={usuario}/> }
    </>
  )
}
