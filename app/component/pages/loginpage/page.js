import Checkoutinput from '@/app/layouts/Checkoutinput'
import Container from '@/app/layouts/Container'
import Flex from '@/app/layouts/Flex'
import React from 'react'
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const page = () => {
    
    


  return (
    <div className="w-full h-full bg-[#efefef] py-8">
        <Container>
            <div className=" ml-[150px] h-[1800px] bg-white shadow-lg w-[75%] rounded-[7px] px-3">
                   <Flex className={" gap-x-5 justify-between items-center"}>
                       <div>
                           <h1>নিচের তথ্য গুলো গুলো পূরণ করুন </h1>
                       </div>

                       <div className=" flex items-center gap-x-3">
                          <AddLocationAltIcon className=' text-[#FF054D]' />
                          <h1 className="text-[#000000] text-[24px] font-rb font-semibold">উত্তরা</h1>
                          <h1 className=' text-[#0074BA] font-rb text-[17px] cursor-pointer'>পরিবর্তন</h1>
                       </div>
                   </Flex>
                   <hr className=' mt-5 bg-black' />
                  
                  <div className='mt-10 ml-[200px]'>
                      <form>
                          <Checkoutinput label={"পোস্টের শিরোনাম"} type={"text"} placeholder={"একজন অভিজ্ঞ টিউটর প্রয়োজন "} className={""} />
                          <Checkoutinput label={"ক্লাস"} type={"text"} placeholder={"রসায়ন, পদার্থবিজ্ঞ্যান, উচ্চতর গনিত "} lableclassname={"mt-9"} />
                          <Checkoutinput label={"সাব্জেক্ট"} type={"text"} placeholder={"10"} lableclassname={"mt-9"} />
                          
                           <label htmlFor='' className='block font-rb font-semibold text-[#58595BE5] text-[16px] mt-[36px]'>ল্যাংগুয়েজ/মিডিয়াম</label>
                          <select name='Languages' id="Languages" className="mt-[8px] bg-[#51515140] w-[500px] border-black py-3 px-6" >
                              <option value="বাংলা মিডিয়াম ">বাংলা মিডিয়াম</option>
                              <option value="বাংলা মিডিয়াম ">English</option>
                          </select>

                          <label htmlFor='' className='block font-rb font-semibold text-[#58595BE5] text-[16px] mt-[36px]'>টিউটর জেন্ডার</label>
                          <select name='Tutorgander' id='Tutorgander' className="mt-[8px] bg-[#51515140] w-[500px] border-black py-3 px-6" >
                              <option value="সকল">সকল </option>
                              <option value="Male">Male</option>
                              <option value="Female">Female</option>
                          </select>

                          <label htmlFor='' className='block font-rb font-semibold text-[#58595BE5] text-[16px] mt-[36px]'>দিন/শপ্তাহ</label>
                          <select name='Tutorgander' id='Tutorgander' className="mt-[8px] bg-[#51515140] w-[500px] border-black py-3 px-6" >
                              <option value="৩ দিন ">৩ দিন </option>
                              <option value="৩ দিন ">৩ দিন </option>
                              <option value="৩ দিন ">৩ দিন </option>
                          </select>

                          <Checkoutinput label={"মুল্য (৳) "} type={"৫০০০"} placeholder={"10"} lableclassname={"mt-9"} />                          
                            <FormGroup>
                             <FormControlLabel control={<Checkbox defaultChecked />} label="আলোচনা সাপেক্ষে" className=' text-[#58595BE5] text-[16px] font-rb' />
                             </FormGroup>
                           
                           <Flex className={"mt-[37px] gap-3 justify-between items-center"}>
                                <div>
                                    <h1 className=" text-[#58595BE5] font-rb">সিলেক্ট ম্যাপ লোকেশন</h1>
                                </div>

                                <div>
                                <select name='Tutorgander' id='Tutorgander' className=" bg-[#FF054D]  border-black py-3 px-[50px] text-white cursor-pointer" >
                                    <option className=' bg-white text-black' value="৩ দিন ">সিলেক্ট </option>
                                    <option className=' bg-white text-black'  value="৩ দিন ">৩ দিন </option>
                                    <option className=' bg-white text-black'  value="৩ দিন ">৩ দিন </option>
                                 </select>
                                </div>
                           </Flex>

                                 
                      </form>

                      <hr className=" mt-[50px] bg-black w-[80%]"  />

                      <div className=" mt-[34px]" >
                           <h1 className=" text-[#00000091] text-[20px] font-rb">আপনার সম্বন্ধেঃ</h1>

                           <h1 className="mt-[34px] text-[16px] text-[#58595BCC] font-rb">নাম</h1>
                           <h1 className=" text-[16px] text-[#222222D9] font-rb">Salim Rana</h1>

                           <h1 className="mt-[34px] text-[16px] text-[#58595BCC] font-rb">ইমেইল</h1>
                           <h1 className=" text-[16px] text-[#222222D9] font-rb">Salim Rana</h1>

                           <div className="w-[500px] h-[208px] bg-white border border-[#5151514D] mt-8">
                             
                           </div>

                           <FormControlLabel control={<Checkbox defaultChecked />} label="আমি শর্তাবলী এবং নীতিমালা গুলো পড়েছি এবং গ্রহন করছি" className=' text-[#0074BA] text-[16px] font-rb mt-[26px]' />
                             
                          <Flex className={" justify-end"}>
                               <h1 className="py-4 px-12 bg-[#757575] mt-[16px] text-white font-ru cursor-pointer">টিউশন পোস্ট করুন</h1>
                          </Flex>
                      </div>
                  </div>
            </div>
        </Container>
    </div>
  )
}

export default page