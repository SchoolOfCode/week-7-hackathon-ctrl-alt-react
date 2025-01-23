import React from "react"
import reactLogo from '../assets/react.svg'
import './header.css'

//creating a header with React logo and flashcards text and emoji
export default function Header() {
    return (
        <div>
        <a href="https://react.dev" target="_blank">
                  <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
        <h2> React Flashcards </h2>
        <p>🧠 Expand your React knowledge, one flashcard at a time 🐌 </p>
        </div>
    )
}