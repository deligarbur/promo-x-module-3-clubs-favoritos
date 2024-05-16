import { useState } from "react";

function FormNewClub ({ changeNewClub, addNewClub }) {
  //no hace falta esta variable de estado
  const [isChecked, setIsChecked] = useState(false);

  const handleInput = (ev) => {
    changeNewClub(ev.target.id, ev.target.value);
  };

  const handleCheckbox = () => {
    setIsChecked(!isChecked);

    changeNewClub(setIsChecked);
  };

  const handleClick = (ev) => {
    ev.preventDefault();
    addNewClub();
  };

  return (
    <form className="form">
      <legend>Añadir un nuevo club</legend>
      <label htmlFor="clubName">Nombre del club</label>
      <input type="text" name="name" id="name" onChange={ handleInput } />
      <label htmlFor="openOnWeekdays">¿Abre entre semana?</label>
      <input type="checkbox" name="openOnWeekdays" id="openOnWeekdays" checked={ isChecked } onChange={ handleCheckbox } />
      <label htmlFor="openOnWeekend">¿Abre el fin de semana?</label>
      <input type="checkbox" name="openOnWeekend" id="openOnWeekend" checked={ isChecked } onChange={ handleCheckbox } />
      <input type="submit" value="Añadir un nuevo club" onClick={ handleClick } />
    </form>
  );
}

export default FormNewClub;