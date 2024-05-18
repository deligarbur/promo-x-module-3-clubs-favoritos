import "../styles/App.scss";
import initialData from "../services/data.json";
import { useState } from "react";
import ClubsList from "./ClubsList";
import FormNewClub from "./FormNewClub";
import ClubFilter from "./ClubFilter";
import FormSearch from "./FormSearch";

function App () {
	const [myClubs, setMyClubs] = useState(initialData)
	const [newClub, setNewClub] = useState({ name: "", openOnWeekdays: false, openOnWeekend: false })
	//en este caso sabemos que el valor inicial es desmarcado
	const [filter, setFilter] = useState("all")
	const [search, setSearch] = useState("")

	const changeNewClub = (object) => {
		//Lo que va a tener object => {key: "name", value: "nombre club"}
		//aplicamos spread operator porque es un objeto, porque vamos a copiar el objeto y entonces decidir qué es lo que quiero cambiar de cada propiedad
		setNewClub({ ...newClub, [object.key]: object.value })
	}

	//añado el nuevo club a la lista
	const addNewClub = () => {
		setMyClubs([...myClubs, newClub])
	};

	const filteredClubs = () => {
		return myClubs.filter((club) => {
			if (filter === "weekend") {
				return club.openOnWeekend === true
			} else if (filter === "weekdays") {
				return club.openOnWeekdays === true
			}
			return true
		})

			.filter((club) => club.name.toLowerCase().includes(search))

		// Para que funcionen ambos filtros, es necesario hacerlos anidados como aquí

	}

	const searchClubs = (valueSearch) => {
		setSearch(valueSearch)
	}

	return (
		<>
			<ClubFilter setFilter={ setFilter } />
			<FormSearch searchClubs={ searchClubs } />
			<ClubsList clubs={ filteredClubs() } setMyClubs={ setMyClubs } />
			<FormNewClub changeNewClub={ changeNewClub } addNewClub={ addNewClub } newClub={ newClub } />
		</>
	)
}

export default App
