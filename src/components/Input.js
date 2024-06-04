import React from 'react'

const Input = ({name1, ph1, name2, ph2}) => {
  return (
    <div>
       <div className='flex justify-center py-1'>
        <div className='py-1 pr-6'>
           <p className='py-2'>{name1}</p>
            <input type='text' placeholder={ph1}
            className='py-2 rounded-md md:w-80 shadow-md text-blue-400 focus:border-2 focus:border-blue-400 outline-none'
            />
        </div>

        <div className='py-1'>
           <p className='py-2'>{name2}</p>
            <input type='text' placeholder={ph2}
            className='py-2 rounded-md md:w-80 shadow-md text-blue-400 focus:border-2 focus:border-blue-400 outline-none'
            />
        </div>
        </div>
    </div>
  )
}

export default Input
