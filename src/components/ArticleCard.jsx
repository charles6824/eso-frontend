import image from "../assests/images/farmer.png"
import { Link } from "react-router-dom"

const ArticleCard = () => {
  return (
    <div className=' h-[383px] rounded-[10px] bg-[#ADDF8840]  relative lg:px-8'>
        

        <img src={image} alt="" className="absolute top-[-100px] left-[30px] w-[80%]" />

        <div className="absolute top-[137px] px-11">
            <h2 className="text-[#316541] text-[16px] mb-4 font-[500] text-center" >How to make money from Agronomy</h2>
            <p className="text-[12px] text-[#316541] text-center">Capitalise on the precision farming revolution by offering services like soil testing, crop monitoring, and precision irrigation management. Learn how to invest in the right technology and market your services to farmers</p>
                <div className="mt-[30px] text-center">

              <Link to='#' className="bg-[#316541] py-[12px] px-[32px] m-auto justify-center text-[#FFFFFF] rounded-[5px] mt-5">
            READ MORE
              </Link>
                </div>
        </div>
        
        
    </div>
  )
}

export default ArticleCard
