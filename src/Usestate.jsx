import React, { useState } from 'react'

const Usestate = () => {
  const [count, setCount] = useState(0)
  const countFun = () => {
    const newCount = count + 1
    setCount(newCount)
    
  }
  const countFun2=()=>{
  const newCount = count - 1
  setCount(newCount)
  }
  return (
    <div>
    <h1>set:{count}</h1>
    <button onClick={()=>countFun()}>Add</button>
    <button onClick={()=>countFun2()}>Mynus</button>
    
    </div>
  )
}

export default Usestate