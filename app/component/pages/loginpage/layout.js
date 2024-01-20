import React from 'react'
import Navbar from '../../maincomponent/Navbar'

const loginfrom = ({children}) => {
  return (
    <div>
        <Navbar/>
        {children}
    </div>
  )
}

export default loginfrom