import FlashCard from './flashcards/flashcard.jsx'
import Header from './header/header.jsx'
import Footer  from './footer/footer.jsx'

import './App.css'

const data = [
  {question: "What's your name", answer: "None of your business"},
  {question: "What's your name", answer: "None of your business"},
  {question: "What's your name", answer: "None of your business"},
]

function App() {
  return <>
    <Header />
    <FlashCard question={data[0].question} answer={data[0].answer}/>
    <FlashCard question="What's your name" answer="None of your business"/>
    <FlashCard question="What's your name" answer="None of your business"/>
    <Footer />
  </>
}

export default App

