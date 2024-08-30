

const Card = ({data}) => {
  return (
        <div className=" relative w-full  ">
        <img src={data.image} alt=""  className="w-full lg:h-full h-[400px]  rounded-[10px]  object-cover" />

        <div className=" w-[90%] md:w-[80%] m-auto  p-5 lg:p-2  rounded-[10px]  absolute top-[280px] bg-[#F1FAEA] ml-[10px]  ">
          <p className="ml-[40px]   text-[17px] font-[500] text-[#316541]">{data.name}</p>
          <p className="ml-[30px] text-[13px] font-[500]">{data.role}</p>

        </div>
        </div>
      
    
  )
}

export default Card
