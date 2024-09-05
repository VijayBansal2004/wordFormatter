import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css"
import WordFormatContextProvider from './context/WordFormatContextProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WordFormatContextProvider>
      <App />
    </WordFormatContextProvider>
  </StrictMode>,
)
