import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {

  const {userid} = useParams()

  //userid - in this page we are ablle to access this id variable 
  return (
    <div className='bg-gray-600 text-white text-3xl p-4 flex justify-center'>User : {userid}</div>
  )
}

export default User