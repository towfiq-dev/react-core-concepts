import React from 'react'

const ClikedBtn = () => {
  const click =()=>{
    alert('I am Alerting')
  }
  const click2 =(num)=>{
  const me = num + 5
  alert(me)
  }
  return (
    <div>
      <button onClick={click}>Click Me</button>
      <button onClick={()=>click2(5)}>Click Me2</button>
    </div>
  )
}

export default ClikedBtn