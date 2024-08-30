import banner from "../assests/images/eventbanner.png"
import { MdCalendarMonth } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import stars from "../assests/images/5tar.png"

const EventsCard = () => {
  return (
    <div className='w-full  shadow-md  rounded-md px-5 md:px-0 '>
        <img src={banner} alt="banner" className="md:w-[370px] w-full object-cover rounded-t-md" />
        <div className="bg-[#ADDF881A] p-4 ">
            <div className="flex items-center  justify-between relative">
                <p className="text-[16px] font-[500] w-[198px]">Enterprise Africa Network Inaugural Cohort Fellowship  Programme</p>
                <button className="text-[#3CC13B] rounded-[4px] border-[#3CC13B] py-1 px-2 border absolute top-[-4px] left-[215px] lg:left-[230px] text-[13px] font-[500]">on-going</button>
                <img src={stars} alt="stars" className="mt-10 w-[34%] ml-3" />
            </div>
            <div className="mb-2 mt-2">

                <p className="text-[12px] text-[#316541]">MSME Africa</p>
            </div>

            <div className="flex justify-between mb-4  ">
                <p className="text-[14px]">Started on: July 8, 2024</p>
                <p className="text-[16px] font-[700] text-[#316541]">FREE</p>
            </div>
            <div className="flex space-x-1 items-center ">
                <div className="flex items-center border rounded-[4px] py-[4px] px-[8px]">
                    <MdCalendarMonth className="text-[#316541]" />
                    <p className="text-[10px]">months</p>
                </div>
              
                <div className="flex items-center space-x-1 border py-[4px] px-[8px] rounded-[4px] outline-none">
                <FaUserCircle className="text-[#316541]" />
                <p className="text-[10px] text-[#316541]">In-Person and Virtual</p>

                </div>

            </div>
            
        </div>
            <div className="flex items-center justify-between p-3">
                <p className="text-[#316541] text-[12px]">Deadline: July 26, 2024</p>
                <button className="py-[10px] px-[32px] text-[13px] bg-[#316541] text-[#FFFFFF] rounded-[5px]">VIEW DETAILS</button>
            </div>
      
    </div>
  )
}

export default EventsCard

