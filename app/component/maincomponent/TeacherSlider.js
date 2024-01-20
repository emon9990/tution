"use client"
import Container from '@/app/layouts/Container';
import SlideTwo from '@/app/layouts/SlideTwo';

import React, { Component } from "react";
import Slider from "react-slick";

const TeacherSlider = () => {

 

    const settings = {
       
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      }


  return (
    <div className="bg-[#E5E5E5] h-[1000px] w-full mt-10">
           <Container>
              <div className=' text-center py-[106px]'>
                   <h1 className="text-[55px] font-bn text-[#171717D9] font-semibold">কেন আমরাই শিক্ষার্থী, অভিভাবক</h1>
                   <h1 className="text-[50px] font-bn text-[#171717D9] font-semibold mt-2">ও টিউটরদের প্রথম পছন্দ?</h1>
                   <p className="font-lg text-[22px] text-[#171717] mt-[21px]">Hear from our satisfied clients and learn how we've helped them take</p>
                   <p className="font-lg text-[22px] text-[#171717]">their businesses to new heights.</p>
              </div>

              <Slider {...settings}>
          <div>
             <SlideTwo />
          </div>
          <div className=' ml-2'>
           <SlideTwo />
          </div>
          <div className=' ml-4'>
            <SlideTwo />
          </div>
          <div>
           <SlideTwo />
          </div>
          <div  className=' ml-2'>
          <SlideTwo />
          </div>
          <div  className=' ml-4'>
            <SlideTwo />
          </div>
          <div>
             <SlideTwo />
          </div>
          <div className='ml-2'>
             <SlideTwo />
          </div>
          <div className='ml-5'>
             <SlideTwo />
          </div>
        </Slider>
           </Container>
    </div>
  )
}

export default TeacherSlider