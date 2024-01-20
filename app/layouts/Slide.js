"use client"
import React, { Component } from "react";
import Slider from "react-slick";
import Container from './Container'
import Image from 'next/image'
import RegistereSliderFour from '../component/public/RegistereSliderFour.png'
import { FaAngleRight,FaAngleLeft } from "react-icons/fa6";
const Slide = () => {

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className="z-10 absolute top-[130px] left-0 py-4 px-7 bg-[#E11D48] rounded-[16px] cursor-pointer"
        style={{ ...style}}
        onClick={onClick}
      ><FaAngleLeft className="text-[white] text-2xl cursor-pointer hover:scale-110 transition-all hover:text-slate-950 " /></div>
    );
  }

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className="z-10 absolute top-[130px] right-0 py-4 px-7 bg-[#E11D48] rounded-[16px] cursor-pointer"
        style={{ ...style}}
        onClick={onClick}
      ><FaAngleRight className="text-[white] text-2xl cursor-pointer hover:scale-110 transition-all hover:text-slate-950 " /></div>
    );
  }

   
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 376,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        }
      },

      {
        breakpoint: 413,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        }
      },

      {
        breakpoint: 668,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        }
      },

      {
        breakpoint: 685,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        }
      },

      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        }
      },

      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        }
      },
      
    ]
  }




  return (
    <div>
        <Container>
                 

        <Slider {...settings} className="mt-10" >
          <div className='w-[20%] h-[380px] bg-white rounded-lg shadow-lg'>
          <div>
          <div className='w-[100%] '>
          <Image src={RegistereSliderFour} quality={50}  />
          </div>

           <div>
           <h1 className='text-[#333333] text-[22px] font-lg'>Michael F. Stanton</h1>
           <p className='text-[17px] font-lg text-[#333333]'>Department of Physics</p>
           <p className='text-[17px] font-lg text-[#333333]'>Dhaka University</p>
         </div>
               </div>
          </div>

        <div className='w-[20%] h-[380px] bg-white rounded-lg shadow-lg'>

            <div className="ml-3" >
            <div className='w-[100%] '>
            <Image src={RegistereSliderFour} quality={50}  />
            </div>

            <div>
            <h1 className='text-[#333333] text-[22px] font-lg'>Michael F. Stanton</h1>
            <p className='text-[17px] font-lg text-[#333333]'>Department of Physics</p>
            <p className='text-[17px] font-lg text-[#333333]'>Dhaka University</p>
            </div>
            </div>
        </div>



        <div className='w-[20%] h-[380px] bg-white rounded-lg shadow-lg'>
          <div className="ml-3" >
          <div className='w-[100%] '>
          <Image src={RegistereSliderFour} quality={50}  />
          </div>

           <div>
           <h1 className='text-[#333333] text-[22px] font-lg'>Michael F. Stanton</h1>
           <p className='text-[17px] font-lg text-[#333333]'>Department of Physics</p>
           <p className='text-[17px] font-lg text-[#333333]'>Dhaka University</p>
         </div>
            </div>
          </div>

        <div className='w-[20%] h-[380px] bg-white rounded-lg shadow-lg'>

            <div className="ml-3">
            <div className='w-[100%] '>
            <Image src={RegistereSliderFour} quality={50}  />
            </div>

            <div>
            <h1 className='text-[#333333] text-[22px] font-lg'>Michael F. Stanton</h1>
            <p className='text-[17px] font-lg text-[#333333]'>Department of Physics</p>
            <p className='text-[17px] font-lg text-[#333333]'>Dhaka University</p>
            </div>
            </div>
        </div>

        <div className='w-[20%] h-[380px] bg-white rounded-lg shadow-lg'>
          <div className="ml-3">
          <div className='w-[100%] '>
          <Image src={RegistereSliderFour} quality={50}  />
          </div>

           <div>
           <h1 className='text-[#333333] text-[22px] font-lg'>Michael F. Stanton</h1>
           <p className='text-[17px] font-lg text-[#333333]'>Department of Physics</p>
           <p className='text-[17px] font-lg text-[#333333]'>Dhaka University</p>
         </div>
      </div>
          </div>

        <div className='w-[20%] h-[380px] bg-white rounded-lg shadow-lg'>

            <div className="ml-3">
            <div className='w-[100%] '>
            <Image src={RegistereSliderFour} quality={50}  />
            </div>

            <div>
            <h1 className='text-[#333333] text-[22px] font-lg'>Michael F. Stanton</h1>
            <p className='text-[17px] font-lg text-[#333333]'>Department of Physics</p>
            <p className='text-[17px] font-lg text-[#333333]'>Dhaka University</p>
            </div>
            </div>
        </div>

        <div className='w-[20%] h-[380px] bg-white rounded-lg shadow-lg'>

            <div className="ml-3">
            <div className='w-[100%] '>
            <Image src={RegistereSliderFour} quality={50}  />
            </div>

            <div>
            <h1 className='text-[#333333] text-[22px] font-lg'>Michael F. Stanton</h1>
            <p className='text-[17px] font-lg text-[#333333]'>Department of Physics</p>
            <p className='text-[17px] font-lg text-[#333333]'>Dhaka University</p>
            </div>
            </div>
        </div>
        </Slider>


        </Container>
    </div>
  )
}

export default Slide





