import React from 'react'
import Profile from './Profile'
import Input from './Input'
import Slides2 from './Slides2'
import RightWr from './RightWr'

const Main2 = () => {
  return (
    <div className='bg-white rounded-xl hover:shadow-md '>
        <form className=''>

        <Slides2 />
        <Profile step="Step 2" profile="Business Information" des="Please, enter information about your company." />

        <div className='px-44 py-8'>
        <p className='text-blue-400 text-lg'>General Information</p>
       <Input name1 = "Brand Name*" ph1="    Input Your Brand Name"  name2 = "Brand Type*" ph2="    Select type of your brand"/>
       <Input name1 = "Street Address*" ph1="    Input Your Street Address"  name2 = "City*" ph2="    Input City"/>
       <Input name1 = "Zip Code*" ph1="    Input Zip Code"  name2 = "Tax ID number*" ph2="    Input Tax ID Number"/>

     <RightWr />


        </div>
        </form>
        
    </div>
  )
}

export default Main2
