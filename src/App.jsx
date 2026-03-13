import { Suspense } from 'react'
import './App.css'
import ClikedBtn from './ClikedBtn'
import Players from './Players'
import Usestate from './Usestate'
import Users from './Users'
import Friend from './Friend'
const friends = async()=>{
    const res= await fetch('https://jsonplaceholder.typicode.com/users')
    return res.json();
  }
function App() {
  const friendsPromise = friends()
  const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
  .then(res=> res.json())

  

  return (
    <div>
    <ClikedBtn></ClikedBtn>
    <Usestate></Usestate>
    <Players></Players>
    <Suspense fallback={<h3>Loading...</h3>}>
      <Users 
      fetchUsers={fetchUsers}
      ></Users>
    </Suspense>
  
    <Suspense fallback={<h3>Please Wait...</h3>}>
      <Friend 
      friendsPromise = {friendsPromise}
      ></Friend>
    </Suspense>
    </div>
  )
}

export default App
