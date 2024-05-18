import Card from "./Card";

function ClubsList ({ clubs, setMyClubs }) {

  const handleClick = (ev) => {
    const id = ev.target.id
    //este id ya es la posición del elemento en el array
    const cloneClubs = [...clubs]
    cloneClubs.splice(id, 1)
    console.log(cloneClubs)
    setMyClubs(cloneClubs)
  }

  return (
    <ul className="club_list">
      { clubs.map(
        (club, index) =>
          <li key={ index } className="card">
            <Card club={ club } index={ index } />
            <button onClick={ handleClick } id={ index } className="card_button">❌</button>
          </li>
      ) }
    </ul>
  )
}

export default ClubsList