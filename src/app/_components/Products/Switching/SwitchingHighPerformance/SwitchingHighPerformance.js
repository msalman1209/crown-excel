import React from 'react'
import HighPerformanceImage from '../../../../../Components/Images/switchinghighperformance.png'
import Comma from '../../../../../Components/Images/comma.png'
import Image from 'next/image'
const SwitchingHighPerformance = () => {
  return (
      <div className='flex md:flex-row lg:flex-row flex-col items-center  w-full h-auto px-5 mt-40 md:mt-20'>
        <div className="highperformance-left basis-[65%]">
          <Image alt='' src={HighPerformanceImage} width={727} height={416}/>
        </div>
        <div className="highperformance-right basis-[40%] flex flex-col lg:mt-o mt-5">
          <h1 className='text-[30px] md:leading-[32px] leading-[30px] lg:text-[44px] font-[700] font-montserrat lg:leading-[52px] text-black'>HIGH-PERFORMANCE SWITCHES FOR CREATIVE PROFESSIONALS</h1>
          <Image className='mt-7 mb-7' alt='' src={Comma} width={150} height={75}/>
          <p className='text-[16px] leading-[27px] text-[#687799] font-montserrat '>Our high-performance network switches are tailored for creative professionals who demand reliable and fast connectivity.</p>
        </div>
      </div>
    )
}

export default SwitchingHighPerformance
