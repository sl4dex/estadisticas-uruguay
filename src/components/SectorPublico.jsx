import React from 'react'
import { useEffect, useState } from 'react'
import getIndicator from '../services/api'
import { Chart as ChartJS } from 'chart.js/auto'
import { Bar } from 'react-chartjs-2'

export default function SectorPublico() {
  const origin = 'https://api.worldbank.org/v2/es/country/UY/indicator'
  const [gastoMilitar, setGastoMilitar] = useState('')
  useEffect(() => {
    getIndicator(`${origin}/MS.MIL.XPND.GD.ZS?format=json`)
      .then(obj => setGastoMilitar(obj))
  })
  return(
    <>
      <h2 className='text-blue-800 text-3xl font-extrabold pb-8'>Sector Público</h2>
      {gastoMilitar.labels ? (<Bar data={gastoMilitar} className='pb-4' />) : null}
    </>
  )
} 