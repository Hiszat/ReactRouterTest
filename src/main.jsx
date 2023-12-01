import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/home.jsx'
import About from './pages/about.jsx'
import Contact from './pages/contact.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <App />}>
         <Route path='/home' element={ <Home />} />
         <Route path='/about' element={ <About />} />
         <Route path='/contact' element={ <Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
