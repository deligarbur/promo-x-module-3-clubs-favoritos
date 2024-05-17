function Card ({ club, index }) {
  const handleClick = () => {

  }
  return (
    <article className="card">
      <h2>#{ index }: { club.name }</h2>
      <p>Abierto entre semana: { club.openOnWeekdays ? "Si" : "No" }</p>
      <p>Abierto el fin de semana: { club.openOnWeekend ? "Si" : "No" }</p>
      <button onClick={ handleClick }>X</button>
    </article>
  )
}

export default Card