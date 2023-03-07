import React from 'react'
// import { useState } from 'react';
import myImg from '../assets/hero.jpg'
import {BsArrowRightShort} from 'react-icons/bs'
import '../assets/css/styles.css'
import {Link} from 'react-scroll'

const Home=()=>{

    // const [img,setImg] = useState(false)

     return (
    // <div name='Home' className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white'>
    //     <div className='max-w-screen-xl   mx-auto flex flex-col text-left items-center justify-center h-full px-4 md:flex-row'>
    //         <div className=' w-full md:ml-32 bring-it-down'>
    //             <h2 className='text-white text-5xl sm:text-6xl font-bold pb-2'>Hiii, My name is Chaitanya Karthik </h2>

    //             <p className='text-gray-300 text-xl   w-full px-1 md:py-2'> I am an aspiring software developer with a passion for problem-solving and a drive to create innovative solutions. From a young age, I have been interested in computers and technology, and as I grew older, I became fascinated with the process of programming and software development.  </p>

    //             <div>
    //                 <Link to='Portfolio' smooth duration={500} id='spacing-letter' className='group flex  justify-center items-center  md:my-2 md:px-4 my-2 md:my-4 py-2 w-1/3 cursor-pointer rounded bg-gradient-to-r from-gray-600 to-gray-500 '>
    //                     Portfolio
    //                     <span className='group-hover:rotate-90 duration-300 '>
    //                         <BsArrowRightShort size={30}/>
    //                     </span>
    //                 </Link>
    //             </div>
    //         </div>
    //         <div  className="">
    //             <img src={myImg}   alt="my profile " className='rounded-2xl   mx-auto w-2/3 md:w-2/3  ' />
                
    //         </div>
    //     </div>
    // </div>
    <div name="Home" className='h-screen w-full bg-gradient-to-b from-black to-gray-800 '>
        <div className="text-white max-w-screen-lg mx-auto flex flex-col items-center justify-center md:flex-row h-full px-4 adjust">
            <div className='flex flex-col '>
            <div className='flex flex-col increase-width justify-center min-w-fit h-full'>
                <h2 className='text-5xl  letter-spacing font-bold inline '>Hii,My name is Chaitanya Karthik!</h2>
                <p className='text-gray-400 py-4 text-xl max-w-md'>I am an aspiring software developer with a passion for problem-solving and a drive to create innovative solutions. From a young age, I have been interested in computers and technology, and as I grew older, I became fascinated with the process of programming and software development.</p>
            </div>
            <div>
                <Link to='Portfolio' smooth duration={500} id='spacing-letter' className='group flex   justify-center items-center   md:px-4 my-2 md:my-4 py-2 w-1/3 cursor-pointer rounded bg-gradient-to-r from-gray-600 to-gray-500 '>
                        Portfolio
                         <span className='group-hover:rotate-90 duration-300 '>
                             <BsArrowRightShort size={30}/>
                         </span>
                     </Link>
            </div>
            </div>
            <div>
                <img src={myImg} alt="" className='rounded-2xl sm:w-2/3 md:mr-4  mx-auto md:w-2/3 '/>
            </div>
        </div>
        
    </div>
  )

}

 
export default Home