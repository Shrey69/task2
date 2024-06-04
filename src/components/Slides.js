import React from 'react'
import { Link } from 'react-router-dom';
import { PiNumberSquareOneFill, PiNumberSquareTwoFill, PiNumberSquareThreeFill } from "react-icons/pi";
const Slides = () => {
  return (
    <div>
       <div className='flex text-slate-400 justify-between bg-slate-200'>
       <Link to={"/"}>
        <button className='flex  p-8 px-24 text-xl text-white bg-blue-400 rounded-r-full shadow-lg'>
        <PiNumberSquareOneFill size={28} />
            Your Profile</button></Link>
            <Link to={"/2"}>
         <button className='flex p-4 m-4 text-xl'>
        <PiNumberSquareTwoFill size={28} /> 
            Business Information</button></Link>

        <button className='flex p-4 m-4 text-xl'>
        <PiNumberSquareThreeFill size={28}/>
            Additional Users</button>
        </div>
    </div>
  )
}

export default Slides
