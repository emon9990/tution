import React from 'react'
import Navbar from '../../maincomponent/Navbar'
import Footer from '../../maincomponent/Footer'

const layout = ({children}) => {
  return (
    <div>
        <Navbar />
        {children}
        <Footer className={"mt-[210px] md:mt-[140px]"} />
    </div> 
  )
}

export default layout