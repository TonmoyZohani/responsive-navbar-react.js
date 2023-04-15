import React from 'react'

const Button = (props) => {
  return (
    <div className='text-center bg-indigo-400 px-4 py-2 rounded-sm text-white hover:bg-indigo-500 duration-300 w-36'>
      {props.children}
    </div>
  )
}

export default Button
