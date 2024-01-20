import Container from '@/app/layouts/Container'
import Image from 'next/image'
import footer from '../public/footer.png'
import Flex from '@/app/layouts/Flex'
import { FaFacebook } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import footerplaystore from '../public/footerplaystore.png'
import Ulitem from '@/app/layouts/Ulitem';
import Liitem from '@/app/layouts/Liitem';
const Footer = ({className}) => {
  return (
    <div className={`mt-[101px] w-[100%] h-[575px] bg-[#262626] py-10 ${className}`} >
         <Container>
               <Flex className={" gap-x-6 justify-between"}>
                  <div className=" w-[40%]">
                      <Image src={footer} alt='footer' />
                      <h1 className=" text-[16px] font-rb text-[#9ca3af] mt-11">Find us on social media</h1>
                      <Flex className={"mt-11 gap-x-4 items-center"}>
                          <FaFacebook className="text-white text-2xl cursor-pointer hover:text-[#e11d48] transition-all" />
                          <IoLogoLinkedin className="text-white text-2xl cursor-pointer hover:text-[#e11d48] transition-all" />
                          <FaYoutube className="text-white text-3xl cursor-pointer hover:text-[#e11d48] transition-all" />
                      </Flex>
                      <Image src={footerplaystore} alt='footerplaystore' className=' mt-11 cursor-pointer' width={192} />
                   </div>

                   <div className=" w-[20%] mt-4" >
                       <h1 className=" font-in text-[20px] text-[#9ca3af] ">User terms</h1>
                      <Ulitem className={" mt-6"}>
                         <Liitem linkname={"Terms and Conditions"} href={"/component/pages/termsConditions"} className={" text-[#9ca3af] mt-5 hover:text-[#e11d48] transition-all"} />
                         <Liitem linkname={"Policies"} href={"/component/pages/privacy"} className={" text-[#9ca3af] mt-5 hover:text-[#e11d48] transition-all"} />
                         <Liitem linkname={"Disclaimer"} href={"/component/pages/disclaimers"} className={" text-[#9ca3af] mt-5 hover:text-[#e11d48] transition-all"} />
                      </Ulitem>
                   </div>

                   <div className=" w-[20%] mt-4" >
                       <h1 className=" font-in text-[20px] text-[#9ca3af] ">Company</h1>
                      <Ulitem className={" mt-6"}>
                         <Liitem linkname={"About us"} href={"/component/pages/aboutus"} className={" text-[#9ca3af] mt-5 hover:text-[#e11d48] transition-all"} />
                         <Liitem linkname={"Contact us"} href={"/"} className={" text-[#9ca3af] mt-5 hover:text-[#e11d48] transition-all"} />
                         <Liitem linkname={"Login"} href={"/component/pages/singup"} className={" text-[#9ca3af] mt-5 hover:text-[#e11d48] transition-all"} />
                      </Ulitem>
                   </div>

                   <div className=" w-[20%] mt-4" >
                       <h1 className=" font-in text-[20px] text-[#9ca3af] ">Other Links</h1>
                      <Ulitem className={" mt-6"}>
                         <Liitem linkname={"Promote your business"} href={"/component/pages/Promotebussness"} className={" text-[#9ca3af] mt-5 hover:text-[#e11d48] transition-all"} />
                         <Liitem linkname={"Book store"} href={"/"} className={" text-[#9ca3af] mt-5 hover:text-[#e11d48] transition-all"} />
                         <Liitem linkname={"Tutors"} href={"/"} className={" text-[#9ca3af] mt-5 hover:text-[#e11d48] transition-all"} />
                         <Liitem linkname={"Posts"} href={"/"} className={" text-[#9ca3af] mt-5 hover:text-[#e11d48] transition-all"} />
                      </Ulitem>
                   </div>
               </Flex>

               <div className=" text-center mt-[90px]">
                   <h1 className=" font-rb text-[#e5e7eb] text-[20px] cursor-pointer">© 2020 - 2024 <span className=" text-[#e11d48]">TuitionApp</span> .All rights reserved.</h1>
                   <a href='https://cellsweb.com/' className='font-rb text-[#e5e7eb] text-[13px] mt-4 block'>Meet the developers: <span className=" text-[#ff6b26]">Cellsweb IT Solutions Ltd</span></a>
               </div>
         </Container>
    </div>
  )
}

export default Footer