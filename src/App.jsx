import { Outlet } from 'react-router-dom'
import './App.css'
import { Link } from 'react-router-dom'

function App() {

  return (
    <>
      <h1>Routing</h1>
      <Link to="/home" className='mr'>
        Home
      </Link> 
      <Link to="/about" className='mr'>
        About
      </Link> 
      <Link to="/contact" className='mr'>
        Contact
      </Link> 

      <Outlet/>
    </>
  )
}

export default App
