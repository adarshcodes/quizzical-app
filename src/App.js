import React, { useState } from "react";
import "./assets/sass/main.css";

import StartPage from "./components/StartPage";
import Quiz from "./components/Quiz";

function App() {
	const [start, setStart] = useState(true);

	function startGame() {
		setStart(false);
	}

	return (
		<main className="main-container">
			{start ? <StartPage startGame={startGame} /> : <Quiz />}
		</main>
	);
}

export default App;
