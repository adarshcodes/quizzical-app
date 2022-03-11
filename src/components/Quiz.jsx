import React from "react";

export default function Quiz(props) {
	const [quiz, setQuiz] = React.useState({});

	function getQuestions() {
		fetch(`https://opentdb.com/api.php?amount=5&type=multiple`)
			.then((res) => res.json())
			.then((data) => {
				setQuiz(data);
			});
	}

	React.useEffect(() => {
		getQuestions();
	}, []);

	return (
		<div className="quiz-page">
			<Question select={props.selection} />
			<Question />
			<Question />
			<Question />
			<div className="button-check">Check answers</div>
		</div>
	);
}

function Question(props) {
	return (
		<div className="quiz-questions">
			<h1 className="questions">How would one say goodbye in Spanish?</h1>
			<div className="choices-box">
				<div className="choice" onClick={props.select}>
					Adiós
				</div>
				<div className="choice">Adiós</div>
				<div className="choice">Adiós</div>
				<div className="choice">Adiós</div>
			</div>
		</div>
	);
}
