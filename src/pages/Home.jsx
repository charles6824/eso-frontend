import React from 'react'
import arrow from '../assests/images/arrow_3.png'
import hero from '../assests/images/hero.png'

const Home = () => {
  return (
    <>
      <div className="header">
        <div className="container mx-auto flex flex-col md:flex-row lg:flex-row justify-between py-5 ">
          <div className="text-header pt-[120px] md:w-[45%] lg:w-[45%] md:pl-10 lg:pl-12 text-textWhite">
            <img src={arrow} alt=" " className="mb-4" />
            <h1 className="uppercase text-[36px] font-bold text-white md:w-[60%] lg:w-[100%] mb-3 leading-8">
              WELCOME TO the
              <br />
              <span className="text-primaryColor ">
                Enterprise Support Organisations (ESO) <br /> Programme
              </span>{" "}
              Sharing <br /> Platform
            </h1>
            <p className="leading-5">
              We are a collective of business professionals that bring values to
              your company with global scales experiences. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam
            </p>
            <div className="button mt-5">
              <button className="uppercase text-[#316541] bg-white font-bold py-3 px-10 rounded-md mr-2">
                {" "}
                get started →
                {/* get started <img src={outline} alt="" srcset="" /> */}
              </button>
              <button className="uppercase text-[#ffffff]  font-bold py-3 px-10 rounded-md border-2 border-white bg-transparent">
                find programmes
              </button>
            </div>
          </div>
          <div className="img-header md:w-[50%] lg:w-[50%]">
            <img src={hero} alt="" srcset="" style={{ width: "100%" }} />
          </div>
        </div>
        
      </div>

      
    </>
  )
}

export default Home
