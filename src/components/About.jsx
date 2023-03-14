import React from 'react'
import '../assets/css/styles.css'
const About = () => {
  return (
    <div name='About' className='h-screen adjust w-full bg-gradient-to-b from-gray-800 to-black text-white' >
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                    About
                </p>
            </div>

            <p className='text-xl text-gray-400 lg:mt-20'>Hello there, My name is Chaitanya Karthik.I am an engineering graduate with good grasp on JAVA programming language and front-end development(REACT).Curently Apart from widening my skillsets , I am keenly looking forward to gain real time industry level insights on the technical skillsets that I have gained during my years of graduation at GITAM University.  
            </p>
            <br />
            <p className='text-xl text-gray-400'>
                Please go through this website to know everything about my professional skill-sets, projects and many more.You could also get in touch with me int the contact form below.Happy Browsing😊  
            </p>
        </div>
    </div>
  )
}

export default About