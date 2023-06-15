import React from 'react'
import notes from '../assets/notes.jpg'
import teaching from'../assets/teaching.png'
import password from '../assets/password.png'
import todo from '../assets/todo.png'
import quiz from '../assets/quiz.png'
import calculator from '../assets/calci_pic.png'
import ExpenseTracker from '../assets/budget_app.png'
import '../assets/css/styles.css'

const Portfolio = () => {
    const projects =[
        {
            id:1,
            img:notes,
            href:"https://notesappbyck.netlify.app/"



        },
        {
            id:2,
             img:todo,
            href:"https://todolistbyck.netlify.app/"
          

        },
        {
            id:3,
            img:password,
            href:"https://passwordgeneratorbyck.netlify.app/"

        },
        {
            id:4,
            img:quiz,
            href:"https://ckquiz.netlify.app/index.html"
             
           

        },
        {
            id:5,
             img:teaching,
            href:"https://ckwebtutorials.netlify.app/"
            
        },
        {
            id:6,
            img:calculator,
            href:"https://calculator-project-mocha.vercel.app/"
        },
        {
            id:7,
            img:ExpenseTracker,
            href:"https://budget-app-weld.vercel.app/"
        }

    ]
  return (
    <div name='Portfolio' className='bg-gradient-to-b from-black to-gray-800 md:h-screen w-full add-padding-to-bottom pt-10'>
        <div className='max-w-screen-lg text-white mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl inline border-b-4 font-bold border-gray-500'>Projects</p>
                <p className='py-6 '>Please Check out some of my recent projects here,</p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:p-0'>

                {projects.map((project)=>(
                    (
                        <div key={project.id} className='shadow-md shadow-gray-600 rounded-lg'>
                          <img src={project.img} className='rounded-t-lg duration-200 hover:scale-105' alt="" />
                
                          <div className='flex justify-center items-center'>
                                <button className='w-1/2 px-6 py-3 duration-200  hover:scale-105 cursor-pointer'> <a href={project.href} target='_blank'>Get Demo</a> </button>
                                
                          </div>
                        </div>

                    )
                ))}
                
            </div>
        </div>
    </div>
  )
}

export default Portfolio