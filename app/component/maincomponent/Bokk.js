import { Flex } from 'antd'
import Link from 'next/link'
import React from 'react'

const Bokk = () => {
  return (
    <div>
         <div>   
        <h1 className=' text-[72px] font-lg font-bold text-[#171717] text-center'>Find latest <span className='text-[#E11D48]'>Books</span></h1>
        <p className='mt-6 text-[#171717] text-[27px] font-lg text-center'>Hear from our satisfied clients and learn how we've helped them take </p>
        <p className='mt-1 text-[#171717] text-[27px] font-lg text-center'>their businesses to new heights.</p>
        </div>


        <div className="flex justify-center mt-12 text-[#F2F2F2] font-lg font-bold text-[20px]">
           <button className='bg-[#E11D48] py-2 px-[45px] rounded-md text-[20px]'>See All</button>   
        </div>
    </div>
  )
}

export default Bokk