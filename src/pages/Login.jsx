import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assests/logo.png'
import pic from '../assests/lover ♥︎.jpg'
import Typewriter from 'typewriter-effect';


export default function Login() {

    const gradientTextStyle = {
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        color: 'transparent',
        backgroundImage: 'linear-gradient(to right,white,#b578ff,#581bc8)',
    };


    return (
        <div className='  w-[100vw] flex flex-col gap-6 md:gap-[7rem] md:pb-[10rem] items-center justify-center'>
            <div className=' mt-[2rem] h-[20vh] gap-1 w-full flex flex-wrap  items-center md:justify-end md:mr-[10vw] md:h-[13vh] lg:mt-[10rem]'>
                <img className='h-full'
                    src={logo} alt='' />
                <p className=' text-[1.2rem] font-semibold text-gray-200 mb-4 md:text-[2.2rem]'>Melody Mates</p>
            </div>   
            <div className='md:flex  md:justify-between md:w-[80vw]'>
                <div className="md:w-[40vw] w-[70vw] mx-auto flex flex-col  xl:gap-4 lg:w-[30vw] lg:mt-[-7rem] xl:mt-[-12rem] ">
                   <span className='text-[1.7rem] font-bold'>Enjoy the music</span> 
                    <span className='font-bold text-[1.4rem] h-[22vh] md:text-[2.5rem] lg:h-[40vh] xl:h-[35vh] lg:text-[2.8rem]   '
                        style={gradientTextStyle}>
                        <Typewriter
                            options={{
                                strings: ['and connect with people'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </span>
                    <p className='font-semibold text-xs text-gray-400 md:text-sm lg:text-[0.7rem]'> To use this website, you must have a Spotify account and grant necessary permissions.</p>
                    <Link to={'/login'}>
                        <div className='bg-[#581bc8] mt-3 text-center rounded-[10px] lg:w-[20vw] w-[12rem] ' >

                            <button className="text-white py-3 md:text-xl font-semibold">
                                Get Started
                            </button>
                        </div >
                    </Link>
                </div>
                <img className='hidden h-[18rem]  lg:block'
                    src="https://cdn.dribbble.com/users/4322252/screenshots/16838356/media/03e50f81757d6ba4aa98b91da7a50499.png?resize=400x0"
                    alt="" />
                <img className='h-[17rem] mx-auto mt-5 lg:absolute top-1 left-1 rounded-lg'
                    src={pic}
                    alt="" />
            </div>
        </div>

    )
}
