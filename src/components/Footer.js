import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-between py-6 pb-8'>
      <button className='text-lg font-medium flex text-blue-400'>
      <img className='w-6 h-8' src={require("..//assests/Less Than.jpeg")} alt='less than' />
        Back to Login
      </button>

      <button className='p-2 m-2 bg-indigo-400 font-medium rounded-lg px-12 text-lg text-white'>
        Next Step 
      </button>
      
    </div>
  )
}

export default Footer
