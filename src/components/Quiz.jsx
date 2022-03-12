import React from "react";
import { nanoid } from "nanoid";

export default function Quiz(props) {
	const [quiz, setQuiz] = React.useState([]);

	function getQuestions() {
		fetch(`https://opentdb.com/api.php?amount=5&type=multiple`)
			.then((res) => res.json())
			.then((data) => {
				setQuiz(data.results);
			});
	}

	React.useEffect(() => {
		getQuestions();
	}, []);

	console.log(quiz);

	const questionElements = quiz.map((quest) => {
		return (
			<Question
				key={nanoid()}
				question={quest.question}
				rightOption={quest.correct_answer}
				wrongOptions={quest.incorrect_answer}
			/>
		);
	});

	return (
		<div className="quiz-page">
			{questionElements}
			<div className="button-check">Check answers</div>
		</div>
	);
}

function Question(props) {
	return (
		<div className="quiz-questions">
			<h1 className="questions">{props.question}</h1>
			<div className="choices-box">
				<div className="choice">Adiós</div>
				<div className="choice">Adiós</div>
				<div className="choice">Adiós</div>
				<div className="choice">Adiós</div>
			</div>
		</div>
	);
}

function Options(props) {
	return <div className="choice">{props.optio}</div>;
}
