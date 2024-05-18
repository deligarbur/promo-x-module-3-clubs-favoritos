function ClubFilter ({ setFilter }) {
  // const handleChange = (ev) => {
  //   setFilter(ev.target.value)
  // }
  // Para este caso particular, podemos ahorrarnos una función y ejecutar una arrow directamente en la línea del evento, porque solo tenemos una línea de código

  return (
    <header className="header">
      <h1 className="header_title">🪐 Mis clubs</h1>
      <select onChange={ (ev) => setFilter(ev.target.value) } className="header_select">
        <option value="all">todos</option>
        <option value="weekdays">los que abren entre semana</option>
        <option value="weekend">los que abren el fin de semana</option>
      </select>
    </header>
  )
}

export default ClubFilter