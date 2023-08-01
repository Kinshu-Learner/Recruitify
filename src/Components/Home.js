import React from 'react'
import job_interview from '../Assets/Job Interview _Monochromatic.svg'

const Home = () => {
    return (

        <div className='flex flex-col md:flex-row justify-between mx-auto mb-64 md:my-20 max-w-screen-lg h-[700px] items-center '>

            <div className="m-4 my-8 max-w-screen-lg mx-auto md:relative flex flex-col justify-center">

                <div className="absolute z-[-1] h-36 w-36 opacity-70 ease-in-out bg-purple-500 rounded-full top-[250px] md:top-[-40px] left-4 mix-blend- animate-blob1 filter blur-xl"></div>
                <div className="absolute z-[-1] h-36 w-36 opacity-70 ease-in-out bg-indigo-400 rounded-full top-[450px] md:top-40 md:left-[300px] left-[240px] mix-blend-multiply animate-blob2 animation-delay-1000 filter blur-xl "></div>

                <p className="text-5xl font-bold m-2">Empower Your Future </p>
                <p className='text-4xl font-bold m-2'>with <span className='text-6xl'>Recruitify!</span></p>
                <p className="font-medium m-2">
                    Discover your dream tech team effortlessly as an employer or unlock your true potential with visionary companies as a tech professional. Join Recruitify now to shape a limitless future of innovation and greatness in the world of technology!
                </p>

                <div className="flex my-3">
                    <a href='/login' className="font-medium text-xl cursor-pointer hover:bg-purple-600 duration-300 px-3 py-2 mx-2 w-36 text-center rounded-xl bg-purple-500 text-white">Hire talent</a>
                    <a href='/login' className="font-medium text-xl cursor-pointer hover:bg-indigo-600 duration-300 px-3 py-2 mx-2 w-36 text-center rounded-xl bg-indigo-500 text-white">Find jobs</a>
                </div>

            </div>

            <img src={job_interview} alt="" className='mx-4 relative ' />

        </div>

    )
}

export default Home
