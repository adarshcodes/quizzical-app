import React from "react";

export default function StartPage(props) {
	return (
		<div className="start-page">
			<h1 className="start-page__heading">Quizzical</h1>
			<p className="start-page__para">Test your knowledge with us.</p>
			<div className="start-page__btn" onClick={props.startGame}>
				Start quiz
			</div>
		</div>
	);
}
