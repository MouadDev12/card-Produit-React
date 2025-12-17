import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import CommanderButton from './components/CommanderButton.jsx'
import ProductCard from './components/ProductCard.jsx'

export { CommanderButton, ProductCard }



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />

  </StrictMode>,
)

export default App
