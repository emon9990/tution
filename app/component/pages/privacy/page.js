import Container from '@/app/layouts/Container'
import Flex from '@/app/layouts/Flex'
import React from 'react'
import { FaSquareFull } from "react-icons/fa6";
const privacy = () => {
  return (
    <div>
         <Container>
             <div className=" w-[100%] h-[2800px] bg-[#f5f5f5] rounded-lg shadow-lg py-[74px] px-[25px] ">
                 <h1 className="text-center text-slate-900 text-[36px] font-rb font-semibold">Privacy policies</h1>
                 <p className=" text-[14px] text-slate-950 mt-9 font-rb font-semibold">সর্বশেষ আপডেট: ১৭ ডিসেম্বর, ২০২৩</p>
                 <h1 className=" mt-9 text-slate-950 font-bn text-[25px] font-semibold">গোপনীয়তা নীতি</h1>
                 <p className=" text-[13px] text-slate-950 mt-9 font-rb font-semibold">আমরা আপনার গোপনীয়তা রক্ষা করতে দৃঢ়প্রতিজ্ঞ। এই গোপনীয়তা নীতি বর্ণনা করে আমরা কোন তথ্য সংগ্রহ করি, কীভাবে আমরা এটি ব্যবহার করি এবং আপনার </p>
                 <p className=" text-[13px] text-slate-950 font-rb font-semibold">আমরা কী পদক্ষেপ গ্রহণ করি।</p>

                 <div className=' mt-[50px]'>
                     <div>
                        <p className=" text-[20px] text-slate-950 font-rb font-semibold">১. আমরা কোন তথ্য সংগ্রহ করি?</p>
                        <p className=" text-[13px] text-slate-950 font-rb font-semibold mt-2">আমরা বিভিন্ন তথ্য সংগ্রহ করি, যার মধ্যে রয়েছে:</p> 
                     </div>

                     <Flex className={"gap-x-2 items-center mt-2"}>
                         <FaSquareFull className=" text-[8px] text-[#111827]" />
                         <p className=" text-slate-950 font-semibold text-[13px] font-bn mt-1">ব্যক্তিগত তথ্য: আপনার নাম, ইমেল ঠিকানা, ফোন নম্বর, ঠিকানা, জন্ম তারিখ, শিক্ষাগত তথ্য, এবং আপনার টিউটরিংয়ের অভিজ্ঞতা সম্পর্কিত তথ্য।</p>   
                     </Flex>

                     <Flex className={"gap-x-2 items-center mt-2"}>
                         <FaSquareFull className=" text-[8px] text-[#111827]" />
                         <p className=" text-slate-950 font-semibold text-[13px] font-bn mt-1">ডিভাইস তথ্য: আপনার ডিভাইসের ধরন, অপারেটিং সিস্টেম, আইপি ঠিকানা, ব্রাউজারের ধরন এবং ভাষা সেটিংস।</p>   
                     </Flex>

                     <Flex className={"gap-x-2 items-center mt-2"}>
                         <FaSquareFull className=" text-[8px] text-[#111827]" />
                         <p className=" text-slate-950 font-semibold text-[13px] font-bn mt-1">ব্যবহারের তথ্য: আপনি আমাদের প্লাটফর্ম কীভাবে ব্যবহার করেন, যেমন আপনি কোন টিউটরদের দেখেন, আপনি কোন টিউটরদের সাথে যোগাযোগ করেন, এবং আপনি কত ঘন এটি ব্যবহার করেন।</p>   
                     </Flex>
                 </div>

                 <div className=' mt-[50px]'>
                     <div>
                        <p className=" text-[20px] text-slate-950 font-rb font-semibold">২. আমরা কীভাবে আপনার তথ্য প্রক্রিয়াকরণ করি?</p>
                        <p className=" text-[13px] text-slate-950 font-rb font-semibold mt-2">আমরা আপনার তথ্য নিম্নলিখিত কাজের জন্য ব্যবহার করি:</p> 
                     </div>

                     <Flex className={"gap-x-2 items-center mt-2"}>
                         <FaSquareFull className=" text-[8px] text-[#111827]" />
                         <p className=" text-slate-950 font-semibold text-[13px] font-bn mt-1">আপনার টিউটরিং অভিজ্ঞতা উন্নত করা।</p>   
                     </Flex>

                     <Flex className={"gap-x-2 items-center mt-2"}>
                         <FaSquareFull className=" text-[8px] text-[#111827]" />
                         <p className=" text-slate-950 font-semibold text-[13px] font-bn mt-1">আপনার প্রয়োজন অনুযায় টিউটর/টিউশন খুঁজতে সাহায্য করা।</p>   
                     </Flex>

                     <Flex className={"gap-x-2 items-center mt-2"}>
                         <FaSquareFull className=" text-[8px] text-[#111827]" />
                         <p className=" text-slate-950 font-semibold text-[13px] font-bn mt-1">আমাদের প্লাটফর্ম উন্নত করা।</p>   
                     </Flex>

                     <Flex className={"gap-x-2 items-center mt-2"}>
                         <FaSquareFull className=" text-[8px] text-[#111827]" />
                         <p className=" text-slate-950 font-semibold text-[13px] font-bn mt-1">আপনার সাথে যোগাযোগ করা।</p>   
                     </Flex>

                     <Flex className={"gap-x-2 items-center mt-2"}>
                         <FaSquareFull className=" text-[8px] text-[#111827]" />
                         <p className=" text-slate-950 font-semibold text-[13px] font-bn mt-1">আমাদের ব্যবসা পরিচালনা করা।</p>   
                     </Flex>
                 </div>

                 <div className=' mt-[50px]'>
                     <div>
                        <p className=" text-[20px] text-slate-950 font-rb font-semibold">৩. কখন এবং কার সাথে আমরা আপনার ব্যক্তিগত তথ্য শেয়ার করি?</p>
                        <p className=" text-[13px] text-slate-950 font-rb font-semibold mt-2">আমরা আপনার ব্যক্তিগত তথ্য নিম্নলিখিত অবস্থায় শেয়ার করতে পারি:</p> 
                     </div>

                     <Flex className={"gap-x-2 items-center mt-2"}>
                         <FaSquareFull className=" text-[8px] text-[#111827]" />
                         <p className=" text-slate-950 font-semibold text-[13px] font-bn mt-1">আপনার অনুমতিসহ: আপনি আমাদেরকে অনুমতি দিলে আমরা আপনার তথ্য তৃতীয় পক্ষের সাথে শেয়ার করতে পারি।</p>   
                     </Flex>

                     <Flex className={"gap-x-2 items-center mt-2"}>
                         <FaSquareFull className=" text-[8px] text-[#111827]" />
                         <p className=" text-slate-950 font-semibold text-[13px] font-bn mt-1">আইনগত বাধ্যবাধকতা অনুযায়: আইন অনুযায় আপনার তথ্য প্রকাশ করতে আমাদের যদি বাধ্যতা থাকে তাহলে আমরা এটি করব।</p>   
                     </Flex>

                     <Flex className={"gap-x-2 items-center mt-2"}>
                         <FaSquareFull className=" text-[8px] text-[#111827]" />
                         <p className=" text-slate-950 font-semibold text-[13px] font-bn mt-1">জালিয়াতি প্রতিরোধে: জালিয়াতি, প্রতারণা বা অন্যান্য অপরাধমূলক কার্যকলাপ প্রতিরোধে আমরা আপনার তথ্য শেয়ার করতে পারি।</p>   
                     </Flex>

                     <div className=' mt-[50px]'>
                        <p className=" text-slate-950 font-semibold text-[20px] font-bn mt-1">৪. তৃতীয় পক্ষের ওয়েবসাইট সম্পর্কে আমাদের অবস্থান কী?</p>
                        <p className=" text-slate-950 font-semibold text-[13px] font-bn mt-1">আমাদের প্লাটফর্মে তৃতীয় পক্ষের ওয়েবসাইটের লিঙ্ক থাকতে পারে। এই ওয়েবসাইটগুলির তাদের নিজস্ব গোপনীয়তা নীতিমালা আছে এবং আমরা সেগুলো নিয়ন্ত্রণ করি না। আপনি যেকোনো </p>
                        <p className=" text-slate-950 font-semibold text-[13px] font-bn mt-1">তৃতীয় ক্ষের ওয়েবসাইটে যাওয়ার আগে তাদের গোপনীয়তা নীতিমালা পর্যালোচনা করার জন্য আপনাকে উৎসাহিত করি।</p>      
                     </div>

                     <div className=' mt-[50px]'>
                        <p className=" text-slate-950 font-semibold text-[20px] font-bn mt-1">৫. আমরা কুকি এবং অন্যান্য ট্র্যাকিং প্রযুক্তি ব্যবহার করি কি?</p>
                        <p className=" text-slate-950 font-semibold text-[13px] font-bn mt-1">হ্যাঁ, আমরা আমাদের প্লাটফর্মে কুকি এবং অন্যান্য ট্র্যাকিং প্রযুক্তি ব্যবহার করি। কুকি ছোট টেক্সট ফাইল যা আপনার ডিভাইসে সংরক্ষণ করা হয় যখন আপনি একটি ওয়েবসাইট ভিজিট করেন। </p>
                        <p className=" text-slate-950 font-semibold text-[13px] font-bn mt-1">কুকি  আমাদেরকে আপনার প্লাটফর্ম কীভাবে ব্যবহার করেন তা বুঝতে সাহায্য করে এবং আপনার অভিজ্ঞতা উন্নত করে।</p> 
                        <p className=" text-slate-950 font-semibold text-[13px] font-bn mt-3">আমরা এছাড়াও ওয়েব বীকন, পিক্সেল ট্যাগ এবং অন্যান্য অনুরূপ প্রযুক্তি ব্যবহার করতে পারি। এই প্রযুক্তিগুলি আমাদেরকে ওয়েবসাইটের ট্রাফিক পরিমাপ করতে এবং আপনার প্লাটফর্ম কীভাবে</p>
                        <p className=" text-slate-950 font-semibold text-[13px] font-bn">ব্যবহার করেন তা আরও ভালোভাবে বুঝতে সাহায্য করে।</p>
                        <p className=" text-slate-950 font-semibold text-[13px] font-bn mt-3">আপনি আপনার ব্রাউজার সেটিংস ব্যবহার করে কুকি বন্ধ করতে বা সীমিত করতে পারেন। তবে, কুকি বন্ধ করলে আমাদের প্লাটফর্মের কিছু বৈশিষ্ট্য যথাযথভাবে কাজ নাও করতে পারে।</p>
                     </div>

                     <div className='mt-[50px]'>
                     <p className=" text-slate-950 font-semibold text-[20px] font-bn mt-1">৬. আমরা কতদিন আপনার তথ্য রাখি?</p>
                     <p className=" text-slate-950 font-semibold text-[13px] font-bn mt-3">আমরা আপনার তথ্য শুধুমাত্র প্রয়োজনীয় সময়ের জন্যই রাখি। আপনার অ্যাকাউন্ট বন্ধ করার পরে আমরা আপনার ব্যক্তিগত তথ্য মুছে ফেলব। তবে, আমরা জালিয়াতি প্রতিরোধ, বিবাদ সমাধান</p>
                     <p className=" text-slate-950 font-semibold text-[13px] font-bn">এবং আইনগত বাধ্যবাধকতার জন্য প্রয়োজনীয় হলে আপনার কিছু তথ্য সংরক্ষণ করতে পারি।</p>

                     </div>

                     <div className='mt-[50px]'>
                     <p className=" text-slate-950 font-semibold text-[20px] font-bn mt-1">৭. আমরা কীভাবে আপনার তথ্য নিরাপদ রাখি?</p>
                     <p className=" text-slate-950 font-semibold text-[13px] font-bn mt-3">আমরা আপনার তথ্য রক্ষা করার জন্য প্রযুক্তিগত এবং সাংগঠনিক ব্যবস্থা গ্রহণ করেছি। আমরা এনক্রিপশন, ফায়ারওয়াল এবং অ্যাক্সেস নিয়ন্ত্রণ ব্যবহার করে আপনার তথ্য রক্ষা করি। তবে, </p>

                     <p className=" text-slate-950 font-semibold text-[13px] font-bn">কোনো ইন্টারনেট ট্রান্সমিশন ১০০% নিরাপদ নয় এজন্য আমরা আপনার তথ্যের নিরাপত্তা ১০০ ভাগ নিশ্চিত করতে পারি না। </p>

                     </div>

                     <div className='mt-[50px]'>
                     <p className=" text-slate-950 font-semibold text-[20px] font-bn mt-1">৮. আমরা কি অল্পবয়সীদের কাছ থেকে তথ্য সংগ্রহ করি?</p>
                     <p className=" text-slate-950 font-semibold text-[13px] font-bn mt-3">আমরা ১৮ বছরের কম বয়সীদের কাছ থেকে ইচ্ছাকৃতভাবে তথ্য সংগ্রহ করি না। যদি আমরা জানতে পারি যে আমরা কোনো অল্পবয়সী ব্যক্তির কাছ থেকে তথ্য সংগ্রহ করেছি, তাহলে আমরা</p>

                     <p className=" text-slate-950 font-semibold text-[13px] font-bn">অবিলম্বে সেই তথ্য মুছে ফেলব। </p>

                     </div>
                 </div>

                 <div className=" mt-[50px]" >
                    <p className=" text-[20px] text-slate-950 font-rb font-semibold">৯. আপনার গোপনীয়তার অধিকার কী কী?</p>
                    <p className=" text-[13px] text-slate-950 font-rb font-semibold">আপনার নিম্নলিখিত গোপনীয়তার অধিকার রয়েছে:</p>

                    <Flex className={"gap-x-2 items-center mt-2"}>
                         <FaSquareFull className=" text-[8px] text-[#111827]" />
                         <p className=" text-slate-950 font-semibold text-[13px] font-bn mt-1">অ্যাক্সেস অধিকার: আপনি আমাদের কাছ থেকে আপনার কোন তথ্য সংগ্রহ এবং সংরক্ষণ করা হয়েছে তা জানতে এবং সে তথ্য দেখতে, অনুলিপি করতে, ডাউনলোড করতে পারেন।</p>   
                     </Flex>

                     <Flex className={"gap-x-2 items-center mt-2"}>
                         <FaSquareFull className=" text-[8px] text-[#111827]" />
                         <p className=" text-slate-950 font-semibold text-[13px] font-bn mt-1">সংশোধন অধিকার: আপনি আপনার যেকোনো ভুল তথ্য সংশোধন করার অনুরোধ করতে পারেন।</p>   
                     </Flex>

                      <Flex className={"gap-x-2 items-center mt-2"}>
                         <FaSquareFull className=" text-[8px] text-[#111827]" />
                         <p className=" text-slate-950 font-semibold text-[13px] font-bn mt-1">মুছে ফেলার অধিকার: নির্দিষ্ট পরিস্থিতিতে, আপনি আপনার তথ্য মুছে ফেলার অনুরোধ করতে পারেন।</p>   
                     </Flex>

                     <Flex className={"gap-x-2 items-center mt-2"}>
                         <FaSquareFull className=" text-[8px] text-[#111827]" />
                         <p className=" text-slate-950 font-semibold text-[13px] font-bn mt-1">আপত্তি জানানোর অধিকার: আপনি আপনার তথ্যের নির্দিষ্ট পক্রিয়াকরণের বিরুদ্ধে আপত্তি জানাতে পারেন।</p>   
                     </Flex>

                      <Flex className={"gap-x-2 items-center mt-2"}>
                         <FaSquareFull className=" text-[8px] text-[#111827]" />
                         <p className=" text-slate-950 font-semibold text-[13px] font-bn mt-1">স্থানান্তর অধিকার: আপনি আপনার তথ্য একটি পোর্টেবল ফর্ম্যাটে পেতে পারেন এবং অন্য সংস্থায় স্থানান্তর করতে পারেন।</p>   
                     </Flex>

                     <p className=" text-slate-950 font-semibold text-[13px] font-bn mt-3">আপনি এই অধিকারগুলি কার্যকর করতে চাইলে, দয়া করে আমাদের সাথে যোগাযোগ করুন <span className=" text-sky-500">[যোগাযোগ করুন]।</span> </p>

                    <div className=" mt-[50px]">
                      <p className=" text-slate-950 font-semibold text-[20px] font-bn mt-1">১০. ডু-নট-ট্র্যাক বৈশিষ্ট্য নিয়ন্ত্রণ:</p>

                      <p className=" text-slate-950 font-semibold text-[13px] font-bn mt-3">বর্তমানে আমরা ব্রাউজারের "ডু-নট-ট্র্যাক" সিগন্যালগুলিকে সমর্থন করি না। তবে, আপনি আপনার ব্রাউজার সেটিংস ব্যবহার করে কুকি বন্ধ করতে বা সীমিত করতে পারেন।</p>  
                    </div> 

                    <div className=" mt-[50px]">
                      <p className=" text-slate-950 font-semibold text-[20px] font-bn mt-1">১১.এই নোটিশে কি আমরা আপডেট করি?</p>

                      <p className=" text-slate-950 font-semibold text-[13px] font-bn mt-3">আমরা সময় সময় এই গোপনীয়তা নীতি আপডেট করতে পারি। নীতির যেকোনো পরিবর্তন আমাদের ওয়েবসাইটে পোস্ট করা হবে। আপনি নিয়মিতভাবে এই নীতি পর্যালোচনা করার জন্য উৎসাহিত।</p>  
                    </div>

                    <div className=" mt-[50px]">
                      <p className=" text-slate-950 font-semibold text-[20px] font-bn mt-1">১২. এই নোটিশ সম্পর্কে আপনি আমাদের সাথে কীভাবে যোগাযোগ করতে পারেন?</p>

                      <p className=" text-slate-950 font-semibold text-[13px] font-bn mt-3">যদি আপনার এই গোপনীয়তা নীতি সম্পর্কে কোনো প্রশ্ন থাকে, দয়া করে আমাদের সাথে যোগাযোগ করুন</p>  
                    </div>

                     <div className=" mt-[50px]">
                      <p className=" text-slate-950 font-semibold text-[20px] font-bn mt-1">১৩. আমরা আপনার কাছ থেকে সংগ্রহ করা তথ্য কীভাবে পর্যালোচনা, আপডেট বা মুছে ফেলবেন?</p>

                      <p className=" text-slate-950 font-semibold text-[13px] font-bn mt-3">আপনি আপনার অ্যাকাউন্ট সেটিংসে গিয়ে আপনার কিছু তথ্য আপডেট করতে পারেন। অন্যান্য তথ্য আপডেট বা মুছে ফেলার জন্য, দয়া করে আমাদের সাথে যোগাযোগ করুন।</p>

                       <p className=" text-slate-950 font-semibold text-[13px] font-bn mt-3">আমরা আপনার অনুরোধ যত তাড়াতা সম্ভব প্রক্রিয়াজাত করবো। তবে, কখনও কখনও, আইনগত বাধ্যবাধকতা বা অন্যান্য বৈধ কারণে আপনার কিছু তথ্য আমরা রেখে দিতে পারি।</p>

                       <p className=" text-slate-950 font-semibold text-[13px] font-bn mt-6">আশা করি, এই গোপনীয়তা নীতি আপনাকে আমরা আপনার তথ্য কীভাবে ব্যবহার করি তা বুঝতে সাহায্য করবে। আপনার গোপনীয়তা রক্ষা করতে আমরা দৃঢ়প্রতিজ্ঞ।</p> 

                       <p className=" text-slate-950 font-semibold text-[13px] font-bn mt-3">ধন্যবাদ!</p>  
                    </div>           
                 </div>
             </div>
         </Container>
    </div>
  )
}

export default privacy