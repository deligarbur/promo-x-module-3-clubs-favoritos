function FormNewClub ({ changeNewClub, addNewClub }) {

  const handleChange = (ev) => {
    // En lugar de usar el id, estamos aqui utilizando el atributo name con un operador ternario
    const value = ev.target.name === "name" ? ev.target.value : ev.target.checked
    // Aquí genero el objeto que contiene la información que quiero enviar a mi App
    const object = { key: ev.target.name, value: value };
    changeNewClub(object)
  }

  const handleClick = (ev) => {
    ev.preventDefault()
    addNewClub()
  }

  return (
    <form className="form" onChange={ handleChange }>
      <legend>Añadir un nuevo club</legend>
      <label htmlFor="clubName">Nombre del club</label>
      <input type="text" name="name" id="name" />
      <label htmlFor="openOnWeekdays">¿Abre entre semana?</label>
      <input type="checkbox" name="openOnWeekdays" id="openOnWeekdays" />
      <label htmlFor="openOnWeekend">¿Abre el fin de semana?</label>
      <input type="checkbox" name="openOnWeekend" id="openOnWeekend" />
      <button onClick={ handleClick }>Añadir un nuevo club</button>
    </form>
  )
}

export default FormNewClub