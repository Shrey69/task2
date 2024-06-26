import React from 'react';

const Footer = () => {
  const currentPage = window.location.pathname; 

  return (
    <div className='flex justify-between py-6 pb-8'>
      <button className=' text-sm md:text-lg font-medium flex p-2 text-blue-400'>
        <img className='md:w-6 h-0 md:h-8' src={require("..//assests/Less Than.jpeg")} alt='less than' />
        Back to Login
      </button>

      {currentPage === '/2' && ( 
        <a href='/'>
          <button className='p-1 md:p-2 m-1 md:m-2 hover:shadow-lg bg-white border-2 border-indigo-400 font-medium rounded-lg px-1 md:px-12 text-sm md:text-lg text-indigo-400'>
            Previous Step
          </button>
        </a>
      )}

      <a href="/2">
        <button className='p-1 md:p-2 m-1 md:m-2 hover:shadow-lg bg-indigo-400 font-medium rounded-lg px-2 md:px-12 text-sm md:text-lg text-white'>
          Next Step
        </button>
      </a>
    </div>
  );
};

export default Footer;
