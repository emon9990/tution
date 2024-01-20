import React from 'react'
import Rajestartutorbarner from '../../public/Rajestartutorbarner.png'
import Flex from '@/app/layouts/Flex'
import NearMeIcon from '@mui/icons-material/NearMe';
import { LuUser2 } from "react-icons/lu";
import Image from 'next/image';
import Container from '@/app/layouts/Container';
import RajestaredPepole from '@/app/layouts/RajestaredPepole';
const Rajestaredtutor = () => {
   
  return (
    <div>
           <div className='relative'>
             <div className=''>
                <Image src={Rajestartutorbarner} width={"full"} height={"full"} />
             </div>

             <div className=" w-[80%] h-[140px] bg-slate-300 rounded-[31px] font-rb  shadow-[0px 4px 70px 5px] shadow-white absolute top-[70%] left-[150px]">
                 <Flex className={"pl-[50px] py-[30px] gap-x-[80px]"}>
                     <div>
                         <div className='flex items-center gap-x-1' >
                                 <NearMeIcon className='text-[#00000080]' />
                                 <h1 className='text-[#00000080] text-[23px] font-rb font-semibold' >Location</h1>
                         </div>
                         <h1 className=' text-[#000000] text-[28px] font-rb'>Savar, Dhaka</h1>
                     </div>

                     <div>
                         <div className='flex items-center gap-x-1' >
                                 <LuUser2 className='text-[#00000080] text-2xl' />
                                 <h1 className='text-[#00000080] text-[23px] font-rb font-semibold' >Gender</h1>
                         </div>
                         <h1 className=' text-[#000000] text-[28px] font-rb'>Select Gender</h1>
                     </div>

                     <div>
                        <input type='text' placeholder='Search by name, dept, institution' className=" bg-slate-600 px-[20px] py-4  mt-2 outline-none border border-black w-[400px]"  />
                     </div>
                 </Flex>
             </div>
             </div>

            <Container>
                  <h1 className=" font-rb text-[50px] text-[#171717CC] mt-10">Top Searchs</h1>

                  <Flex className={" mt-[22px] gap-x-[17px] items-center"}>
                       <div className=" bg-[#F8F8F8] w-[118px] h-[88px] rounded-[44px] text-center cursor-pointer" >
                           <h1 className=" text-[35px] font-lg mt-4 text-[#00000099]">DU</h1>
                       </div>

                       <div className=" bg-[#F8F8F8] w-[144px] h-[88px] rounded-[44px] text-center cursor-pointer" >
                           <h1 className=" text-[35px] font-lg mt-4 text-[#00000099]">DMC</h1>
                       </div>

                       <div className=" bg-[#F8F8F8] w-[145px] h-[88px] rounded-[44px] text-center cursor-pointer" >
                           <h1 className=" text-[35px] font-lg mt-4 text-[#00000099]">BUET</h1>
                       </div>

                       <div className=" bg-[#F8F8F8] w-[104px] h-[88px] rounded-[44px] text-center cursor-pointer" >
                           <h1 className=" text-[35px] font-lg mt-4 text-[#00000099]">RU</h1>
                       </div>

                       <div className=" bg-[#F8F8F8] w-[152px] h-[88px] rounded-[44px] text-center cursor-pointer" >
                           <h1 className=" text-[35px] font-lg mt-4 text-[#00000099]">SUST</h1>
                       </div>

                       <div className=" bg-[#F8F8F8] w-[146px] h-[88px] rounded-[44px] text-center cursor-pointer" >
                           <h1 className=" text-[35px] font-lg mt-4 text-[#00000099]">RUET</h1>
                       </div>
                  </Flex>

                  <div className="mt-6">
                      <h1 className=" text-[#171717] text-[50px] font-ru">রেজিস্টার্ড টিউটরস</h1>
                      <p className=" text-[16px] mt-4 font-rb text-[#00000080]">42,254 tutors available</p>
                      <RajestaredPepole className={"mt-[46px]"} />
                      <RajestaredPepole className={"mt-[150px] "} />  
                  </div>

            </Container>
    </div>
  )
}

export default Rajestaredtutor
