import React from 'react'

const Footer = () => {
  return (
    <div className='footer mx-12 my-40 flex flex-col gap-7'>
        <dic className="footer-top flex justify-between">
            <div className="footer-top-left">
            <h1 className='text-5xl'>AP</h1>
                <p className='text-sm max-w-96'>I am a frontend developer from india with multiple skills such as html , css/tailwind css, react, gsap , scrolltrigger, lenis, locomotive.</p>
            </div>
            <div className="footer-top-right flex items-center gap-9">
                <div className="footer-email-input flex gap-7 px-4 py-5 rounded-xl bg-[#32323B] pr-20">
                    
                    <input className='outline-none border-none bg-transparent text-[#a0a0a0] text-md' type="email" placeholder='enter your email' />
                </div>
                <div className="footer-subscribe text-xl px-10 py-4 rounded-xl cursor-pointer bg-gradient-to-r from-[#DA7C25] to-[#B923E1] ">subscribe</div>
            </div>
        </dic>
        <hr />
        <div className="footer-bottom flex justify-between text-md">
            <p className="footer-bottom-left">© 2024 Anubhav Pandey. All rights reserved.</p>
            <div className="footer-bottom-right flex gap-12 mb-12">
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer