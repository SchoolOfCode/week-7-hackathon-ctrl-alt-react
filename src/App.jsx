import FlashCard from './flashcards/flashcard.jsx'
import Header from './header/header.jsx'
import Footer  from './footer/footer.jsx'

import './App.css'

const data = [
  {question: "What is React?", answer: " React is a JavaScript library used to build user interfaces for web and native applications. "},
  {question: " What is a component?", answer: " A component is a piece of the UI that has its own logic and appearance."},
  {question: "How do you know it’s a React component?", answer: "React component names must always start with a capital letter, while HTML tags must be lowercase."},
]

function App() {
  return <>
    <Header />
    <FlashCard question={data[0].question} answer={data[0].answer}/>
    <FlashCard question={data[1].question} answer={data[1].answer}/>
    <FlashCard question={data[2].question} answer={data[2].answer}/>
    <Footer />
  </>
}

export default App

