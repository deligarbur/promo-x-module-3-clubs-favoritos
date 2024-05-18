function FormSearch ({ searchClubs }) {
  const handleInput = (ev) => {
    const valueSearch = ev.target.value;
    searchClubs(valueSearch);
  }

  return (
    <form className="form">
      <label htmlFor="search" className="form_search">Buscar</label>
      <input className="form_input" type="text" name="search" id="search" onChange={ handleInput } />
    </form>
  )
}

export default FormSearch