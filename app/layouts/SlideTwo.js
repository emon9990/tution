import React from 'react'
import Container from './Container'
import Image from 'next/image'
import bd from '../component/public/bd.png'
import Rating from '../component/public/Rating.png'
import Flex from './Flex'
import Avatar from '../component/public/Avatar.png'
const SlideTwo = ({className}) => {
  return (
    <div className={className}>
        <Container>
             <div className=" h-[400px] bg-white shadow-lg px-3 rounded-lg">
                  <div className=" w-[50px] h-[50px] py-3" >
                      <Image src={bd} />
                  </div>

                  <div>
                    <h1 className=" text-[#171717] text-[20px] font-rb">I was so grateful to have insurance </h1>
                    <h1 className=" text-[#171717] text-[20px] font-rb">when my car was totaled in an </h1>
                    <p className=" text-[#171717] text-[17px] font-rb mt-5">The insurance company handled everything</p>
                    <p className=" text-[#171717] text-[17px] font-rb">quickly and efficiently, and I was able to get a</p>
                    <p className=" text-[#171717] text-[17px] font-rb">new car without having to worry about the </p>
                    <p className=" text-[#171717] text-[17px] font-rb">cost.</p>
                  </div>


                  <div className=" w-[50px] h-[50px] mt-[31px] cursor-pointer">
                       <Image src={Rating} />
                  </div>

                  <Flex className={" gap-x-2 items-center"}>
                      <div className="w-[50px] h-[50px]">
                          <Image src={Avatar} />
                      </div>

                      <div>
                         <h1 className=" text-[#171717] font-lg text-[19px]">Skylar Siphron</h1>
                         <p className=" text-[#171717] font-lg text-[14px]">Behance</p>
                      </div>
                  </Flex>
             </div>
        </Container>
    </div>
  )
}

export default SlideTwo