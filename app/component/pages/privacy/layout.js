import React from 'react'
import Navbar from '../../maincomponent/Navbar'
import Footer from '../../maincomponent/Footer'

const layout = ({children}) => {
  return (
    <div>
        <Navbar/>
        {children}
        <Footer/>
    </div>
  )
}

export default layout