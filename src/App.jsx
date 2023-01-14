import React, { useState } from 'react'
import NavBar from './components/NavBar'
import { Routes, Route } from 'react-router-dom'
import Inicio from './components/Inicio'
import Sectores from './components/Sectores'
import Economia from './components/Economia'
import Educacion from './components/Educacion'
import DesarrolloSocial from './components/DesarrolloSocial'
import SectorPublico from './components/SectorPublico'
import sol from './assets/Sol_de_Mayo-Bandera_de_Uruguay.svg'

function App() {
  const ThemeContext = React.createContext()
  const [darkTheme, setDarkTheme] = useState(false)
  return (
    <div className={darkTheme ? 'dark' : ''}>
      <div className='relative overflow-hidden bg-blue-800 pt-4'>
      <div className='relative ml-auto mr-8 w-12 h-5 bg-white border-2 border-black rounded-xl'>
        <input type='checkbox' id='check' onChange={() => {setDarkTheme(!darkTheme)}} className='peer absolute box-border ml-auto w-0 h-0 opacity-0 cursor-pointer' />
        <label htmlFor='check' className='absolute cursor-pointer before:absolute before:bg-blue-500 before:border-black before:w-4 before:h-4 before:rounded-xl before:transition before:duration-300 peer-checked:before:bg-slate-500 peer-checked:before:translate-x-7 peer-checked:before:transition peer-checked:before:duration-300' />
      </div>
        <img src={sol} className='absolute opacity-5 -mt-32 min-w-md max-w-md sm:-mt-80 sm:max-w-4xl left-0 right-0 mx-auto pointer-events-none' />
        <h1 className="text-center drop-shadow-md text-yellow-500 pb-12 text-3xl xs:text-xl xs:pb-2 sm:text-5xl ">Estadísticas de Uruguay</h1>
        <NavBar setDarkTheme />
      </div>
      <div className='text-justify min-h-screen overflow-auto px-4 pt-10 md:pl-4 md:pr-40 transition duration-300 dark:transition dark:duration-300 dark:bg-black dark:text-white'>
        <Routes> 
          <Route path='/' element={<Inicio />} />
          <Route path='/sectores'>
            <Route index element={<Sectores />} />
            <Route path='economia' element={<Economia />} />
            <Route path='desarrollo-social' element={<DesarrolloSocial />} />
            <Route path='educacion' element={<Educacion />} />
            <Route path='sector-publico' element={<SectorPublico />} />
          </Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
