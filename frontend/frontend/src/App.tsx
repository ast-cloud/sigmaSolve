import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Register from './Register'

function App() {
  
  return <div>
    <nav>
      <Link to={'/login'}>Login</Link>
      <Link to={'/register'}>Register</Link>
    </nav>
    <Routes>
      <Route path='/login'/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/profile'/>
      <Route path='/todo'/>
      <Route path='/users'/>
    </Routes>
  </div>

}

export default App
