import React from 'react'

const Contact = () => {
  return (
    <div name='Contact' className='bg-gradient-to-b from-black to-gray-700 h-screen w-full '>
        <div className='max-w-screen-lg mx-auto flex flex-col justify-center h-full   p-4'>
            <div className='text-white pb-8 '>
                <p className='font-bold inline border-gray-400 border-b-4 text-4xl'>Contact</p>
                <p className='py-6'>Fill in the below form to get in touch with me.</p>
            </div>
            <div className='flex justify-center items-center'>
                <form action="https://getform.io/f/fb3d268c-65cb-45ee-a1d8-58641b05ae1c" method='POST' className='text-white flex flex-col w-full md:w-1/2 '>
                    <input type="text" name="Name" placeholder='Enter Your Name' className='border my-2 p-3 bg-transparent '  />
                    
                    <input type="email" name="Email" placeholder='Enter Your E-Mail' className='border my-2 p-3 bg-transparent '  />

                    <textarea type="text" name="Message" placeholder='Enter your Message' id="" cols="30" rows="10" className='bg-transparent my-2 border p-3' ></textarea>

                    <button className='bg-gradient-to-b rounded-lg from-cyan-500 to-sky-700 text-white p-2 w-1/4  mt-4 mx-auto'>Let's Talk</button>
                </form>
            </div>

            

         
        </div>
    </div>
  )
}

export default Contact