import React from "react"
import Sector from './Sector'
import social from '../assets/desarrollo-social.png'
import eco from '../assets/economia.png'
import edu from '../assets/educacion.png'
import pub from '../assets/sector-publico.png'


export default function Sectores() {
  return(
  <div>
    <Sector img={eco} name='Economía' ruta='economia' />
    <Sector img={social} name='Desarrollo Social' ruta='desarrollo-social' />
    <Sector img={edu} name='Educación' ruta='educacion' />
    <Sector img={pub} name='Sector Público' ruta='sector-publico' />
  </div>
  )
}