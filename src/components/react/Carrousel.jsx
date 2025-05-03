import React, { useEffect, useState } from 'react'

export const Carrousel = (props) => {
  return (
    <div className='flex flex-col items-center justify-center w-full max-w-3xl tablet-lg:max-w-5xl laptop:max-w-6xl bg-gray-800 rounded-md'>
      <p className='text-2xl movil-lg:text-3xl tablet:text-4xl laptop:text-5xl font-inter font-bold my-5 text-indigo-100'>
        {props.title}
      </p>
      <div className='w-full flex items-center min-h-fit snap-x snap-mandatory overflow-x-auto gap-x-1 '>
        {props.children}
      </div>
    </div>
  )
}
