import React from 'react'

import { useState } from 'react';

import { FaBars, FaTimes } from "react-icons/fa";

import {Link} from "react-scroll"

const Navbar = () => {
    const [nav, setNav] = useState(false)
  const link_items = [
    {
        id: 1,
        name:"Home"
    },
    {
        id: 2,
        name:"About"
    },
    {
        id: 3,
        name:"Portfolio"
    },
    {
        id: 4,
        name:"Experience"
    },
    {
        id: 5,
        name:"Contact"
    }

  ]
  return (
    <div className='flex bg-black text-white justify-between items-center h-20 fixed w-full px-5'>
        <div>
            <h1 className='font-signature text-3xl md:text-5xl hover:scale-105'>Chaitanya Karthik</h1>
        </div>

        
       
        <ul className='  hidden md:flex '>
            
            {link_items.map(({id,name})=>(
                <li key={id} className='px-3  text-gray-300 cursor-pointer capitalize duration-200 hover:text-gray-200 font-medium hover:scale-105'><Link to={name} smooth duration={500}>{name}</Link></li>
            ))}

        </ul>


        <div onClick={()=>setNav(!nav)} className="cursor-pointer z-10 md:hidden ">
            {nav ? <FaTimes size={30}/> : <FaBars size={30}/> }
        </div>


        {nav  && (
            <ul className='flex flex-col md:hidden h-screen w-full absolute top-0 left-0 justify-center items-center bg-gradient-to-b from-black to-gray-700 '>

                {link_items.map(({id,name})=>(

                    <li key={id} className='text-3xl text-gray-400 p-1.5 cursor-pointer hover:scale-105 duration-150'><Link onClick={()=>setNav(!nav)} to={name} smooth duration={500}>{name}</Link></li>

                ))}

            </ul>
        )}





        
         
        

    
        
        
        

        
        
        

        


    </div>
  )
}

export default Navbar