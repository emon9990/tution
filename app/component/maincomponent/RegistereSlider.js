import Container from '@/app/layouts/Container'
import Slide from '@/app/layouts/Slide'
import React from 'react'

const RegistereSlider = () => {
  return (
    <div>
      <Container>
            <div className='text-center'>
                <h1 className="font-bn font-bold text-[50px] text-[#171717DB]">রেজিস্টার্ড টিউটরস</h1>
                <p className="font-lg text-[23px] text-[#171717]">Hear from our satisfied clients and learn how we've helped them take</p>

                <p className="font-lg text-[23px] text-[#171717]">their businesses to new heights.</p>
            </div>

            <Slide/>
      </Container>
    </div>
  )
}

export default RegistereSlider