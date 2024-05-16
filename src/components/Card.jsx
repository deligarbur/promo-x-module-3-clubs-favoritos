function Card ({ club, index }) {
  return (
    <article className="card">
      <h2>#{ index }: { club.name }</h2>
      <p>Abierto entre semana: { club.openOnWeekdays ? "Si" : "No" }</p>
      <p>Abierto el fin de semana: { club.openOnWeekend ? "Si" : "No" }</p>
    </article>
  )
}

export default Card