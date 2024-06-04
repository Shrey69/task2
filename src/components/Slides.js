import React from 'react'
import { Link } from 'react-router-dom';
import { PiNumberSquareOneFill, PiNumberSquareTwoFill, PiNumberSquareThreeFill } from "react-icons/pi";
const Slides = () => {
  return (
    <div>
       <div className='flex text-slate-400 justify-between bg-slate-200'>
       <Link to={"/"}>
        <button className='flex font-medium p-1 md:p-8 px-5 md:px-24 text-base md:text-xl text-white bg-blue-400 rounded-r-full shadow-lg'>
        <PiNumberSquareOneFill size={28} />
            Your Profile</button></Link>
            <Link to={"/2"}>
         <button className='flex font-medium p-1 md:p-4 md:m-4 text-base md:text-xl'>
        <PiNumberSquareTwoFill size={28} /> 
            Business Information</button></Link>

        <button className='flex font-medium p-1 md:p-4 md:m-4 text-base md:text-xl'>
        <PiNumberSquareThreeFill size={28}/>
            Additional Users</button>
        </div>
    </div>
  )
}

export default Slides
