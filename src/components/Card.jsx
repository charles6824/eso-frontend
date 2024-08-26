

const Card = ({data}) => {
  return (
        <div className=" relative ">
        <img src={data.image} alt="" className="w-full p-4 md:p-0 md:w-[292px] rounded-[10px] h-[400px] object-cover" />

        <div className="w-[252px]  h-[67px] rounded-[10px] absolute top-[280px] md:top-[290px] bg-[#F1FAEA] ml-[30px] lg:ml-[10px] p-2">
          <p className="ml-[30px] text-[17px] font-[500] text-[#316541]">{data.name}</p>
          <p className="ml-[30px] text-[13px] font-[500]">{data.role}</p>

        </div>
        </div>
      
    
  )
}

export default Card
