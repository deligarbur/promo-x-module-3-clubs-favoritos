import Card from "./Card";

function ClubsList ({ data }) {
  return (
    <ul className="club_list">
      { data.map(
        (club, index) =>
          <li key={ index }><Card club={ club } index={ index } /></li>
      ) }
    </ul>
  );
}

export default ClubsList;