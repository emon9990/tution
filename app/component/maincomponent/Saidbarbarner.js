import Image from 'next/image'
import React from 'react'
import Barner from '../public/Barner.png'
import Container from '@/app/layouts/Container'

const Saidbarbarner = () => {
  return (
    <div className="mt-[20px]">
       
               <Container>
               <div className='w-full h-[600px]'>
                 <Image src={Barner}  className='cursor-pointer h-[500px]' quality={50}   />
               </div>
               </Container> 
    </div>
  )
}

export default Saidbarbarner