import React, { useState } from "react";
import StartPage from "./components/StartPage";
import Quiz from "./components/Quiz";

function App() {
	const [start, setStart] = useState(true);

	return <main>{start ? <StartPage /> : <Quiz />}</main>;
}

export default App;
