import React from 'react'
import Joy from "../assets/Joy.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
  <div name="home" className='h-screen bg-gradient-to-b from-black via-black to-gray-800'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full '>
          <h2 className='text-4xl sm:text-7xl font-bold text-white'>I'm a Frontend Developer</h2>
          <p className='text-gray-500 py-4 max-w-md'>
            I am an innovative Frontend Developer. I can create good SEO-friendly websites and have a good knowledge of <b>HTML</b>,<b>CSS</b> and <b>JAVASCRIPT</b> including framework like <b>Tailwind CSS</b> and libraries like <b>ReactJs</b>
          </p>

          <div>
            <Link to='projects' className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer' smooth duration={500}>
              Projects
              <span className='group-hover:rotate-90 duration-300'>
                <MdKeyboardArrowRight size={25} className='ml-1' />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img src={Joy} alt="my profile" className='rounded-2xl mx-auto w-[40%] md:w-full' />
        </div>
      </div>
    </div>
  )
}

export default Home