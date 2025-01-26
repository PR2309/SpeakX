import React, { useState } from "react";
import "../Css/Questions.css";
const QuestionsComponent = () => {
	const [isAsked, setIsAsked] = useState(false);
	const askedChange = () => {
		setIsAsked(!isAsked);
	};
	return (
		<>
			<div className="ques-page">
				{isAsked ? (
					<section className="question-result">
						<button onClick={askedChange}>Switch</button>
						<h2>Searched</h2>
						<hr />
						<ul>
							<li>
								<h5>Question Title</h5>
								<i>
									<b>Hint:</b>
								</i>
							</li>
							<li></li>
							<li></li>
						</ul>
					</section>
				) : (
					<section className="question-menu">
						<button onClick={askedChange}>Switch</button>
						<h2>Questions</h2>
						<hr />
						<ul>
							<li>
								<h5>Question Title</h5>
								<i>
									<b>Hint:</b>
								</i>
							</li>
							<li></li>
							<li></li>
						</ul>
					</section>
				)}
			</div>
		</>
	);
};

export default QuestionsComponent;
