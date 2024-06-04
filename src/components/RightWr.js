import React from 'react'

const RightWr = () => {
  return (
    <div>
        {/*1*/}
       <div>
       <p className='text-blue-400 text-lg pt-4'>DOCUMENTS</p>

       <div class='py-1 pr-6'>
  <p class='py-2'>One of the following documents are signed, you'll be ready to get started</p>
  <div class='flex items-center '>
    <input type='text' placeholder="  Electronically signed the agrement(s)"
      class='py-2 rounded-md w-11/12 shadow-md text-blue-400 focus:border-2 focus:border-blue-400 outline-none mr-2'
    />
    <img src={require("..//assests/rightt.jpg")} class='h-6 w-6 absolute right-1/3 ' alt='tick'/>
    <button class='bg-indigo-400 p-2 rounded-lg hover:shadow-md '>
      <img src={require("..//assests/right-arrow.png")} class='h-6 w-6 ' alt=''/>
    </button>
  </div>

  <div class='flex items-center py-4'>
    <input type='text' placeholder="  Non adult beverage Kroger market supplier wavier and release"
      class='py-2 rounded-md w-11/12 shadow-md text-blue-400 focus:border-2 focus:border-blue-400 outline-none mr-2'
    />
    <img src={require("..//assests/wrong.jpg")} class='h-6 w-6 absolute right-1/3 ' alt='tick'/>
    <button class='bg-indigo-400 p-2 rounded-lg hover:shadow-md '>
      <img src={require("..//assests/right-arrow.png")} class='h-6 w-6 ' alt=''/>
    </button>
  </div>
</div>
  </div>

{/*2*/}

        <div>
       <p className='text-blue-400 text-lg pt-4'>COI PDF UPLOAD</p>

       <div class='py-1 pr-6'>
  <p class='py-2'>One of the following documents are signed, you'll be ready to get started</p>
  <div class='flex items-center '>
    <input type='text' placeholder="  Electronically signed the agrement(s)"
      class='py-2 rounded-md w-11/12 shadow-md text-blue-400 focus:border-2 focus:border-blue-400 outline-none mr-2'
    />
    <img src={require("..//assests/rightt.jpg")} class='h-6 w-6 absolute right-1/3 ' alt='tick'/>
    <button class='bg-indigo-400 p-2 rounded-lg hover:shadow-md '>
      <img src={require("..//assests/right-arrow.png")} class='h-6 w-6 ' alt=''/>
    </button>
  </div>
</div>

        </div>
    </div>
  )
}

export default RightWr
