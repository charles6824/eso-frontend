
import image from "../assests/images/vc4.png"
import { IoLocationOutline } from "react-icons/io5";

const EsoCard = () => {
  return (
    <div className='w-full px-3 py-8 rounded-[10px]  shadow-md border border-[#e9e5e5]'>
        <img src={image} alt="logo" style={{width:'100%'}} />
        <p className="text-center font-[400]">Bridge-Tailor Consulting</p>
        <div className="flex items-center mt-3">
        <IoLocationOutline className="mr-2" /> 
        <p className="text-[13px] ">Netherlands- Amsterdam</p>
        </div>
    </div>
  )
}

export default EsoCard
