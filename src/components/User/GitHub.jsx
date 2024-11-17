import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';

const GitHub = () => {
  
  const data = useLoaderData()
  // const [data,setData] = useState([]);
  // useEffect(() => {
  //     fetch('https://api.github.com/users/NikhiL-Developer03')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       // console.log("Data Fetch Successfully:",data);
  //       setData(data);
  //     })
  //   },[]    
  // )
  // console.log("State[data] update :",data);

  console.log("data",data)
  
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl flex flex-col-reverse  '>
    <h1 className='mt-7'>GitHub Followers : {data?.followers || "No data available"}</h1>
    <img src={data?.avatar_url || "avatar"} alt="GitHub Picture" className='w-48 self-center rounded-full' />
    </div>
  )
}

export default GitHub

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/NikhiL-Developer03')
  const jsonData = response.json();
  return jsonData;
}