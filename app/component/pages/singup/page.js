import Container from '@/app/layouts/Container'
import Flex from '@/app/layouts/Flex'
import Image from 'next/image'
import React from 'react'
import newlogo2 from '../../public/newlogo2.png'
import navbar from '../../public/navbar.png'
import singup from '../../public/singup.png'
import Line40 from '../../public/Line40.png'
import logingogle from '../../public/logingogle.png'
import loginfb from '../../public/loginfb.png'
const signup = () => {
  return (
    <div className=" bg-[#F6F6F8] w-full h-[1000px]" >
        <Container>
              <Flex className={"items-center py-[28px]"}>
                   <div>
                      <Image src={newlogo2} alt='newlogo2' />
                   </div>

                   <div className="ml-2">
                      <Image src={singup} alt='singup' />
                   </div>

                   <div>
                      <h1 className=" text-[#222222] text-[20px] font-in mt-[15px] font-semibold">হোম</h1>
                   </div>
              </Flex>

              <Flex className={" justify-center"}>
                   <div  className=" w-[506px] h-[649px] bg-[#FFFFFF] rounded-[15px] shadow-lg px-10">
                          <div>
                              <Image src={navbar} className=" block ml-auto mr-auto mt-[36px] cursor-pointer" />
                              <h1 className=" text-center text-[#000000BF] text-[18px] font-rb">লগ ইন / সাইন আপ করুন</h1>
                              <label htmlFor='Singup' className=" mt-10 inline-block text-[#000000A6] text-[18px] font-rb">মোবাইল নাম্বার</label>
                              <input type='text' placeholder='+8801XXXXXXXXX' className=" w-[363px] mt-[7px] outline-none border-b border-[#00000061] text-[#000000] text-[19px] font-semibold" />
                              <p className=" mt-[25px] text-[17px] text-[#000000] font-rb">আপনি আমাদের <span className=" text-[#FF054D] cursor-pointer" >নিয়ম ও শর্তসমূহে</span> সম্মত আছেন ?</p>
                              <button className=" bg-[#222222] mt-[30px] py-2 px-[170px] text-white text-[20px] font-semibold  font-ru rounded-lg shadow-lg">পরবর্তী</button>  
                          </div>

                          <Flex className={"mt-[43px] items-center gap-x-[50px]"}>
                               
                               <div>
                                   <Image src={Line40} alt='Line40' width={"full"} height={"full"} />
                               </div>
                              
                              <div>
                                 <h1 className=" text-[#515151] font-rb cursor-pointer">অথবা চালিয়ে যান</h1>
                              </div>

                              <div>
                                   <Image src={Line40} alt='Line40' width={"full"} height={"full"} />
                               </div>
                               
                          </Flex>

                          <Flex className={" ml-8 mt-[52px] gap-x-[60px]"}>
                              <div className=" w-[141px] h-[81px] rouded-[10px] border border-[#4F4F4F]" >
                                 <Image src={logingogle} alt='logingogle' className=" block mr-auto ml-auto mt-[15px] cursor-pointer" />
                              </div>

                              <div className=" w-[141px] h-[81px] rouded-[10px] border border-[#4F4F4F]" >
                                 <Image src={loginfb} alt='loginfb' className=" block mr-auto ml-auto mt-[15px] cursor-pointer" />
                              </div>
                          </Flex>
                   </div>
              </Flex>

              
        </Container>
    </div>
  )
}

export default signup