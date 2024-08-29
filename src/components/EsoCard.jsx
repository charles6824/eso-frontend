
import image from "../assests/images/vc4.png"
import { IoLocationOutline } from "react-icons/io5";

const EsoCard = () => {
  return (
    <div className='lg:w-[219px] p-5 rounded-[10px] lg:h-[197px] shadow-md border border-[#e9e5e5]'>
        <img src={image} alt="logo" />
        <p>Bridge-Tailor Consulting</p>
        <div className="flex items-center mt-3">
        <IoLocationOutline className="mr-2" /> 
        <p className="text-[12px]">Netherlands- Amsterdam</p>
        </div>
       
      
    </div>
  )
}

export default EsoCard
