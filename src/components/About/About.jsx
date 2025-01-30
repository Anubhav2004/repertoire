import React from 'react'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profiles_img.jpg'

const About = () => {
    return (
        <div id='about' className='About flex flex-col items-center justify-center gap-20 mx-20 my-12'>
            <div className="about-title relative">
                <h1 className='px-0 py-5 text-6xl font-medium'>About Me</h1>
                <img className='absolute bottom-0 right-0 -z-10' src={theme_pattern} alt="" />
            </div>
            <div className="about-section flex gap-20">
                <div className="about-left">
                    <img className=' rounded-lg' src={profile_img} alt="" />
                </div>
                <div className="about-right flex flex-col gap-20">
                    <div className="about-para flex flex-col gap-5 text-2xl font-medium">
                        <p>I am an experienced Frontend Developer with over a decade of professional expertise in the field.Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.</p>
                        <p>My passion for frontend development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project.</p>
                    </div>
                    <div className="about-skills flex flex-col gap-5">
                        <div className="about-skill flex gap-12 items-center"><p className='min-w-36 font-medium text-2xl'>HTML & CSS</p><hr className='outline-none border-none w-[50%] h-2 rounded-full bg-gradient-to-r from-[#DA7C25] to-[#B923E1]' style={{ width: "50%" }}></hr></div>
                        <div className="about-skill flex gap-12 items-center"><p className='min-w-36 font-medium text-2xl'>React Js</p><hr className='outline-none border-none w-[50%] h-2 rounded-full bg-gradient-to-r from-[#DA7C25] to-[#B923E1]' style={{ width: "70%" }}></hr></div>
                        <div className="about-skill flex gap-12 items-center"><p className='min-w-36 font-medium text-2xl'>Javascript</p><hr className='outline-none border-none w-[50%] h-2 rounded-full bg-gradient-to-r from-[#DA7C25] to-[#B923E1]' style={{ width: "60%" }}></hr></div>
                    </div>
                </div>
            </div>
            <div className="about-achievements flex w-[100%] justify-around mb-20">
                <div className="about-achieve flex flex-col items-center gap-2">
                    <h1 className=' font-bold text-5xl bg-clip-text bg-gradient-to-r from-[#DA7C25] to-[#B923E1]'>10+</h1>
                    <p className='font-medium text-xl'>year of experience</p>
                </div>
                <hr />
                <div className="about-achieve flex flex-col items-center gap-2">
                    <h1 className=' font-bold text-5xl bg-clip-text bg-gradient-to-r from-[#DA7C25] to-[#B923E1]'>90+</h1>
                    <p>projects</p>
                </div>
                <hr />
                <div className="about-achieve flex flex-col items-center gap-2">
                    <h1 className=' font-bold text-5xl bg-clip-text bg-gradient-to-r from-[#DA7C25] to-[#B923E1]'>15+</h1>
                    <p>happy client</p>
                </div>
            </div>
        </div>
    )
}

export default About