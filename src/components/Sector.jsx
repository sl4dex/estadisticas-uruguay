import React from 'react'
import { Link } from 'react-router-dom'

export default function Sector({img, name, ruta}) {

  return(
    <div className="flex items-center bg-blue-800 mb-3 last:mb-0 hover:bg-blue-900 transition duration-500">
      <div>
        <img src={img} className="w-20 p-4" />
      </div>
      <div>
        <Link to={`/sectores/${ruta}`} className="text-white font-OpenSans text-3xl">{name}</Link>
      </div>
    </div>
  )
}