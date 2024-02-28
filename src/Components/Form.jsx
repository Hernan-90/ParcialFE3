
export const Form = () => {

  const [paciente, setPaciente] = useState({
        nombre: '',
        obraSocial: ''
    })

  const [show, setShow] = useState(false)
  const [err, setErr] = useState(false)

  const handleSubmit = (e) => {
      e.preventDefault()
      if(paciente.nombre.length > 3 && paciente.obraSocial.length > 2){
          setShow(true)
          setErr(false)
      } else {
          setErr(true)
      }
  }

  return (
    <>
      <h4></h4>
      {
        !show && 
        <form onSubmit={ handleSubmit }> 
            <label> </label>
            <input type="text" onChange={ ({target}) => setPaciente({...paciente, nombre: target.value}) }/>
            <label></label>
            <input type="text" onChange={ (event) => setPaciente({...paciente, obraSocial: event.target.value}) }/>
            <button></button>
        </form>
      }
        { show && <h4>{paciente.nombre}, su turno ha sido agendado para el 6 denoviembre.</h4> }
        { err && <p>Coloque la información correctamente.</p> }
        <hr />
    </>
  )
}
