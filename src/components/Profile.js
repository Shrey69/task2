import React from 'react'

const Profile = ({step, profile, des}) => {
  return (
    <div>
      <div className='text-center'>
            <p className='text-slate-400 text-lg py-1 font-medium'>{step}</p>
            <p className=' text-3xl md:text-4xl text-gray-500 '>{profile}</p>
            <p className='text-xs md:text-lg text-slate-500 py-2'>{des}</p>
        </div>
    </div>
  )
}

export default Profile
