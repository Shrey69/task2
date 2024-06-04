import React from 'react'
import { Link } from 'react-router-dom';
import { PiNumberSquareOneFill, PiNumberSquareTwoFill, PiNumberSquareThreeFill } from "react-icons/pi";
const Slides2 = () => {
  return (
    <div>
       <div className='flex text-slate-400 justify-between bg-slate-200'>
       <Link to={"/"}>
        <button className='flex font-medium p-2 md:p-8 px-10 md:px-24 text-lg md:text-xl text-white bg-blue-400  shadow-sm'>
        <PiNumberSquareOneFill size={28} />
            Your Profile</button></Link>
            <Link to={"/2"}>
         <button className='flex font-medium p-2 md:p-8  px- md:px-24  rounded-r-full md:absolute right-[36.333333%] shadow-sm text-lg md:text-xl text-white bg-blue-400 '>
        <PiNumberSquareTwoFill size={28} />
            Business Information</button></Link>

        <button className='flex font-medium p-2 md:p-4 md:m-4 text-lg md:text-xl bg-slate-200'>
        <PiNumberSquareThreeFill size={28}/>
            Additional Users</button>
        </div>
    </div>
  )
}

export default Slides2
