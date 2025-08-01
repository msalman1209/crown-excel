import React from 'react'
import ComputingImage from '../../../../../Components/Images/RoutersSeamless.png'
import Image from 'next/image'
const RoutersSeamlessConnectivity = () => {
    return (
            <div className='flex flex-col items-center justify-center w-full h-auto px-1 mt-20'>
                <h1 className='text-[#147d61] text-[20px] md:text-[45px] lg:text-[45px] font-[700] font-monterrat text-center'>THE ULTIMATE SOLUTION FOR <br /> <span className='text-black bg-[#ffd900]' style={{ padding: '5px 15px 5px 15px' }}>SEAMLESS CONNECTIVITY</span></h1>
                <div className="heavycomputing-bottom flex flex-col items-center justify-center w-full h-auto mt-10 md:mt-20 lg:mt-10">
                    <div className="heavycomputing-bottom-divs flex flex-col md:flex-row lg:flex-row items-center justify-between w-full h-auto lg:h-[400px] px-2 lg:px-5 gap-20 lg:gap-50">
                        <div className="left-part text-white rounded-[20px] p-[20px] lg:p-[32px]" style={{ backgroundImage: 'linear-gradient(300deg, #084032 0%, #118264 60%)' }}>
                            <h1 className='text-[24px] lg:text-[28px] font-montserrat font-[600] leading-[25px] lg:leading-[33px]'>Blazing-Fast Wi-Fi Speeds</h1>
                            <p className='mt-4 text-[14px] lg:text-[16px] font-montserrat leading-[27px]'>Enjoy uninterrupted streaming, gaming, and downloads with our advanced routers. Powered by the latest technology, they deliver ultra-fast speeds for a smooth online experience.</p>
                        </div>
                        <div className="right-part -mt-10 text-black bg-[#e9e9e9]  rounded-[20px] p-[20px] lg:p-[32px]" >
                            <h1 className=' text-[24px] lg:text-[28px] font-montserrat font-[600] leading-[25px] lg:leading-[33px]'>Expanded Coverage Without Dead Zones</h1>
                            <p className='mt-4 text-[14px] lg:text-[16px] font-montserrat leading-[27px]'>Say goodbye to connectivity gaps. Our powerful access points extend Wi-Fi coverage to every corner of your home or office, ensuring strong and stable signals wherever you need them.</p>
                        </div>
                    </div>
                    <div className="heavycomputing-bottom-divs my-10 md:my-0 lg:my-0">
                        <Image alt='' src={ComputingImage} width={622} height={448} className='lg:w-[622px] lg:h-[448px] md:w-[500px] md:h-[350px]'/>
                    </div>
                    <div className="heavycomputing-bottom-divs flex flex-col md:flex-row lg:flex-row items-center justify-between w-full h-auto lg:h-[400px] px-2 lg:px-5 gap-20 lg:gap-50 mt-0 md:mt-10 lg:mt-0">
                        <div className="right-part text-black bg-[#e9e9e9]  rounded-[20px] p-[20px] lg:p-[32px]" >
                            <h1 className='text-[24px] lg:text-[28px] font-montserrat font-[600] leading-[25px] lg:leading-[33px]'>Optimized Multi-Device Performance</h1>
                            <p className='mt-4 text-[14px] lg:text-[16px] font-montserrat leading-[27px]'>Designed to handle multiple devices simultaneously, our routers and access points ensure lag-free connections for all your gadgets – perfect for families, businesses, or heavy network usage.</p>
                        </div>
                        <div className="left-part -mt-10 text-white rounded-[20px] p-[20px] lg:p-[32px]" style={{ backgroundImage: 'linear-gradient(300deg, #084032 0%, #118264 60%)' }}>
                            <h1 className='text-[24px] lg:text-[28px] font-montserrat font-[600] leading-[25px] lg:leading-[33px]'>Advanced Security and Reliability
                            </h1>
                            <p className='mt-4 text-[14px] lg:text-[16px] font-montserrat leading-[27px]'>Protect your network with cutting-edge security features. From firewalls to encryption, our solutions offer safe and secure connections to keep your data and devices protected.</p>
                        </div>
    
                    </div>
                </div>
            </div>
        )
}

export default RoutersSeamlessConnectivity
