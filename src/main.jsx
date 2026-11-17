import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from "react-router";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
      <BrowserRouter>
        <Navbar />
        <App />
      </BrowserRouter>
    </StrictMode>
)
