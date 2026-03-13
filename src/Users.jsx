import React, { use } from 'react'
const userStyle = {
  border: '2px solid red',
  borderRadius: '20px',
  marginTop: '30px',
  padding: '20px 0 20px 0'
}
const Users = ({fetchUsers}) => {
  const users = use(fetchUsers)
  console.log(users);
  
  return (
    <div style={userStyle}>
      <h1>Users:</h1> 
    </div>
  )
}

export default Users