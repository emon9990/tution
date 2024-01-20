import Navbar from "./component/maincomponent/Navbar"
import RegistereSlider from "./component/maincomponent/RegistereSlider"
import Saidbarbarner from "./component/maincomponent/Saidbarbarner"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Tutionpost from "./component/maincomponent/Tutionpost";
import Bokk from "./component/maincomponent/Bokk";
import Studentsuccess from "./component/maincomponent/Studentsuccess";
import BarnerTwo from "./component/maincomponent/BarnerTwo";
import Accoridons from "./component/maincomponent/Accoridons";
import ContactBarner from "./component/maincomponent/ContactBarner";
import Footer from "./component/maincomponent/Footer";
import TeacherSlider from "./component/maincomponent/TeacherSlider";



const page = () => {
  return (
    <div>
       <Navbar/>
       <Saidbarbarner/>
       <RegistereSlider />
       <Tutionpost/>
       <Bokk/>
       <Studentsuccess />
       <BarnerTwo/>
      <TeacherSlider/>
       <Accoridons/>
       <ContactBarner/>
       <Footer />
    </div>
  )
}

export default page