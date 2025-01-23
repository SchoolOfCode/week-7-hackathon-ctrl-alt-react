import {useState} from "react"
import "./flashcard.css"

//giving it state
//display text and when clicked on, change text
export default function Cards(){
    const [question, setQuestion] = useState(true);
    
    function handleFlip () {
        setQuestion(!question);
    }

    return (
    <div> 
        <button classname={question ? "question" : "answer"} onClick={handleFlip}>
        {question ? "test-question" : "test-answer"} 
        </button>
        <p></p>
    </div>)
    }