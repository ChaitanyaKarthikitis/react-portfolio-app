import React from 'react'
import '../assets/css/styles.css'
const About = () => {
  return (
    <div
      name="About"
      className="h-screen adjust w-full bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl text-gray-400 lg:mt-20">
          Hello there! I'm Chaitanya Karthik Basva, a recent graduate with a
          passion for coding and a penchant for problem-solving. As a Full Stack
          Developer specializing in the MERN stack, I thrive on crafting
          seamless digital experiences from front-end to back-end. With a solid
          foundation in Data Structures and Algorithms (DSA), I bring a unique
          blend of creativity and precision to every project I tackle. Whether
          I'm diving into complex code or architecting elegant solutions, I'm
          always excited to push the boundaries of what's possible in the world
          of web development.
        </p>
        <br />
        <p className="text-xl text-gray-400">
          Please go through this website to know everything about my
          professional skill-sets, projects and many more.You could also get in
          touch with me in the contact form below.Happy Browsing😊
        </p>
      </div>
    </div>
  );
}

export default About