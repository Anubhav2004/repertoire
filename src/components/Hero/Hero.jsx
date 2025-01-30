import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.png'
const Hero = () => {
  return (
    <div id='home' className='hero flex items-center flex-col gap-9'>
     <img className='w-[220px]' src={profile_img} alt="" />
     <h1 className='text-center w-[70%] text-6xl font-light '><span className='bg-gradient-to-r from-[#DA7C25] to-[#B923E1] bg-clip-text'>I'm Anubhav Pandey, </span>frontend developer based in INDIA.</h1>
     <p className='w-[50%] text-center text-lg leading-10'>I am a frontend developer from india with multiple skills such as html , css/tailwind css, react, gsap , scrolltrigger, lenis, locomotive.</p>
     <div className='hero-action flex items-center gap-6 text-xl font-light mb-12 '>
        <div className='hero-connect px-6 py-4 rounded-full bg-gradient-to-r from-[#DA7C25] to-[#B923E1] cursor-pointer'> <a href="https://www.linkedin.com/in/anubhav-pandey-🇮🇳-006056212"> connect with me</a></div>
        <div className='hero-resume px-6 py-3 rounded-full border-2 cursor-pointer'><a href="https://drive.google.com/file/d/1lN_No7_9S_hd6bGL5_fI35QelvfTyGHS/view?usp=drivesdk "> my resume</a></div>
     </div>
    </div>
  )
}

export default Hero