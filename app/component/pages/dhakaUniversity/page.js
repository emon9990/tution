import React from 'react'
import Rajestartutorbarner from '../../public/Rajestartutorbarner.png'
import Flex from '@/app/layouts/Flex'
import NearMeIcon from '@mui/icons-material/NearMe';
import { LuUser2 } from "react-icons/lu";
import Image from 'next/image';
import Container from '@/app/layouts/Container';
import RajestaredPepole from '@/app/layouts/RajestaredPepole';
const Dhaka = () => {
   
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
                    
                    <div className="text-center mt-12">
                        <h1 className=" text-[#00000080] text-[45px] font-rb">Showing results for <span className=' text-[#171717]'>Dhaka University</span></h1>
                        <p className=" text-[#00000080] text-[16px] font-rb mt-3">42,254 tutors available</p>
                    </div>

                  <div className="mt-6">
                      <RajestaredPepole className={"mt-[46px]"} />
                      <RajestaredPepole className={"mt-[150px] "} />  
                  </div>

            </Container>
    </div>
  )
}

export default Dhaka