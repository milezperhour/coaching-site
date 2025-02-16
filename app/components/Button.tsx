'use client'
import React from 'react'


const Button = () => {
  const handleClick = () => {
    console.log('clicked');
  }

  return (
    <div className="mt-4 mb-4 flex justify-center items-center">
      <button className="bg-orange-500 text-white font-bold px-8 py-4 rounded hover:bg-orange-400 transition uppercase w-80 text-2xl" onClick={handleClick}>
          Book A Call
      </button>
    </div>
  )
}

export default Button