import React, { useState } from 'react'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {

 const [menu,setMenu] = useState("home");

  return (
    <div className='navbar flex items-center justify-between mx-24 my-7 '>
        <h1 className='text-4xl'>AP</h1>
        <img src={menu_open} alt="" className='nav-mob-open' />
        <ul className='nav-menu mx-auto flex items-center justify-center list-none gap-5 text-lg'>
          <img src={menu_close} alt="" className='nav-mob-close' />
           <li className='flex flex-col gap-1 cursor-pointer'><AnchorLink className='anchor-link ' href='#home'> <p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu==="home"?<img src={underline} alt=''/>: <></>}</li>
           <li className='flex flex-col gap-1 cursor-pointer'><AnchorLink className='anchor-link 'offset={50} href='#about'> <p onClick={()=>setMenu("about")}>About Me</p></AnchorLink>{menu==="about"?<img src={underline} alt=''/>: <></>}</li>
           <li className='flex flex-col gap-1 cursor-pointer'><AnchorLink className='anchor-link 'offset={50} href='#services'> <p onClick={()=>setMenu("services")}>Services</p></AnchorLink>{menu==="services"?<img src={underline} alt=''/>: <></>}</li>
           <li className='flex flex-col gap-1 cursor-pointer'><AnchorLink className='anchor-link 'offset={50} href='#work'> <p onClick={()=>setMenu("portfolio")}>Portfolio</p></AnchorLink>{menu==="portfolio"?<img src={underline} alt=''/>: <></>}</li>
           <li className='flex flex-col gap-1 cursor-pointer'><AnchorLink className='anchor-link 'offset={50} href='#contact'> <p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu==="contact"?<img src={underline} alt=''/>: <></>}</li>
        </ul>   
        <div className='nav-connect px-6 py-4 rounded-full cursor-pointer  bg-gradient-to-r from-[#DA7C25] to-[#B923E1] transition duration-500 hover:scale-105 transform'><AnchorLink className='anchor-link 'offset={50} href='#contact'> <p onClick={()=>setMenu("contact")}></p>Connect with Me </AnchorLink></div>
    </div>
  )
}

export default Navbar