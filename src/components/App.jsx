import "../styles/App.scss";
import initialData from "../services/data.json";
import { useState } from "react";
import ClubsList from "./ClubsList";
import FormNewClub from "./FormNewClub";

function App () {
	const [myClubs, setMyClubs] = useState(initialData);
	const [newClub, setNewClub] = useState({ name: "", openOnWeekdays: false, openOnWeekend: false });
	//en este caso sabemos que el valor inicial es desmarcado

	const changeNewClub = (key, value) => {
		setNewClub({ ...newClub, [key]: value });
	};

	//añado el nuevo club a la lista
	const addNewClub = () => {
		setMyClubs([...myClubs, newClub]);
	};


	return (
		<>
			<header>
				<h1>Mis clubs</h1>
				<select name="show" id="show">
					<option value="all">todos</option>
					<option value="openOnWeekdays">los que abren entre semana</option>
					<option value="openOnWeekend">los que abren el fin de semana</option>
				</select>
			</header>
			<ClubsList data={ myClubs } />
			<FormNewClub changeNewClub={ changeNewClub } addNewClub={ addNewClub } />
		</>
	);
}

export default App;
