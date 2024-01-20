import Link from 'next/link'
import React from 'react'

const Liitem = ({linkname,className,aclassName,href}) => {
  return (
    <li className={className}><Link href={href} className={`cursor-pointer ${aclassName}`} >{linkname}</Link></li>
  )
}

export default Liitem