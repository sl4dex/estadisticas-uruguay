import React from 'react'
import { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'
import getIndicator from '../services/api'

export default function Economia() {
  const origin = 'https://api.worldbank.org/v2/es/country/UY/indicator'
  const [pib, setPib] = useState('')
  const [crecPib, setCrecPib] = useState('')
  const [inflacion, setInflacion] = useState('')
  useEffect(() => {
    getIndicator(`${origin}/NY.GDP.MKTP.CD?format=json`)
      .then(obj => setPib(obj))
    getIndicator(`${origin}/NY.GDP.MKTP.KD.ZG?format=json`)
      .then(obj => setCrecPib(obj))
    getIndicator(`${origin}/FP.CPI.TOTL.ZG?format=json`)
      .then(obj => setInflacion(obj))
  }, [])
  return(
    <>
      <h2 className='text-blue-800 text-3xl font-extrabold pb-8'>Economía</h2>
      {/* <h3>{ data[0] ? data[0].indicator.value : ''}</h3> */}
      {pib.labels ? (<Bar data={pib} className='max-w-2xl max-h-96 mb-5 px-4 py-2 sm:mb-10 sm:ml-6 rounded-xl shadow-lg' />) : null}
      {crecPib.labels ? (<Bar data={crecPib} className='max-w-2xl max-h-96 mb-5 px-4 py-2 sm:mb-10 sm:ml-6 rounded-xl shadow-lg' />) : null}
      {inflacion.labels ? (<Bar data={inflacion} className='max-w-2xl max-h-96 mb-5 px-4 py-2 sm:mb-10 sm:ml-6 rounded-xl shadow-lg' />) : null}

    </>
  )
}