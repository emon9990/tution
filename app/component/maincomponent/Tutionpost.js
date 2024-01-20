import Post from '@/app/layouts/Post'
import React from 'react'

const Tutionpost = () => {
  return (
    <div>
        <Post/>
        <div className=' flex justify-center'>
             <button className='mt-10 bg-[#E11D48] px-[60px] py-4 rounded-md text-[#F2F2F2] font-lg font-bold text-[19px]'>See All Post</button>
        </div>
    </div>
  )
}

export default Tutionpost