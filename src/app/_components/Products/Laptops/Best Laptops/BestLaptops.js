"use client"
import React from 'react'

const BestLaptops = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className='flex flex-col mt-20'>
      <h1 className='text-center text-[30px] lg:text-[50px] font-[700] text-[#318d74] leading-[35px] lg:leading-[57px] font-montserrat'>BEST LAPTOPS WITH GREAT QUALITY COMPUTERS OF PRESTIGIOUS BRANDS</h1>
      <div className="best-laptops-text relative mt-10 mb-10">
        {/* <div className="box-left hidden lg:block absolute left-0 -top-5 border-l-[0px] border-t-[10px] border-r-[10px] border-b-[10px] border-[#272827]  z-0 w-[300px] h-[120px]"></div> */}
        <div className="text-center flex items-center  justify-center flex-col gap-5">
          <p className='text-black z-10 text-[16px] leading-[27px] text-center font-montserrat'>Our laptops come from esteemed manufacturers with the latest features and technologies to keep you <br /> productive and in touch.</p>
          <button 
            onClick={scrollToTop}
            className='bg-[#0f7459] rounded shadow-lg font-[500] font-montserrat w-[133px] h-[35px] text-[15px] flex items-center justify-center hover:bg-[#0d5c47] transition-colors duration-300 hover:cursor-pointer' 
            style={{ padding: '10px 20px 10px 20px'}}
          >
            Get A Quote
          </button>
        </div>
        {/* <div className="box-left hidden lg:block absolute right-0 -top-5 border-l-[10px] border-t-[10px] border-r-[0px] border-b-[10px] border-[#272827]  z-0 w-[300px] h-[120px]"></div> */}
      </div>
    </div>
  )
}

export default BestLaptops
