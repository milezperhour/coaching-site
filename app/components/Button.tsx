'use client'
import Link from 'next/link'
import React from 'react'


const Button = () => {

  return (
    <div className="mt-8 mb-4 flex justify-center items-center">
      <Link href="/book">
        <button className="bg-orange-500 text-white font-bold px-8 py-4 rounded hover:bg-orange-400 transition uppercase w-80 text-2xl">
            Book A Call
        </button>
      </Link>
    </div>
  )
}

export default Button