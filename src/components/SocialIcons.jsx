import React from 'react'
import {FaLinkedin,FaGithub} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const SocialIcons = ()=>{

     const link_items = [
        {
            id:1,
            child:(
                <>
                    LinkedIn <FaLinkedin size={30}/>
                </> 
            ),
            href:'https://www.linkedin.com/in/chaitanya-karthik-basva-6670221b8/',
            style:'rounded-tr-md',
            target:'_blank'

        },
        {
            id:2,
            child:(
                <>
                GitHub <FaGithub size={30}/>
                </>
            ),
            href:"https://github.com/ChaitanyaKarthikitis",
            target:'_blank'

        },
        {
            id:3,
            child:(
                <>
                Mail <HiOutlineMail size={30}/>
                </>

            ),
            href:"mailto:chaitanyakarthikits@gmail.com",
            target:'_blank'
        },
        {
            id:4,
            child:(
                 <>
                Resume <BsFillPersonLinesFill size={30}/>
                </>

            ),
            href:"./CK-Resume.pdf",
            style:'rounded-br-md',
            download:true,
            target:'_blank'
        }
       
    ]

    return(

        
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul >
        {link_items.map((link) => (
          <li
            key={link.id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" +
              " " +
              link.style
            }
          >
            <a
            href={link.href}
              className="flex justify-between items-center w-full h-full text-white"
              download={link.download}
              target="_blank"
              rel="noreferrer"
            >
              {link.child}
            </a>
          </li>
        ))}
        </ul>
    </div>

    )

}


export default SocialIcons