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
				wrongOptions={quest.incorrect_answers}
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
	let options = props.wrongOptions.map((wrongOption) => {
		return wrongOption;
	});

	options.push(props.rightOption);

	React.useEffect(() => {
		options.sort(() => Math.random() - 0.5);
		return;
	});

	// const [selected, setSelected] = React.useState(false);

	const allOptions = options.map((allOp) => {
		return (
			<Choice
				key={nanoid()}
				id={nanoid()}
				options={allOp}
				select={() => toggleSelection(allOp.id)}
			/>
		);
	});

	function toggleSelection(id) {
		console.log(id);
	}

	console.log(allOptions);

	return (
		<div className="quiz-questions">
			<h1 className="questions">{props.question}</h1>
			<div className="choices-box">{allOptions}</div>
		</div>
	);
}

function Choice(props) {
	return (
		<div className="choice" onClick={props.select}>
			{props.options}
		</div>
	);
}
