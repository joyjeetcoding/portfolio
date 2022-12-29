import React from 'react'
import Tictactoe from "../assets/portfolio/Tictactoe.png"
import Hidden from "../assets/portfolio/Hidden.png"
import Analog from "../assets/portfolio/Analog.png";



const Projects = () => {

    // function demo(href1, id) {
    //     var a = document.getElementById(id);

    //     a.href = {href1};
    // }

    const portfolios = [
        {
            id: 1,
            src: Tictactoe,
            href1: 'https://tic-tac-toe-by-joyjeet.netlify.app/',
            href2: 'https://github.com/joyjeetcoding/Tic-tac-toe'
        },

        {
            id: 2,
            src: Hidden,
            href1: 'https://krn563.github.io/web-hypers/',
            href2: 'https://github.com/krn563/web-hypers'
        },

        {
            id: 3,
            src: Analog,
            href1: 'https://analog-clock-joyjeet.netlify.app/',
            href2: 'https://github.com/joyjeetcoding/analog-clock'
        }
    ]


    return (
        <div name='projects' className='bg-gradient-to-b from-black to-gray-800 w-full text-white'>

            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Projects</p>
                    <p className='py-6'>Check Out some of my works right here</p>
                </div>

                


                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

                {
                    portfolios.map(({id, src, href1, href2}) => (
                        <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                        <img src={src} alt="" className='rounded-md duration-200 hover:scale-105' />
                        <div className='flex items-center justify-center'>
                            <a href={href1} className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105' target='_blank' rel="noreferrer">Demo</a>
                            <a href={href2} className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105' target='_blank' rel="noreferrer">Code</a>
                        </div>
                    </div>
                    ))
                }

                    
                </div>
            </div>

        </div>
    )
}

export default Projects