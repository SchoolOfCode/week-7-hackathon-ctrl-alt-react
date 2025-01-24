import { useState } from "react";
import "./flashcard.css";

export default function FlashCard({question, answer}) {
  const [showQuestion, setShowQuestion] = useState(true); // tracks whether to show question or answer

  function handleFlip() {
    setShowQuestion(!showQuestion);
  }

  return (
    <div className="flex-container">
      <button className={showQuestion ? "question" : "answer"} onClick={handleFlip}>
        {showQuestion ? question : answer}
      </button>
    </div>
  );
}
