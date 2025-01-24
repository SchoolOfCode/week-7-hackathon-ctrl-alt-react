import { useState } from "react";
import "./flashcard.css";

export default function Cards() {
    const [question, setQuestion] = useState(true); // tracks whether to show question or answer
    const [userQuestion, setUserQuestion] = useState(""); // stores the user-provided question
    const [userAnswer, setUserAnswer] = useState(""); // stores the user-provided answer
    const [isSubmitted, setIsSubmitted] = useState(false); // tracks if user submitted a question/answer

    function handleFlip() {
        setQuestion(!question);
    }

    function handleSubmit() {
        setIsSubmitted(true); // enable the flashcard display
    }

    return (
        <div>
            {!isSubmitted ? (
                <div>
                    <h3>Create Your Flashcard</h3>
                    <label>
                        Question:
                        <input
                            type="text"
                            value={userQuestion}
                            onChange={(e) => setUserQuestion(e.target.value)}
                        />
                    </label>
                    <br />
                    <label>
                        Answer:
                        <input
                            type="text"
                            value={userAnswer}
                            onChange={(e) => setUserAnswer(e.target.value)}
                        />
                    </label>
                    <br />
                    <button onClick={handleSubmit}>Submit</button>
                </div>
            ) : (
                <div>
                    <button
                        className={question ? "question" : "answer"}
                        onClick={handleFlip}
                    >
                        {question ? userQuestion : userAnswer}
                    </button>
                    <p>Click the button to flip between question and answer!</p>
                </div>
            )}
        </div>
    );
}