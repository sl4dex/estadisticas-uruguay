import React from 'react'
import { useEffect, useState } from 'react'
import getIndicator from '../services/api'
import { Bar } from 'react-chartjs-2'
import { Chart as CharrtJS } from 'chart.js'

export default function Educacion() {
  const origin = 'https://api.worldbank.org/v2/es/country/UY/indicator'
  const [gastoEdu, setGastoEdu] = useState('')
  useEffect(() => {
    getIndicator(`${origin}/NY.ADJ.AEDU.GN.ZS?format=json`)
      .then(obj => setGastoEdu(obj))
  })
  return(
    <>
      <h2 className='text-blue-800 text-3xl font-extrabold pb-8'>Educación</h2>
      {gastoEdu.labels ? (<Bar data={gastoEdu} />) : null}
    </>
  )
} 