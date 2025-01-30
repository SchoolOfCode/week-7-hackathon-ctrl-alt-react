import { useState } from "react";
import "./flashcard.css";

export default function FlashCard({question, answer}) {
  const [showQuestion, setShowQuestion] = useState(true); // tracks whether to show question or answer

  function handleFlip() {
    setShowQuestion(!showQuestion);
  }

  return (
   
      <button  className="{showQuestion ? 'question' : 'answer'} flashCard" onClick={handleFlip}>
        {showQuestion ? question : answer}
      </button>
    
  );
}
