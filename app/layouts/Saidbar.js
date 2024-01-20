"use client"
import React, { useState } from 'react'
import { FaAngleRight } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import Link from 'next/link';
import { FaPlus } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa6";
import AssignmentIcon from '@mui/icons-material/Assignment';
import AssignmentReturnedIcon from '@mui/icons-material/AssignmentReturned';
import GroupIcon from '@mui/icons-material/Group';
import { FaUsers } from "react-icons/fa6";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { AiTwotoneAppstore } from "react-icons/ai";
import SettingsIcon from '@mui/icons-material/Settings';
import NightlightIcon from '@mui/icons-material/Nightlight';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import Image from 'next/image';
import navbar from '../component/public/navbar.png';
import Flex from './Flex';
const saidbar = ({className}) => {
    const [saidbar,setsaidbar]= useState(true)
  return (
    <div className={className}>
         {
            saidbar ?
            
            <div className='w-[80px] h-[650px] bg-[#efefef]'>
                <div className=' relative' onClick={()=>setsaidbar(!saidbar)}>
                <FaAngleRight className=" absolute top-0 right-[-10px] bg-[#c50739] shadow-lg rounded-full w-8 h-4  text-white cursor-pointer" />
                </div>

                <div className='text-center px-1'>
                  <Link href={"/"}>
                    <FaSearch className="mt-6 inline-block text-3xl text-[#c50739] w-[70px]" />
                  </Link>
                  
                  <Link className='w-[50px] h-[50px] rounded-lg bg-black inline-block mt-4' href={"/"} >
                      <FaPlus className="mt-4 inline-block text-white" />
                  </Link>

                  <div className=" cursor-pointer mt-4 w-[70px] h-[40px] hover:w-[w-30px] hover:h-[40px] hover:bg-[#22c55e] hover:rounded-lg">
                       <ForwardToInboxIcon className='mt-2'  />
                  </div>

                  <div className=" cursor-pointer mt-4 w-[70px] h-[40px] hover:w-[w-30px] hover:h-[40px] hover:bg-[#22c55e] hover:rounded-lg">
                       <AssignmentIcon className='mt-2'  />
                  </div>

                  <div className=" cursor-pointer mt-4 w-[70px] h-[40px] hover:w-[w-40px] hover:h-[40px] hover:bg-[#22c55e] hover:rounded-lg">
                       <AssignmentReturnedIcon className='mt-2'  />
                  </div>

                  <div className=" cursor-pointer mt-4 w-[70px] h-[40px] hover:w-[w-40px] hover:h-[40px] hover:bg-[#22c55e] hover:rounded-lg">
                       <GroupIcon className='mt-2'  />
                  </div>

                  <div className=" cursor-pointer mt-4 w-[70px] h-[40px] hover:w-[w-40px] hover:h-[40px] hover:bg-[#22c55e] hover:rounded-lg">
                       <FaUsers  className='mt-2 inline-block text-[22px]'  />
                  </div>

                  <div className=" cursor-pointer mt-4 w-[70px] h-[40px] hover:w-[w-40px] hover:h-[40px] hover:bg-[#22c55e] hover:rounded-lg">
                       <FavoriteBorderOutlinedIcon  className='mt-2 inline-block text-[22px]'  />
                  </div>

                  <div className=" cursor-pointer mt-4 w-[70px] h-[40px] hover:w-[w-40px] hover:h-[40px] hover:bg-[#22c55e] hover:rounded-lg">
                       <AiTwotoneAppstore   className='mt-2 inline-block text-[22px]'  />
                  </div>

                  <div className=" cursor-pointer mt-4 w-[70px] h-[40px] hover:w-[w-40px] hover:h-[40px] hover:bg-[#22c55e] hover:rounded-lg">
                       <SettingsIcon  className='mt-2 inline-block text-[22px]'  />
                  </div>

                  <div className=" cursor-pointer mt-4 w-[70px] h-[40px] hover:w-[w-40px] hover:h-[40px] hover:bg-[#22c55e] hover:rounded-lg">
                       <NightlightIcon  className='mt-2 inline-block text-[22px]'  />
                  </div>
                  
                </div>


            </div>
            
            :<div className='w-[190px] h-[650px] bg-[#efefef] px-2'  >

              <div className=' relative' onClick={()=>setsaidbar(!saidbar)}>
                <FaAngleLeft className=" absolute top-0 right-[-10px] bg-[#c50739] shadow-lg rounded-full w-8 h-4  text-white cursor-pointer" />
                </div>
                 
                <div>
                      <div className='py-1'>
                         <Image src={navbar} width={"full"} height={"full"} className='w-[150px] h[150px] m-auto mt-[30px] block cursor-pointer'   />
                      </div>

                   <Flex className={"mt-3 gap-x-2 bg-black rounded-lg py-2 items-center px-2 cursor-pointer hover:bg-slate-950"}>
                       <FaPlus className=" text-white inline-block"  />
                       <h1 className=' font-lg text-white text-[16px] font-semibold'>New Post</h1>
                   </Flex>

                   <Flex className={"mt-3 gap-x-2 rounded-lg py-2 items-center px-2 cursor-pointer hover:bg-[#22c55e]"}>
                       <ForwardToInboxIcon className="text-black inline-block"  />
                       <h1 className=' text-black font-lg  text-[16px] font-semibold'>Inbox</h1>
                   </Flex>

                   <Flex className={"mt-3 gap-x-2 rounded-lg py-2 items-center px-2 cursor-pointer hover:bg-[#22c55e]"}>
                       <AssignmentIcon  className="text-black inline-block"  />
                       <h1 className=' text-black font-lg  text-[16px] font-semibold'>My Post</h1>
                   </Flex>

                   <Flex className={"mt-3 gap-x-2 rounded-lg py-2 items-center px-2 cursor-pointer hover:bg-[#22c55e]"}>
                       <AssignmentReturnedIcon className="text-black inline-block"  />
                       <h1 className=' text-black font-lg  text-[16px] font-semibold'>Post</h1>
                   </Flex>

                   <Flex className={"mt-3 gap-x-2 rounded-lg py-2 items-center px-2 cursor-pointer hover:bg-[#22c55e]"}>
                       <GroupIcon  className="text-black inline-block"  />
                       <h1 className=' text-black font-lg  text-[16px] font-semibold'>Tutors</h1>
                   </Flex>

                   <Flex className={"mt-3 gap-x-2 rounded-lg py-2 items-center px-2 cursor-pointer hover:bg-[#22c55e]"}>
                       <FaUsers className='mt-2 inline-block text-[22px]'  />
                       <h1 className=' text-black font-lg  text-[16px] font-semibold'>Media</h1>
                   </Flex>

                   <Flex className={"mt-3 gap-x-2 rounded-lg py-2 items-center px-2 cursor-pointer hover:bg-[#22c55e]"}>
                       <FavoriteBorderOutlinedIcon className='mt-2 inline-block text-[22px]'  />
                       <h1 className=' text-black font-lg  text-[16px] font-semibold'>Favorites</h1>
                   </Flex>

                   <Flex className={"mt-3 gap-x-2 rounded-lg py-2 items-center px-2 cursor-pointer hover:bg-[#22c55e]"}>
                       <AiTwotoneAppstore className='mt-2 inline-block text-[22px]'  />
                       <h1 className=' text-black font-lg  text-[16px] font-semibold'>Books</h1>
                   </Flex>

                   <Flex className={"mt-3 gap-x-2 rounded-lg py-2 items-center px-2 cursor-pointer hover:bg-[#22c55e]"}>
                       <SettingsIcon className='mt-2 inline-block text-[22px]'  />
                       <h1 className=' text-black font-lg  text-[16px] font-semibold'>Settings</h1>
                   </Flex> 

                   <Flex className={"mt-3 gap-x-2 rounded-lg py-2 items-center px-2 cursor-pointer hover:bg-[#22c55e]"}>
                       <NightlightIcon className='mt-2 inline-block text-[22px]'  />
                       <h1 className=' text-black font-lg  text-[16px] font-semibold'>Dark Mode</h1>
                   </Flex>                     
        
                </div>
            </div>
         }
    </div>
  )
}

export default saidbar