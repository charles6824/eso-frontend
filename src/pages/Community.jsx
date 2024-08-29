
import { RiCheckboxBlankLine } from "react-icons/ri";
import { categories } from "../utils/Categories";
import CategoryCard from "../components/CommunityCard";
import { enterprises } from "../utils/Enterprise";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6"
import { useState } from "react";


const Community = () => {
  const [showSubCategory,setShowCategory] =useState(null);
  const handleShow=(index) =>{
    if(showSubCategory === index){
      setShowCategory(null)
    }else{
      setShowCategory(index)
    }

  }
  return (
    <section className=" container m-auto font-[inter] p-4 ">
        <div className="flex  lg:gap-[20px] px-[15px]">
            <div className="hidden lg:block w-[281px] h-[1168px] rounded-[15px] bg-[#ADDF881A]">
              
              {/* side bar contents */}
                 <div className="ml-[20px] mt-[15px]">
                 {categories && categories.map((category,index) =>(
                   <div>
                  
                    <div>
                      <div className="flex justify-between items-center   " onClick={() =>handleShow(index)}>
                          <p className="text-[#316541]">{category.name} </p>
                         {showSubCategory === index? <FaAngleUp className="mr-7"  /> : <FaAngleDown className="mr-7" /> }
                      
                           </div>
                       
                          { showSubCategory === index && category.subcat.map((sub,i) =>(
                            <div key={i} className="mt-[15px] space-y-2 border-b-2 border-[#316541]">
                                <div className="flex items-center space-x-2">
                                <RiCheckboxBlankLine />
                                <p>{sub.rate}</p>
                                <p>{sub.location}</p>
                                
                                </div>
                                <div className="flex items-center space-x-2">
                               <RiCheckboxBlankLine />
                               <p>{sub.type}</p>
                               <p>{sub.area}</p>
                                </div>
                                
                                <div className="flex items-center space-x-2">
                              <RiCheckboxBlankLine />
                             <p>{sub.state}</p>
                               <p>{sub.place}</p>
                               </div>
                                
                            </div>
                          ))}
                          </div>
                      
                   </div>
                 ))}

                 </div>  
            </div>

            <div className=" w-full lg:w-[945px] lg:h-[3856px]  ">
              <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-[25px]">
                {enterprises && enterprises.map((data,index) =>(
                  <CategoryCard key={index} />
                ))}

              </div>

               
            </div>
          

        </div>

      
    </section>
  )
}

export default Community
