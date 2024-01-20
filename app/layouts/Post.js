import React from 'react'
import Container from './Container'
import Flex from './Flex'
import classsa from '../component/public/classsa.png'
import days from '../component/public/days.png'
import locations from '../component/public/locations.png'
import tutionsubject from '../component/public/tutionsubject.png'
import world from '../component/public/world.png'
import salary from '../component/public/salary.png'
import gender from '../component/public/gender.png'

import Image from 'next/image'
const Post = () => {
  return (
    <div>
        <Container>
               <div>
                    <div className=' text-center'>
                         <h1 className='text-[63px] mt-[89px] text-[#171717] font-lg font-bold'>Most Recent Tuition Posts</h1>
                         <p className='mt-[21px] font-lg text-[#171717] text-[23px]'>Hear from our satisfied clients and learn how we've helped them take </p>
                         <p className='mt-[5px] font-lg text-[#171717] text-[23px]'>their businesses to new heights.</p>
                    </div>

                    

                    <div className='mt-[50px] py-2 bg-slate-100 shadow-lg rounded-lg border border-black'>
                    <Flex className={"gap-x-[290px] mt-[30px]"}>
                        <div className=' flex items-center'>
                            <div className='w-[58px] h-[59px] cursor-pointer'>
                                <Image src={classsa} width={"full"} height={"full"} />
                            </div>
                            <div>
                                <h1 className='text-[#1F2937] font-rb text-[19px] font-bold'>Class</h1>
                                <h1>HSC</h1>
                            </div>
                        </div>

                        <div className=' flex items-center'>
                            <div className='w-[58px] h-[59px] cursor-pointer'>
                                <Image src={days} width={"full"} height={"full"} />
                            </div>
                            <div>
                                <h1 className='text-[#1F2937] font-rb text-[19px] font-bold'>Days/Week</h1>
                                <h1>3</h1>
                            </div>
                        </div>
                         </Flex>


                         <Flex className={"gap-x-[150px] mt-[30px]"}>
                        <div className=' flex items-center'>
                            <div className='w-[58px] h-[59px] cursor-pointer'>
                                <Image src={locations} width={"full"} height={"full"} />
                            </div>
                            <div>
                                <h1 className='text-[#1F2937] font-rb text-[19px] font-bold'>Location</h1>
                                <h1>Dhanmondi, Dhaka, Dhaka</h1>
                            </div>
                        </div>

                        <div className=' flex items-center'>
                            <div className='w-[58px] h-[59px] cursor-pointer'>
                                <Image src={tutionsubject} width={"full"} height={"full"} />
                            </div>
                            <div>
                                <h1 className='text-[#1F2937] font-rb text-[19px] font-bold'>Tution Subjects</h1>
                                <h1>Finance , Statistics</h1>
                            </div>
                        </div>
                         </Flex>


                         <Flex className={"gap-x-[220px] mt-[30px]"}>
                        <div className=' flex items-center'>
                            <div className='w-[58px] h-[59px] cursor-pointer'>
                                <Image src={world} width={"full"} height={"full"} />
                            </div>
                            <div>
                                <h1 className='text-[#1F2937] font-rb text-[19px] font-bold'>Curriculum</h1>
                                <h1>Bengali-Medium</h1>
                            </div>
                        </div>

                        <div className=' flex items-center'>
                            <div className='w-[58px] h-[59px] cursor-pointer'>
                                <Image src={salary} width={"full"} height={"full"} />
                            </div>
                            <div>
                                <h1 className='text-[#1F2937] font-rb text-[19px] font-bold'>salary</h1>
                                <h1>5000</h1>
                            </div>
                        </div>
                         </Flex>

                         <div className='mt-[30px] flex items-center'>
                            <div className='w-[58px] h-[59px] cursor-pointer'>
                                <Image src={gender} width={"full"} height={"full"} />
                            </div>
                            <div>
                                <h1 className='text-[#1F2937] font-rb text-[19px] font-bold'>Preferable Gender</h1>
                                <h1>All</h1>
                            </div>
                        </div>
                    </div>



                    <div className='mt-[50px] py-2 bg-slate-100 shadow-lg rounded-lg border border-black'>
                    <Flex className={"gap-x-[290px] mt-[30px]"}>
                    
                        <div className=' flex items-center'>
                            <div className='w-[58px] h-[59px] cursor-pointer'>
                                <Image src={classsa} width={"full"} height={"full"} />
                            </div>
                            <div>
                                <h1 className='text-[#1F2937] font-rb text-[19px] font-bold'>Class</h1>
                                <h1>HSC</h1>
                            </div>
                        </div>

                        <div className=' flex items-center'>
                            <div className='w-[58px] h-[59px] cursor-pointer'>
                                <Image src={days} width={"full"} height={"full"} />
                            </div>
                            <div>
                                <h1 className='text-[#1F2937] font-rb text-[19px] font-bold'>Days/Week</h1>
                                <h1>3</h1>
                            </div>
                        </div>
                         </Flex>


                         <Flex className={"gap-x-[150px] mt-[30px]"}>
                        <div className=' flex items-center'>
                            <div className='w-[58px] h-[59px] cursor-pointer'>
                                <Image src={locations} width={"full"} height={"full"} />
                            </div>
                            <div>
                                <h1 className='text-[#1F2937] font-rb text-[19px] font-bold'>Location</h1>
                                <h1>Dhanmondi, Dhaka, Dhaka</h1>
                            </div>
                        </div>

                        <div className=' flex items-center'>
                            <div className='w-[58px] h-[59px] cursor-pointer'>
                                <Image src={tutionsubject} width={"full"} height={"full"} />
                            </div>
                            <div>
                                <h1 className='text-[#1F2937] font-rb text-[19px] font-bold'>Tution Subjects</h1>
                                <h1>Finance , Statistics</h1>
                            </div>
                        </div>
                         </Flex>


                         <Flex className={"gap-x-[220px] mt-[30px]"}>
                        <div className=' flex items-center'>
                            <div className='w-[58px] h-[59px] cursor-pointer'>
                                <Image src={world} width={"full"} height={"full"} />
                            </div>
                            <div>
                                <h1 className='text-[#1F2937] font-rb text-[19px] font-bold'>Curriculum</h1>
                                <h1>Bengali-Medium</h1>
                            </div>
                        </div>

                        <div className=' flex items-center'>
                            <div className='w-[58px] h-[59px] cursor-pointer'>
                                <Image src={salary} width={"full"} height={"full"} />
                            </div>
                            <div>
                                <h1 className='text-[#1F2937] font-rb text-[19px] font-bold'>salary</h1>
                                <h1>5000</h1>
                            </div>
                        </div>
                         </Flex>

                         <div className='mt-[30px] flex items-center'>
                            <div className='w-[58px] h-[59px] cursor-pointer'>
                                <Image src={gender} width={"full"} height={"full"} />
                            </div>
                            <div>
                                <h1 className='text-[#1F2937] font-rb text-[19px] font-bold'>Preferable Gender</h1>
                                <h1>All</h1>
                            </div>
                        </div>
                    </div>

                    <div className='mt-[50px] py-2 bg-slate-100 shadow-lg rounded-lg border border-black'>
                    <Flex className={"gap-x-[290px] mt-[30px]"}>
                        <div className=' flex items-center'>
                            <div className='w-[58px] h-[59px] cursor-pointer'>
                                <Image src={classsa} width={"full"} height={"full"} />
                            </div>
                            <div>
                                <h1 className='text-[#1F2937] font-rb text-[19px] font-bold'>Class</h1>
                                <h1>HSC</h1>
                            </div>
                        </div>

                        <div className=' flex items-center'>
                            <div className='w-[58px] h-[59px] cursor-pointer'>
                                <Image src={days} width={"full"} height={"full"} />
                            </div>
                            <div>
                                <h1 className='text-[#1F2937] font-rb text-[19px] font-bold'>Days/Week</h1>
                                <h1>3</h1>
                            </div>
                        </div>
                         </Flex>


                         <Flex className={"gap-x-[150px] mt-[30px]"}>
                        <div className=' flex items-center'>
                            <div className='w-[58px] h-[59px] cursor-pointer'>
                                <Image src={locations} width={"full"} height={"full"} />
                            </div>
                            <div>
                                <h1 className='text-[#1F2937] font-rb text-[19px] font-bold'>Location</h1>
                                <h1>Dhanmondi, Dhaka, Dhaka</h1>
                            </div>
                        </div>

                        <div className=' flex items-center'>
                            <div className='w-[58px] h-[59px] cursor-pointer'>
                                <Image src={tutionsubject} width={"full"} height={"full"} />
                            </div>
                            <div>
                                <h1 className='text-[#1F2937] font-rb text-[19px] font-bold'>Tution Subjects</h1>
                                <h1>Finance , Statistics</h1>
                            </div>
                        </div>
                         </Flex>


                         <Flex className={"gap-x-[220px] mt-[30px]"}>
                        <div className=' flex items-center'>
                            <div className='w-[58px] h-[59px] cursor-pointer'>
                                <Image src={world} width={"full"} height={"full"} />
                            </div>
                            <div>
                                <h1 className='text-[#1F2937] font-rb text-[19px] font-bold'>Curriculum</h1>
                                <h1>Bengali-Medium</h1>
                            </div>
                        </div>

                        <div className=' flex items-center'>
                            <div className='w-[58px] h-[59px] cursor-pointer'>
                                <Image src={salary} width={"full"} height={"full"} />
                            </div>
                            <div>
                                <h1 className='text-[#1F2937] font-rb text-[19px] font-bold'>salary</h1>
                                <h1>5000</h1>
                            </div>
                        </div>
                         </Flex>

                         <div className='mt-[30px] flex items-center'>
                            <div className='w-[58px] h-[59px] cursor-pointer'>
                                <Image src={gender} width={"full"} height={"full"} />
                            </div>
                            <div>
                                <h1 className='text-[#1F2937] font-rb text-[19px] font-bold'>Preferable Gender</h1>
                                <h1>All</h1>
                            </div>
                        </div>
                    </div>
               </div>
        </Container>
    </div>
  )
}

export default Post