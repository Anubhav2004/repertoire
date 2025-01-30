import React from 'react'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const MyWork = () => {
  return (
    <div id='work' className='mywork flex flex-col items-center justify-center gap-20 mx-20 my-12'>
        <div className="mywork-title  relative">
            <h1 className='px-0 py-5 text-6xl font-medium'>My latest work</h1>
            <img className='absolute bottom-0 right-0 -z-10' src={theme_pattern} alt="" />
        </div>
        <div className="mywork-container grid-flow-col grid gap-16 mb-20">
           {mywork_data.map(( work,index)=>{
            return  <div className='mywork-format w-44  cursor-pointer'> 
                <img key={index} src={work.w_img} alt="" />
            </div>
           
                
           })}
        </div>
        <div className="mywork-showmore flex gap-4 border-2 border-white text-xl font-medium">
            <p>Show more</p>
            <img src={arrow_icon} alt="" />
        </div>
    </div>
  )
}

export default MyWork