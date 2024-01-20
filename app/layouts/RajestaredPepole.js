import React from 'react'
import Flex from './Flex'
import Container from './Container'
import Image from 'next/image'
import RegistereSliderThree from '../component/public/RegistereSliderThree.png'
import { FaStar } from "react-icons/fa";
import { IoIosStarOutline } from "react-icons/io";
const RajestaredPepole = ({className}) => {
  return (
    <div className={className}>
        <Container>
          <Flex className={"gap-x-8 items-center justify-between"} >
             <div className="w-[20%]">
                  <div className=' w-full h-[200px]'>
                      <Image src={RegistereSliderThree} alt='Tutorone' width={"full"} height={"full"} />
                      <h1 className=' text-[25px]'>Michael F. Stanton</h1>
                      <p className=' text-[16px] font-lg text-[#4F4F4F]'>Department of Physics</p>
                      <Flex className={" mt-2"}>
                         <FaStar className=" text-[#ff1f50]" />
                         <FaStar className=" text-[#ff1f50]" />
                         <FaStar className=" text-[#ff1f50]" />
                         <FaStar className=" text-[#ff1f50]" />
                         <IoIosStarOutline className=" text-[#ff1f50]" />
                      </Flex>
                  </div>
             </div>
              
             <div className="w-[20%]">
                  <div className=' w-full h-[200px]'>
                      <Image src={RegistereSliderThree} alt='Tutorone' width={"full"} height={"full"} />
                      <h1 className=' text-[25px]'>Michael F. Stanton</h1>
                      <p className=' text-[16px] font-lg text-[#4F4F4F]'>Department of Physics</p>
                      <Flex className={" mt-2"}>
                         <FaStar className=" text-[#ff1f50]" />
                         <FaStar className=" text-[#ff1f50]" />
                         <FaStar className=" text-[#ff1f50]" />
                         <FaStar className=" text-[#ff1f50]" />
                         <IoIosStarOutline className=" text-[#ff1f50]" />
                      </Flex>
                  </div>
             </div>

             <div className="w-[20%]">
                  <div className=' w-full h-[200px]'>
                      <Image src={RegistereSliderThree} alt='Tutorone' width={"full"} height={"full"} />
                      <h1 className=' text-[25px]'>Michael F. Stanton</h1>
                      <p className=' text-[16px] font-lg text-[#4F4F4F]'>Department of Physics</p>
                      <Flex className={" mt-2"}>
                         <FaStar className=" text-[#ff1f50]" />
                         <FaStar className=" text-[#ff1f50]" />
                         <FaStar className=" text-[#ff1f50]" />
                         <FaStar className=" text-[#ff1f50]" />
                         <IoIosStarOutline className=" text-[#ff1f50]" />
                      </Flex>
                  </div>
             </div>

             <div className="w-[20%]">
                  <div className=' w-full h-[200px]'>
                      <Image src={RegistereSliderThree} alt='Tutorone' width={"full"} height={"full"} />
                      <h1 className=' text-[25px]'>Michael F. Stanton</h1>
                      <p className=' text-[16px] font-lg text-[#4F4F4F]'>Department of Physics</p>
                      <Flex className={" mt-2"}>
                         <FaStar className=" text-[#ff1f50]" />
                         <FaStar className=" text-[#ff1f50]" />
                         <FaStar className=" text-[#ff1f50]" />
                         <FaStar className=" text-[#ff1f50]" />
                         <IoIosStarOutline className=" text-[#ff1f50]" />
                      </Flex>
                  </div>
             </div>

          </Flex>
        </Container>
    </div>
  )
}

export default RajestaredPepole