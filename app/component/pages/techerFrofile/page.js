import Container from "@/app/layouts/Container"
import Image from "next/image"
import profile from "../../public/profile.png"
import Rectangle146 from "../../public/Rectangle146.png"
import varifad from "../../public/varifad.png"
import SocialMediaList from "../../public/SocialMediaList.png"
import Link from "next/link"
const page = () => {

   
  return (
    <div>
       <Container>

               <div className="w-[90%] h-[739px] bg-white rounded-[15px]">
                     
                    <div> 
                        <Image src={profile} alt="profile"   /> 
                    </div> 
                       
                    <div className="flex">
                         
                         <div>
                              <div className="w-[220px]">
                              <Image src={Rectangle146} className=" mt-[-130px] ml-6 cursor-pointer" />
                              </div>
                         </div>

                         <div className=" ml-[45px] mt-6 flex">
                            <div>
                                 <h1 className=" text-[#000000] text-[32px] font-lg font-semibold">Mitchel C. Shay</h1>
                                 <p className=" text-[#000000] text-[17px] font-in  font-semibold">150 <span className=" text-[#222222] font-[200px] cursor-pointer">Followers</span></p>
                            </div>

                            <div className="w-[50px]">
                               <Image src={varifad} alt="varifad" />
                            </div>
                         </div>

                         <div className=" ml-10  mt-6">
                             <Image src={SocialMediaList} alt="SocialMediaList"  />
                         </div>

                         <div className=" mt-6">
                             <Image src={SocialMediaList} alt="SocialMediaList"  />
                         </div>

                         <div className=" mt-6">
                             <Image src={SocialMediaList} alt="SocialMediaList"  />
                         </div>

                         <div className="mt-6">
                             <Image src={SocialMediaList} alt="SocialMediaList"  />
                         </div>

                       
                      
                    </div>  
                      
                
                </div>     

       </Container>     
    </div>
  )
}

export default page