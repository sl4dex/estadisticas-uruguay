import React from "react"
import { Link } from "react-router-dom"

export default function NavBar() {
  return(
    <nav className="flex justify-center text-white pb-5 text-xl xs:text-sm sm:text-2xl">
      <Link to='/' className="pr-5 md:pr-10 hover:text-yellow-500 transition duration-500">Inicio</Link>
      <Link to='/sectores'className="pr-5 md:pr-10 hover:text-yellow-500 transition duration-500">Sectores</Link>
      <Link to='/mas-info'className="pr-5 md:pr-10 hover:text-yellow-500 transition duration-500">Más info</Link>
      <Link to='/sobre-mi' className="hover:text-yellow-500 transition duration-500">Sobre Mí</Link>
    </nav>
  )
}