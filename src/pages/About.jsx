import React from 'react'
import { teamDatas } from '../utils/TeamDatas'
import Card from '../components/Card'
import sponsors from '../assests/images/sponsors.png'
import AboutBg from "../assests/images/aboutBg.jpeg" 

const About = () => {
  return (
    <section>
           <div className='w-full lg:h-[348px] md:h-[200px] bg-cover bg-center  ' style={{background: `linear-gradient(rgba(49, 101, 65, 0.8), rgba(49, 101, 65, 0.8)),url(${AboutBg})`, backgroundSize: "cover", backgroundPosition: "top center"}}>
            <div className='flex flex-col justify-between items-center py-12  lg:py-[133px]'>
            <h1 className='text-[#FFFFFF] lg:text-[40px] font-[700] mb-[12px] '>ABOUT US</h1>
            <p className='text-[14px] text-[#FFFFFF] font-[400] leading-3'>Learn more about our team and culture</p>
            </div>
           </div>


         <div className=' bg-[#ADDF881A] w-full  lg:p-[100px]  px-20  '>
            <div className='justify-start px-20' >
                <p className='text-[17px]  leading-[35px] font-[500] mb-4 '>
                The Enterprise Support Organisation (ESO) program sharing and rating platform is a community resource developed by the Enterprise Support Organisation Collaborative which brings together the Ghana Enterprises Agency (GEA),National Entrepreneurship & Innovation Programme (NEIP),Ghana Hubs Network, Impact Investing Ghana, Mirepa Capital,InnoHub Foundation,Social Enterprise Ghana,MBC Africa,Reach for Change,ScaleUp Africa, and Center for Entrepreneurship & Evaluation Development.The platform is managed by Impact Investing Ghana and was built with funding from the Research and Innovation Systems in Africa (RISA) program of UK AID. This platform provides a national database of all enterprise support programs in Ghana for entrepreneurs, startups and businesses to easily access so they can make informed decisions on what programs to participate in. The platform also enables registered ESOs to improve the quality of their programmes and track their progress using the SCALE improvement program developed by the Argidius Foundation.The Enterprise Support Organisation (ESO) program sharing and rating platform is a community resource developed by the Enterprise Support Organisation Collaborative which brings together the Ghana Enterprises Agency (GEA),National Entrepreneurship & Innovation Programme (NEIP),Ghana Hubs Network,Impact Investing Ghana,Mirepa Capital,InnoHub Foundation,Social Enterprise Ghana,MBC Africa Reach for Change,ScaleUp Africa, and Center for Entrepreneurship & Evaluation Development.
               The platform is managed by Impact Investing Ghana and was built with funding from the Research and Innovation Systems in Africa (RISA) program of UK AID. This platform provides a national database of all enterprise support programs in Ghana for entrepreneurs, startups and businesses to easily access so they can make informed decisions on what programs to participate in. The platform also enables registered ESOs to improve the quality of their programmes and track their progress using the SCALE ESO improvement program developed by the Argidius Foundation.
                </p>
            </div>
         </div>

            <div className=' w-full  text-[13px] font-[400] mb-[50px] mt-[100px] px-40 '>
                <p className='text-[17px] mb-[11px]  '> Expert Solutions for Your Success</p>
                <p className='text-[#316541] text-[40px]  font-[600]'>Our Team</p>
             <div className='  '>
           <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-[20px] '>
            {teamDatas && teamDatas.map((data,index) =>(
                
                <Card key={index} data={data} />
            ))}
           </div>
           </div>
           </div>
           <div className=' w-[80%] md:w-full m-auto lg:p-[100px]'>
            <img src={sponsors} alt="" />
           </div>
        </section>
  )
}

export default About
