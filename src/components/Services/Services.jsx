import React from 'react'
import theme_pattern from '../../assets/theme_pattern.svg'
import Services_Data from '../../assets/services_data'
import arrow_icon from '../../assets/arrow_icon.svg'
const Services = () => {
  return (
    <div id='services' className='services flex flex-col items-center justify-center gap-20 mx-20 my-12'>
       <div className="services-title relative">
        <h1 className='px-0 py-5 text-6xl font-medium'>My Services</h1>
        <img className='absolute bottom-0 right-0 -z-10' src={theme_pattern} alt="" />
       </div>
       <div className="services-container grid gap-10 mb-20">
        {Services_Data.map((service,index)=>{
          return <div key={index} className="services-format flex flex-col justify-center gap-2 p-7 rounded-xl border-2 border-white cursor-pointer ">
            <h3 className='font-semibold text-2xl'>{service.s_no}</h3>
            <h2 className='font-normal text-4xl bg-gradient-to-r from-[#DA7C25] to-[#B923E1] bg-clip-text'>{service.s_name}</h2>
            <p className='text-xl max-w-[300px] text-[#d4d4d4] leading-10'>{service.s_desc}</p>
            <div className="services-readmore flex gap-5 items-center mt-5">
                <p>Read More</p>
                <img src={arrow_icon} alt="" />
            </div>
          </div>
        })
        
        }
       </div>
    </div>
  )
}

export default Services