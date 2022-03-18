import React, { useState } from "react";
import "./assets/sass/main.css";

import StartPage from "./components/StartPage";
import Quiz from "./components/Quiz";

function App() {
	// Starting the game
	const [start, setStart] = useState(false);

	function startGame() {
		setStart(false);
	}

	// changing selection

	const [choosen, setChoosen] = React.useState(false);

	function selectAnswer() {
		setChoosen(!choosen);
		console.log(choosen);
	}

	return (
		<main className="main-container">
			{start ? (
				<StartPage startGame={startGame} />
			) : (
				<Quiz selection={selectAnswer} />
			)}
		</main>
	);
}

export default App;
