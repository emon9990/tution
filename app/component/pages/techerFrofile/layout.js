import Footer from "../../maincomponent/Footer"
import Navbar from "../../maincomponent/Navbar"


const layout = ({children}) => {
  return (
    <div className="bg-[#F6F6F8] w-full">
        <Navbar/>
        {children}
        <Footer/>
    </div>
  )
}

export default layout