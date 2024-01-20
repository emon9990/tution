import Container from "@/app/layouts/Container"
import Image from "next/image"
import barnerTwo from '../public/barnerTwo.png'

const BarnerTwo = () => {
  return (

        <>
          
          <Container>
               <div>
                  <Image src={barnerTwo} width={"full"} height={"full"} />
               </div>

               
          </Container>
        
        </>
    
  )
}

export default BarnerTwo