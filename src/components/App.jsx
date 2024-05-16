import "../styles/App.scss";
import initialData from "../services/data.json";
import { useState } from "react";
import ClubsList from "./ClubsList";
import FormNewClub from "./FormNewClub";
import ClubFilter from "./ClubFilter";

function App () {
	const [myClubs, setMyClubs] = useState(initialData)
	const [newClub, setNewClub] = useState({ name: "", openOnWeekdays: false, openOnWeekend: false })
	//en este caso sabemos que el valor inicial es desmarcado
	const [filter, setFilter] = useState("all")

	const changeNewClub = (object) => {
		//Lo que va a tener object => {key: "name", value: "nombre club"}
		//aplicamos spread operator porque es un objeto, porque vamos a copiar el objeto y entonces decidir qué es lo que quiero cambiar de cada propiedad
		setNewClub({ ...newClub, [object.key]: object.value })
	}

	//añado el nuevo club a la lista
	const addNewClub = () => {
		setMyClubs([...myClubs, newClub])
	};

	const filteredClubs = myClubs.filter((club) => {
		if (filter === "weekend") {
			return club.openOnWeekend === true
		} else if (filter === "weekdays") {
			return club.openOnWeekdays === true
		}
		return true

		// Si tuviera un buscador, que buscase por nombre, podria incluir ese filtro también aquí y anidar filtros con:
		// .filter((club) => club.name.includes(valor del input))

		// Para eliminar elementos hay que hacer uso del splice y modificar la variable de estado
	})


	return (
		<>
			<ClubFilter setFilter={ setFilter } />
			<ClubsList data={ filteredClubs } />
			<FormNewClub changeNewClub={ changeNewClub } addNewClub={ addNewClub } />
		</>
	)
}

export default App
