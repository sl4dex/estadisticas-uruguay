import React from 'react'

export default function MasInfo() {
  return(
    <>
      <h2 className='text-blue-800 text-3xl font-extrabold'>Más Información</h2>
      <p className='mt-2 mb-4'>
        Otros sitios con información relevante
      </p>
      <a href='https://www.ine.gub.uy/' target="_blank" className='text-blue-600'>Instituto Nacional de Estadística (INE)</a><br />
      <a href='https://www.minterior.gub.uy/observatorio/index.php/estadisticas' target="_blank" className='text-blue-600'>Estadisticas del Ministerio del Interior</a>
    </>
  )
}