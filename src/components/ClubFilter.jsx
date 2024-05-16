function ClubFilter ({ setFilter }) {
  // const handleChange = (ev) => {
  //   setFilter(ev.target.value)
  // }
  // Para este caso particular, podemos ahorrarnos una función y ejecutar una arrow directamente en la línea del evento, porque solo tenemos una línea de código
  return (
    <header>
      <h1>Mis clubs</h1>
      <select onChange={
        (ev) => setFilter(ev.target.value)
      }>
        <option value="all">todos</option>
        <option value="weekdays">los que abren entre semana</option>
        <option value="weekend">los que abren el fin de semana</option>
      </select>
    </header>
  )
}

export default ClubFilter