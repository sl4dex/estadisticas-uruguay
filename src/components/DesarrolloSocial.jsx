import React from 'react'
import { useEffect, useState } from 'react'
import getIndicator from '../services/api'
import { Chart as ChartJS } from 'chart.js/auto'
import { Bar } from 'react-chartjs-2'

export default function DesarrolloSocial() {
  const origin = 'https://api.worldbank.org/v2/es/country/UY/indicator'
  const [poblacion, setPoblacion] = useState('')
  const [esperanazaVida, setEsperanzaVida] = useState('')
  const [desempleo, setDesempleo] = useState('')
  useEffect(() => {
    getIndicator(`${origin}/SP.POP.TOTL?format=json`)
      .then(obj => setPoblacion(obj))
    getIndicator(`${origin}/SP.DYN.LE00.IN?format=json`)
      .then(obj => setEsperanzaVida(obj))
    getIndicator(`${origin}/SL.UEM.TOTL.ZS?format=json`)
      .then(obj => setDesempleo(obj))
  })
  return(
    <>
      <h2 className='text-blue-800 text-3xl font-extrabold pb-8'>Desarrollo Social</h2>
      {poblacion.labels ? (<Bar data={poblacion} />) : null}
      {esperanazaVida.labels ? (<Bar data={esperanazaVida} />) : null}
      {desempleo.labels ? (<Bar data={desempleo} />) : null}
    </>
  )
} 