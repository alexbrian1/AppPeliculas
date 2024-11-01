import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {MyRoutes} from "./routers/routes"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <header>
      <h1 className='title'>Películas</h1>
    </header>
    <MyRoutes></MyRoutes> 
    </div>
    
  );
}

export default App
