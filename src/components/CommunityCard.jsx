import vc4 from "../assests/images/vc4.png"
import frame from "../assests/images/Frame 172.png"
import { IoLocationOutline } from "react-icons/io5";

const CategoryCard = () => {
  return (
    <div className='lg:w-[300px]  lg:h-[465px] rounded-[10px] border border-[#316541]  '>
             <div className="p-3  justify-center bg-[#ADDF881A] ">

            <img src={vc4} alt="" className='lg:w-[200px] m-auto' /> 

            <div className="flex items-center justify-evenly  ">
                <p className="lg:text-[16px] text-[20px]">Bridge-Tailor Consulting</p>
                <img src={frame} alt="" className="text-[#316541]" />
            </div>
             </div>


            <div className="flex space-x-3 px-3  mb-[5px] bg-[#ADDF881A]">
            <IoLocationOutline  className="text-[20px]"/>
                <p className="lg:text-[12px] text-[16px]  pb-7">Netherlands - Amsterdam - Nieuwezijds Voorburgwal</p>
            </div>

            <div className="w-full p-[13px] ">
                <p className="lg:text-[13px] text-[15px] leading-[15px] font-[400]">VC4A was founded in 2007 with the mission to build up Africa’s start-up community. We have grown organically over the years into what is now the leading community working towards building high-growth, high-impact companies globally with the ambition to transform society.</p>
                  <div className=" space-x-3 mt-[30px]">

                  <button className=" text-[#316541] bg-[#ADDF881A]  py-[5px] px-[9px] rounded-[4px] text-[10px] border border-[#316541] ">Sector Association</button>
                  <button className=" text-[#316541] bg-[#ADDF881A] py-[5px] px-[9px] rounded-[4px] text-[10px] border border-[#316541]">Sector Agnostic</button>
                  </div>
                   
                   <button className=" bg-[#316541] rounded-[5px] text-[#FFFFFF] py-3 px-4 md:py-[12px]  md:px-[32px] text-[16px] float-right md:mt-7 mt-5 mb-5">VIEW DETAILS</button>
                  
            </div>

        </div>

      
    
  )
}

export default CategoryCard
