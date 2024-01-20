"use client"
import Container from '@/app/layouts/Container'
import Flex from '@/app/layouts/Flex'
import Image from 'next/image';
import React from 'react'
import CountUp from 'react-countup';
import Lotis from '../public/Lotis.png'

const Studentsuccess = () => {
  return (
    <div className=' mt-[303px]'> 
         <Container>
            <div className="text-center">
             <h1 className="text-[63px] font-bold font-bn text-[#171717]">এক নজরে আমাদের অর্জন</h1>
             <p className="font-bn text-[23px] text-[#171717] mt-1">এক নজরে আমাদের কোম্পানির গ্রাহক , অর্জন এবং সেবা সম্পর্কে সংক্ষিপ্ত ধারনা</p>
             </div>


             <Flex className={"mt-[42px] gap-x-3"}>
                   <div>
                        
                         <div className="flex gap-x-2">
                         <div className="w-[391px] h-[202px] bg-[#E6E6F6] shadow-lg rounded-lg border border-[#5853AC] py-3 px-[60px]">
                              <div className="text-[#4F4B85] text-[56px] font-lg font-bold mt-[30px] cursor-pointer">
                              <CountUp start={0} end={100000} delay={5} />
                              </div>
                              <p className="text-[18px] font-bn text-[#000000] mt-1">টোটাল গ্রাহক সংখ্যা</p>
                         </div>

                         <div className="w-[391px] h-[202px] bg-[#FDF1F0] shadow-lg rounded-lg border border-[#FF054D] py-3 px-[60px]">
                              <div className="text-[#FF054D] text-[56px] font-lg font-bold mt-[30px] cursor-pointer">
                              <CountUp start={0} end={200000} delay={5} />
                              </div>
                              <p className="text-[18px] font-bn text-[#000000] mt-1">টোটাল শিক্ষক/শিক্ষিকা</p>
                         </div>
                         </div>

                         <div className="flex gap-x-2 mt-10">
                         <div className="w-[391px] h-[202px] bg-[#F8F5E4] shadow-lg rounded-lg border border-[#614B63] py-3 px-[60px]">
                              <div className="text-[#614B63] text-[56px] font-lg font-bold mt-[30px] cursor-pointer">
                              <CountUp start={0} end={12} delay={7} />
                              </div>
                              <p className="text-[18px] font-bn text-[#000000] mt-1">টোটাল বই সংখ্যা</p>
                         </div>

                         <div className="w-[391px] h-[202px] bg-[#FFFFFF] shadow-lg rounded-lg border border-[#363636] py-3 px-[60px]">
                              <div className="text-[#4E4E4E] text-[56px] font-lg font-bold mt-[30px] cursor-pointer">
                              <CountUp start={0} end={400000} delay={3} />
                              </div>
                              <p className="text-[18px] font-bn text-[#000000] mt-1">লাইভ টিউশন সংখ্যা</p>
                         </div>
                         </div>
                         
                   
                   </div>

                   <div className="w-[558px] h-[403px] mt-[60px]">
                       <Image src={Lotis} width={"full"} height={"full"} />
                   </div>
             </Flex>

            

         </Container>
    </div>
  )
}

export default Studentsuccess