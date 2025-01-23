import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Cards from './flashcards/flashcard.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Cards />
    <App />
  </StrictMode>,
)
