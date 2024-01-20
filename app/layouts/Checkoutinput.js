import React from 'react'

const Checkoutinput = ({label,type,placeholder,className,classNames,value,name,onChange,lableclassname}) => {
  return (
    <div className={className} >
         <label htmlFor="" className={` block font-rb font-semibold text-[#58595BE5] text-[16px] ${lableclassname}`} >{label}</label>
         <input type={type} value={value} name={name} onChange={onChange} placeholder={placeholder} className={` bg-[#51515140] w-[500px] border-black py-3 px-6 mt-[18px] ${classNames}`} />
    </div>
  )
}

export default Checkoutinput