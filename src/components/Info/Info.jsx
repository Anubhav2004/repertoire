import React from 'react'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Info = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "47c86af8-9229-4dc4-be88-40322b395f77");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message);
        }
      };



  return (
    <div className='contact flex flex-col items-center justify-center gap-20 mx-20 my-30'>
        <div className="contact-title relative">
            <h1 className='px-0 py-7 text-6xl font-semibold'>Get in Touch</h1>
            <img className='absolute bottom-0 right-0 -z-10' src={theme_pattern} alt="" />
        </div>
        <div id='contact' className="contact-section flex gap-36 ">
            <div className="contact-left flex flex-col gap-7">
                <h1 className='font-bold text-4xl bg-gradient-to-r from-[#DA7C25] to-[#B923E1] bg-clip-text '>Let's Talk</h1>
                <p className='max-w-[550px] text-[#D8D8D8] text-xl leading-9'>I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
                <div className="contact-details flex flex-col gap-7 text-[#D8D8D8] text-xl">
                    <div className="contact-detail flex items-center gap-5">
                            <img src={mail_icon} alt="" /> <p>g.pandey0413@gmail.com</p>
                    </div>
                    <div className="contact-detail flex items-center gap-5">
                              <img src={call_icon} alt="" /><p>8953072150</p>
                        </div>
                        <div className="contact-detail flex items-center gap-5">
                               <img src={location_icon} alt="" /><p>Bhopal , Mp</p>
                        </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className="contact-right flex flex-col items-start gap-7">
    <label className='text-[#D8D8D8] font-medium text-xl' htmlFor="Your Name">Your Name</label>
    <input className='border-none w-[700px] h-[60px] pl-5 rounded bg-[#32323c] text-[#A0A0A0] font-["gilroy"] text-xl' type="text" placeholder='Enter Your Name' name='name' />
    
    <label className='text-[#D8D8D8] font-medium text-xl' htmlFor="Your Email">Your Email</label>
    <input className='border-none w-[700px] h-[60px] pl-5 rounded bg-[#32323c] text-[#A0A0A0] font-["Outfit"] text-xl' type="email" placeholder='Enter your Email' name='email' />
    
    <label className='text-[#D8D8D8] font-medium text-xl' htmlFor="Your Message">Write your message here</label>
    <textarea className='w-[650px] border-none p-[25px] rounded bg-[#32323c] text-[#A0A0A0] text-xl' name="message" rows="8" placeholder='Enter your message'></textarea>
    
    <button type='submit' className='contact-submit border-none text-white rounded-3xl text-xl mb-12 cursor-pointer px-4 py-2 bg-gradient-to-r from-[#DA7C25] to-[#B923E1]'>Submit now</button>
</form>

        </div>
    </div>
  )
}

export default Info