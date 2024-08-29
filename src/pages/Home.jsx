import React from 'react'
import { Link } from 'react-router-dom'
import arrow from '../assests/images/arrow_3.png'
import hero from '../assests/images/hero.png'
import eventlogo from "../assests/images/event.png"
import program from "../assests/images/program.png"
import { FaArrowRightLong } from "react-icons/fa6";
import Events from "../components/Events"
import { buttons } from '../utils/Buttons'
import Button from '../components/Button'
import cardIcon from "../assests/images/card3Icon.png"
import EsoCard from '../components/EsoCard'
import { Esos } from '../utils/ESos'
import ArticleCard from '../components/ArticleCard'
import { articles } from '../utils/Articles'
import GalleryCard from '../components/GalleryCard'
import { photos } from '../components/Gallery'
import sponsors from "../assests/images/sponsors.png"


const Home = () => {
  return (
    <>
      <div className="header">
        <div className=" mx-auto flex flex-col lg:flex-row  justify-between py-8 md:py-5 ">
          <div className="text-header w-[356px] md:pt-[120px] md:w-[100%] m-auto text-center lg:w-[45%] md:pl-10 lg:pl-12 text-textWhite  md:text-start">
            <img src={arrow} alt=" " className="mb-4"  />
            <h1 className="uppercase lg:text-[36px] text-[28px] font-bold text-white  lg:w-[100%] mb-3 md:leading-8">
              WELCOME TO the
              <br />
              <span className="text-primaryColor ">
                Enterprise Support Organisations (ESO) <br /> Programme
              </span>{" "}
              Sharing <br /> Platform
            </h1>
            <p className="leading-5 md:w-[450px] lg:w-[100%]">
              We are a collective of business professionals that bring values to
              your company with global scales experiences. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam
            </p>
            <div className="button mt-5">
              <button className="uppercase text-[#316541] bg-white font-bold py-[13px] px-[50px] md:py-3 md:px-10 rounded-md mb-[20px] md:mb-0 mr-2">
                
                get started →
                {/* get started <img src={outline} alt="" srcset="" /> */}
              </button>
              <button className="uppercase text-[#ffffff]  font-bold py-3 px-10 rounded-md border-2 border-white bg-transparent">
                find programmes
              </button>
            </div>
          </div>
          <div className="img-header  lg:w-[50%]  w-[100%] mx-8 mx:px-0">
            <img src={hero} alt="" srcset="" style={{ width: "100%" }} />
          </div>
        </div>
         
         <div className='w-full  lg:h-[145px] bg-[#ADDF88] rounded-md '>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-7 py-4 lg:py-0  px-20 '>
            <div className='  border-[#FFFFFF] lg:mt-8  border-r '>
              <p className='text-[24px] font-[600] mb-[12px]'>10,000+</p>
              <p className='lg:text-[14px] text-[10px] font-[500] leading-[16px]'>Enterprise Support Organizations</p>
            </div>
            <div className=' border-[#FFFFFF] lg:mt-8 md:border-r'>
              <p className='text-[24px] font-[600] mb-[12px]'>2,000+</p>
              <p className='lg:text-[14px] text-[10px] font-[500] leading-[16px]'>Business Organizations</p>
            </div>
            <div className=' border-[#FFFFFF] lg:mt-8 border-r'>
              <p className='text-[24px] font-[600] mb-[12px]'>1,000,000+</p>
              <p className='lg:text-[14px] text-[10px] font-[500] leading-[16px]'>Events and Programmes</p>
            </div>
            <div className=' lg:mt-8'>
              <p className='text-[24px] font-[600] mb-[12px] '>100+</p>
              <p className='lg:text-[14px] text-[10px] font-[500] leading-[16px]'>Countries</p>
            </div>
          </div>
         </div>
      </div>


      <div className='m-auto px-8'>
        <div className=' w-full  lg:p-[100px] pt-7 md:px-5  '>
          <p className='text-[13px] px-5 lg:px-0'>Expert Solutions for Your Success</p>
          <h2 className='text-[32px] font-[600] text-[#316541] mb-[50px] px-5 lg:px-0'>What We Provide</h2>
          <div className='flex lg:flex-row flex-col justify-center gap-5 lg:gap-[65px] px-5 md:px-0'>
          <div className='lg:w-[370px] bg-[#ADDF8840] rounded-[10px] shadow-sm p-7 '>
            <img src={eventlogo} alt="" />
            <p className='mt-[24px]'>Detailed Information</p>
            <p className='font-[400]'>We provide extensive information about each (ESOs) and its programmes, for you to make informed decisions</p>
          </div>
          <div className='lg:w-[370px] bg-[#ADDF8840] rounded-md shadow-sm p-6 '>
            <img src={program} alt="" />
            <p className='mt-[24px]'>Reliable Programmes</p>
            <p className='font-[400]'>All Enterprise support organizations (ESOs)and their programmes on this platform have been carefully verified</p>
          </div>
          <div className='lg:w-[370px] bg-[#ADDF8840] rounded-md shadow-sm p-6 '>
            <img src={cardIcon} alt="materialIcon" />
            <p className='mt-[24px]'>Upcoming Programmes</p>
            <p className='font-[400px]'>Use our advanced search feature to find upcoming entrepreneurship events and programmes and sign-up for updates.</p>
          </div>
          </div>

          <div className='mt-[100px]  '>
              <p className='text-[#181818] text-[13px] font-[500] '>Expert Solutions for Your Success</p>
              <div className='flex justify-between'>
                <h1 className='text-[#316541] text-[32px] font-[600] '>Upcoming Programmes</h1>
                <p className='hidden lg:flex items-center font-[500] text-[#316541]'>
                  Explore All
                  <FaArrowRightLong className=' ml-4 text-[#316541]' />
                </p>
              </div>
           </div>
        <Events/>
           
          
        </div>
        <div className='w-full lg:px-[100px] py-10 lg:py-0 '>
           <div className='flex justify-center  '>
                <Link to='#' className='py-[12px] px-[32px]  border border-[#316541] rounded-[5px] text-[20px]  font-[600]'>
                FIND MORE PROGRAMMES
                </Link>
           </div>
          <div className='mt-[100px]  '>
              <p className='text-[#181818]   text-[13px] font-[500]'>Expert Solutions for Your Success</p>
              <div className='flex justify-between'>
                <h1 className='text-[#316541]   text-[32px] font-[600]'>Upcoming Events</h1>
                <p className='hidden lg:flex  items-center font-[500] text-[#316541]'>
                  Explore All
                  <FaArrowRightLong className='ml-4 text-[#316541]' />
                </p>
              </div>
              <Events/>
           </div>
         </div>

        <div className='flex justify-center lg:mt-[60px]'>
                <Link to='#' className='py-[12px] px-[32px]  border border-[#316541] rounded-[5px] text-[20px]  font-[600]'>
                FIND MORE EVENTS
            </Link>
           </div>


           <div className=' mx-auto bg-[#ADDF881A] lg:h-[317px] mt-[60px]  rounded-[10px] lg:w-[80%] mb-[100px] '>
            <div className='p-7'>
              <h1 className='text-[32px] font-[600] text-[#316541] mb-3'>Let's Personalize it</h1>
              <p className='text-[12px] font-[500] mb-5'>Tell us what you're into and we'll suggest more</p>
              <div className='grid grid-cols-3 lg:grid-cols-8 gap-3 lg:gap-6 mb-7'>
                {buttons && buttons.map((btn,index)=>(
                  <Button btn={btn} />
                ))}
              </div>
            <Link to='#' className=' bg-[#FFFFFF] py-[10px] px-[30px]  font-[600] text-[16px] rounded-[5px]  border border-[#316541] '>
                SUBMIT
              </Link>
            </div>
           </div>
                  
           <div className='grid lg:grid-cols-12 grid-cols-4 lg:space-x-18 space-x-4 mb-8 lg:px-[48px] mt-[115px]  '>
                <div className='lg:col-span-4 col-span-2 border-e border-[#316541] border-r-4 lg:px-10 '>
                  <p className='lg:text-[26px] text-[22px] text-[#316541] font-[600] ml-6 '>Featured Enterprise Support Organizations (ESOs)</p>
                </div>
                <div className='lg:col-span-8 col-span-2 px-3'>
                   <p className='lg:text-[14px] text-[11px] lg:w-[662px] text-[#181818] '>Meet our curated group of trusted partners dedicated to empowering businesses like yours. These exceptional organizations offer a wide range of expertise, from strategic consulting to technical implementation, to help you achieve your goals. With their extensive experience and proven track record,  </p>
                </div>
                </div>


               <div className=' m-auto lg:px-24'>
               <div className='grid grid-cols-2 lg:grid-cols-5  px-4 gap-5 '>
                  {Esos && Esos.map((e,index) =>(
                    <EsoCard key={index} eso={e} />
                  ))}

                </div>
                </div>
                <div className='flex justify-center mt-[60px]'>
                <Link to='#' className='py-[12px] px-[32px]  border border-[#316541] rounded-[5px] text-[20px]  font-[600]'>
                VIEW ALL
            </Link>
           </div>
           <div className='grid lg:grid-cols-12 grid-cols-4 lg:space-x-20 space-x-4 mb-8 lg:px-[48px]  mt-[115px]  '>
                <div className='lg:col-span-4 col-span-2 border-e border-[#316541] border-r-4 lg:px-10 '>
                  <p className='text-[30px] text-[#316541] font-[600] ml-6 '>Featured Articles</p>
                </div>
                <div className='lg:col-span-8 col-span-2 px-3 lg:px-0 '>
                   <p className='lg:text-[14px] text-[12px] lg:w-[662px] text-[#181818] '>Our featured articles showcase the expertise and perspectives of our team, providing timely and informative content to help you stay ahead of the curve. Explore our curated collection of stories, analysis, and commentary to gain a deeper understanding of the topics that matter most.</p>
                </div>
              </div>
             
            <div className=' mx-auto py-[90px]  lg:px-20'>
              <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 lg:gap-6 md:gap-15 gap-36'>
                {articles && articles.map((a,i) =>(
                  <ArticleCard key={i}/>
                ))}

              </div>
            </div>
             
            <div className='flex justify-center mt-[50px]'>
                <Link to='#' className='py-[12px] px-[32px]  border border-[#316541] rounded-[5px] text-[20px]  font-[600]'>
                FIND MORE ARTICLES
            </Link>
           </div>
                </div>
                
                <div className='m-auto  bg-[#ADDF881A] mt-20 py-5 rounded-[20px] w-[90%] lg:w-[80%] px-10 lg:px-20   '>
                  
                    <h1 className='lg:text-[32px] text-[24px] text-[#316541] font-[600] '>Our Creative Archive</h1>
                    <p className='text-[13px] ml-2 mb-[30px] font-[400] '>A collection of Creative Excellence</p>



                    <div className=' grid md:grid-cols-2 lg:grid-cols-4 gap-4 '>
                      {photos.map((photo,index)=>(
                        <GalleryCard key={index} photo={photo}/>
                      ))}

                    </div>
                  </div>
                    

                <div  className='w-full m-auto lg:mt-[130px] mt-[50px] lg:px-20'>
                    <p className='px-[32px]'>Expert Solutions for Your Success</p>
                    <h1 className='px-[32px] lg:text-[32px] text-[24px] text-[#316541] font-[600]'>Our Partners</h1>
                    <div className='lg:px-5 px-8 mt-[30px] lg:mt-0'> 
                      <img src={sponsors} alt="" style={{width:'100%'}} />
                    </div>
                </div>
      

      
    </>
  )
}

export default Home
