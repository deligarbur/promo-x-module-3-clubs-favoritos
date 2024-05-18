function FormNewClub ({ changeNewClub, addNewClub, newClub }) {

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
    <form className="newclub" onChange={ handleChange }>
      <legend className="newclub_title">Añadir un nuevo club</legend>
      <div className="newclub_form">
        <label className="newclub_form-nametitle" htmlFor="clubName">Nombre del club</label>
        <input className="newclub_form-nameinput" type="text" name="name" id="name" />
        <div className="newclub_form-checkbox">
          <label htmlFor="openOnWeekdays">¿Abre entre semana?</label>
          <input className="checkbox_input" type="checkbox" name="openOnWeekdays" id="openOnWeekdays" />
          <label htmlFor="openOnWeekend">¿Abre el fin de semana?</label>
          <input className="checkbox_input" type="checkbox" name="openOnWeekend" id="openOnWeekend" />
        </div>
        <button className="newclub_form-button" onClick={ handleClick }>Añadir un nuevo club</button>
      </div>
    </form>
  )
}

export default FormNewClub