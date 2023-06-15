// import React from 'react'
import html from '../assets/html.png'
import javascript from '../assets/javascript.png'
// import react from '../assets/react.png'
import tailwind from '../assets/tailwind.png'
import css from '../assets/css.png'
import React from '../assets/react.png'
import java from '../assets/java.png'
import dsa from '../assets/dsa.png'
import sql from '../assets/sql.png'
import mmtc from '../assets/mmtc.png'
import bootstrap from '../assets/bootstrap.png'
import '../assets/css/styles.css'
const Experience = () => {
    const experiences = [
        {
            id:1,
            imgSrc:java,
            text:"JAVA",
            style:"border-white border-l  shadow-white border-r border-t rounded-lg"
            
        },
        {
            id:2,
            imgSrc:dsa,
            text:"DSA",
            style:"border-white border-l  shadow-white border-r border-t rounded-lg"
            
        },
        {
            id:3,
            imgSrc:html,
            text:"HTML",
            style:"border-orange-600 border-l shadow-orange-600 border-r border-t rounded-lg"
            
        },
        {
            id:4,
            imgSrc:css,
            text:"CSS",
            style:'border-blue-600 border-l shadow-blue-600  border-r border-t rounded-lg'
            
        },
        {
            id:5,
            imgSrc:tailwind,
            text:"TAILWIND",
            style:'border-cyan-600 border-l shadow-cyan-600  border-r border-t rounded-lg'
             
            
        },
        {
            id:6,
            imgSrc:bootstrap,
            text:"Bootstrap",
            style:'border-violet-600 border-l shadow-violet-600  border-r border-t rounded-lg'
            
            
            
        },
        {
            id:7,
            imgSrc:javascript,
            text:"JAVASCRIPT",
            style:'border-yellow-600 border-l shadow-yellow-600  border-r border-t rounded-lg' 
            
        },
        {
            id:8,
            imgSrc:React,
            text:"REACT",
             style:'border-blue-600 border-l shadow-blue-600  border-r border-t rounded-lg'
            
        },
        {
            id:9,
            imgSrc:sql,
            text:"SQL",
            style:'border-white border-l shadow-white  border-r border-t rounded-lg'
            
           
            
        },
        {
            id:10,
            imgSrc:mmtc,
            text:"Many More coming soon!",
            style:'border-brown-600 shadow-white  border-l  border-r border-t rounded-lg'
        }
    ]
  return (
    <div name='Experience' className='bg-gradient-to-b from-gray-800 to-black w-full max-h-fit  pt-24 '>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <div>
                <p className='font-bold text-4xl border-b-4 border-gray-500 inline'>Experience</p>
                <p className='py-6 '>Following are the technologies that I have gained grasp on,</p>
            </div>

           <div className='w-full grid  grid-cols-2  sm:grid-cols-3 gap-8  text-center py-8 px-12 sm:px-0'>
            {
                experiences.map((experience)=>(
                    <div key={experience.id}  className= {`shadow-md hover:scale-105 duration-500 py-2 rounded-lg cursor-pointer ${experience.style}`}  >
                        <img className='w-28 mx-auto' src={experience.imgSrc}  />
                        <p className='mt-4 text-gray-400'>{experience.text}</p>
                    </div>

                ))

            }
                

                





                

              
           </div>
            
        </div>
    </div>
  )
}

export default Experience