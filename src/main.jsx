import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import Cards from './flashcards/flashcard.jsx'
import Header from './header/header.jsx'
import Footer  from './footer/footer.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Cards />
    <Footer />
  </StrictMode>,
)
