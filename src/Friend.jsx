import React, { use } from 'react'
const userStyle = {
  border: '2px solid red',
  borderRadius: '20px',
  marginTop: '30px',
  padding: '20px 0 20px 0'
}
const Friend = ({friendsPromise}) => {
  const fd = use(friendsPromise)
  console.log(fd);
  
  return (
    <div style={userStyle}>Friend</div>
  )
}

export default Friend