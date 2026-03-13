import React, { useState } from 'react'

const Players = () => {
  const [runs, setRuns] = useState(0)
  const [sixes, setSixes] = useState(0)
  const single=()=>{
    const updateRun = runs + 1
    setRuns(updateRun)
  }
  const four=()=>{
    const updateRun = runs + 4
    setRuns(updateRun)
  }
  const six=()=>{
    const updateRun = runs + 6
    const updateCount = sixes + 1
    setRuns(updateRun)
    setSixes(updateCount)
  }
  return (
    <div>
      <h1>SixCount:{sixes}</h1>
      {
        runs > 50 && <p>your Scrore is 50</p>
      }
      <h2>Score: {runs}</h2>
      <button onClick={()=>single()}>Single Run</button>
      <button onClick={()=>four()}>Four Run</button>
      <button onClick={()=>six()}>Six Run</button>
    </div>
  )
}

export default Players