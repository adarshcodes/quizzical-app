import React from "react";

export default function StartPage(props) {
	return (
		<div className="start-page">
			<h1>Quizzical</h1>
			<p>Some description if needed</p>
			<div className="btn-start" onClick={props.startGame}>
				Start quiz
			</div>
		</div>
	);
}
