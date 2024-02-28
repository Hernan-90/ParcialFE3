import { useState } from 'react'

import { Card } from './Components/Card'
import { Form } from './Components/Form'

import './App.css'

function App() {

  return (
    <>
      <h4 className='app_title'>Descubra cual es el Pokemon inicial para su Poke-aventura!</h4>
      <Form />
    </>
  )
}

export default App
