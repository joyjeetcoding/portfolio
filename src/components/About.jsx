import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>

            <p className='text-xl mt-20'>
                Hii!! My name is Joyjeet Mukherjee. I am a sophomore pursuing Computer Science & Engineering from ASANSOL ENGINEERING COLLEGE, WEST BENGAL, INDIA. 
            </p>
            <br />

            <p className='text-xl'>I have a better knowledge and a good grip over programming langauges like C, C++, Java. I have made this Portfolio website using ReactJs and Tailwind CSS only.</p>
            <br />
            <p className='text-xl'>Fun fact: Currently, my life is balancing between DSA & Development.</p>
            <br />
            <p className='text-xl'>If any recruiter is currently looking at my website and liking my work, feel free to contact me. Form is given below ( Absolutely workable ).</p>
        </div>


    </div>
  )
}

export default About