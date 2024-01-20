import Container from '@/app/layouts/Container'
import Image from 'next/image'
import React from 'react'
import contactBarner from '../public/contactBarner.png'
const ContactBarner = () => {
  return (
    <div>
        <Container>
             <div className='mt-[200px] cursor-pointer w-[100%] h-[500px]  '>
                 <Image src={contactBarner} className='h-[500px]'  />
             </div>
        </Container>
    </div>
  )
}

export default ContactBarner