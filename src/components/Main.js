import React from 'react'

import Slides from './Slides';
import Profile from './Profile';
import Input from './Input';

const Main = () => {
  return (
    <div className='bg-white rounded-xl hover:shadow-md '>
        <form className=''>

        <Slides />
        <Profile step="Step 1" profile="Your Profile" des="Enter the login information for your account. You will
            be able to create additional users after registering." />

        <div className='px-8 md:px-44 py-8'>

       <Input name1 = "First Name*" ph1="    Input Your First Name"  name2 = "Last Name*" ph2="    Input Your Last Name"/>
       <Input name1 = "Email*" ph1="    Input Your Email"  name2 = "Phone Number*" ph2="    Input Your Phone Number"/>
       <Input name1 = "Password*" ph1="    Create Your Password"  name2 = "Confirm Password*" ph2="    Confirm Your Password"/>

        </div>
        </form>
        
    </div>
  )
}

export default Main
