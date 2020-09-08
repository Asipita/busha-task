import React from 'react'
import './spinner.css'

function Spinner() {
  return (
    <div className='spinner text-center mx-auto'>
      <div className='spinner-inner'></div>
      <h1 className="text-3xl font-bold text-gray-600 my-24">Loading...</h1>
    </div>
  )
}

export default Spinner
