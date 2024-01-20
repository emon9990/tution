import Container from '@/app/layouts/Container'
import Flex from '@/app/layouts/Flex'
import Image from 'next/image'
import React from 'react'
import navbar from '../public/navbar.png'
import Ulitem from '@/app/layouts/Ulitem'
import Liitem from '@/app/layouts/Liitem'
import translate from '../public/translate.png'
import { FaPhone } from "react-icons/fa6";
import Divider from '@mui/material/Divider';

const Navbar = () => {
  return (
    <nav className="py-[21px] W-[100%] ">
         <Container>
            <Flex className={"items-center justify-between gap-x-[130px]"}>
              <div className="w-[35%]">
                <Image src={navbar} width={181} height={50} loading='lazy' />
              </div>

              <Ulitem className={"flex w-[65%]  justify-center ml-auto"}>
                 <Liitem linkname={"হোম"} href={"/"} className={" font-bn py-[21px] px-[30px] text-[17px] text-[#131212]"} />
                 <Liitem linkname={"এবাউট"} href={"/"} className={" font-bn py-[21px] px-[30px] text-[17px] text-[#131212]"} />
                 <Liitem linkname={"সার্ভিস"} href={"/"} className={" font-bn py-[21px] px-[30px] text-[17px] text-[#131212]"} />
                 <Flex className={"py-[21px] px-[30px] bg-[#efefef] rounded-lg cursor-pointer gap-x-[13px]"}>
                    <Image src={translate}  />
                   <Liitem linkname={"বাং"} href={"/"} className={" font-bn text-[17px] text-[#131212]"} />
                 </Flex>
                 <Flex className={" py-[21px] px-[30px] items-center gap-x-2"}>
                  <FaPhone className="inline-block text-[22px] text-[#E11D48]" />  
                  <Liitem linkname={"16910"} href={"/"} className={" font-bn text-[17px] text-[#E11D48]"} />
                 </Flex>
                 <Liitem linkname={"লগ ইন"} href={"/"} className={" font-bn py-[21px] px-[30px] text-[16px] text-white bg-[#E11D48] rounded-lg"} />
                 
                 
              </Ulitem>
            </Flex>
         </Container>

         <Divider textAlign="left" className='mt-[25px]' ></Divider>
    </nav>
  )
}

export default Navbar