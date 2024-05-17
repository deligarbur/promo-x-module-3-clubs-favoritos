function FormSearch ({ searchClubs }) {
  const handleInput = (ev) => {
    const valueSearch = ev.target.value;
    searchClubs(valueSearch);
  }

  return (
    <form>
      <label htmlFor="search">Buscar</label>
      <input type="text" name="search" id="search" onChange={ handleInput } />
    </form>
  )
}

export default FormSearch