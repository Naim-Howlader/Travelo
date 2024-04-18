import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import ClientLayout from './layouts/ClientLayout';
import Home from './pages/client/Home'
import About from './pages/client/About'
import ServerLayout from './layouts/ServerLayout';
import Dashboard from './pages/server/Dashboard'
import Destination from './pages/client/Destination';
import Contact from './pages/client/Contact';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'animate.css';

AOS.init();

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/' element={<ClientLayout/>}>
        <Route index element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='destination' element={<Destination/>}/>
        <Route path='contact' element={<Contact/>}/>
      </Route>
      <Route path='/admin' element={<ServerLayout/>}>
        <Route index element={<Dashboard/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App
