import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({btn}) => {
  return (
    <>
    <Link to='#' className='   bg-[#FFFFFF] rounded-[12px] border border-[#DDDDDD]'>
        <p className='text-[12px] text-[#181818] py-2 px-5 font-[500] truncate'>{btn.name}</p>
    </Link>
      
    </>
  )
}

export default Button
