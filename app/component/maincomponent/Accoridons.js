import Container from '@/app/layouts/Container'
import Muacrodion from '@/app/layouts/Muacrodion'
import React from 'react'

const Accoridons = () => {
  return (
    <div className="mt-[165px]" >
        <Container>
              <div className="text-center">
                  <h1 className="text-[63px] text-[#000000] font-bn font-semibold">সচরাচর জিজ্ঞাসিত প্রশ্নাবলী</h1>
                  <p className='mt-6 text-[#515151] text-[21px] font-bn'>Welcome to our Frequently Asked Questions (FAQ) section, where we have compiled a list of common</p>
                  <p className=' text-[#515151] text-[21px] font-bn'>inquiries to provide you with quick and helpful answers.</p>
              </div>

              <Muacrodion />
        </Container>
    </div>
  )
}

export default Accoridons