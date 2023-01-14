export default async function getIndicator(url) {
  const res = await fetch(url)
  const j = await res.json()
  return({
      // value, index, array
      labels: j[1].map((val, i, a) => a[a.length - 1 - i].date),
      datasets: [{
        label: j[1][0].indicator.value,
        data: j[1].map((val, i, a) => a[a.length - 1 - i].value)
      }]
  })
}