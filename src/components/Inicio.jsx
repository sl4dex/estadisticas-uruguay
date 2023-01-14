import React from 'react'

export default function Inicio() {
  return(
    <>
      <h2 className='text-blue-800 text-3xl font-extrabold'>Inicio</h2>
      <p className='mt-2 mb-4'>
        Consulte información actualizada sobre varios sectores en Uruguay. 
        La información de cada sector es mostrada mediante indicadores anuales 
        (ej: PIB, Tasa de alfabetización, Gasto militar, etc.).
      </p>
      <h2 className='text-blue-800 text-3xl font-extrabold'>Uso</h2>
      <p className='mt-2 mb-4'>
        Puede acceder a la lista de sectores en todo momento mediante la barra de 
        navegación. Una vez allí, podrá acceder al sector que desee o buscar un 
        indicador directamente en la barra de búsqueda.
        También puede descargar los indicadores para analizarlos sin conexión.
      </p>
    </>
  )
}