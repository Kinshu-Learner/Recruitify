import React from 'react';
import emprImg from '../Assets/Spotlight _Monochromatic.svg';
import { GrTrophy } from 'react-icons/gr';
import { BiTimer } from 'react-icons/bi';
import { LuSprout } from 'react-icons/lu';
import { BsGlobeAmericas } from 'react-icons/bs';

const Employer = () => {
    return (
        <div name='for employers' className='flex flex-col md:flex-row my-40 max-w-screen-lg justify-center items-center mx-auto'>

            <img src={emprImg} alt="" className='h-80 relative md:flex mb-8' />

            <div className="flex flex-col m-4">

                <div className="text-4xl font-bold">
                    <div className="text-3xl font-medium my-4">
                        Need Talent?
                    </div>
                    Elevate Your Team-
                    <div className='text-2xl'>
                    Top Tech Talent at Your Fingertips!
                    </div>
                </div>
                <div className="font-medium my-2">Discover top tech talent effortlessly. Recruitify connects you with skilled software engineers, product managers, data scientists, and more, from India and beyond. Elevate your team's success with the best candidates, right at your fingertips!</div>

                <div className="">

                    <div className="flex">
                        <BsGlobeAmericas size={40} className='mr-6 h-12' />
                        <div className="text-sm py-1">
                        Access Global Tech Talent: Unlock a vast pool of top-tier tech talent from around the world.
                        </div>
                    </div>
                    <div className="flex">
                        <GrTrophy size={40} className='mr-6 h-12' />
                        <div className="text-sm py-1">
                        Build Your Dream Team: Find the perfect fit for your tech projects and company culture.
                        </div>
                    </div>
                    <div className="flex">
                        <LuSprout size={50} className='mr-4 h-12' />
                        <div className="text-sm py-1">
                        Drive Innovation: Collaborate with visionary professionals to fuel innovation and success.
                        </div>
                    </div>
                    <div className="flex">
                        <BiTimer size={50} className='mr-5 h-12' />
                        <div className="text-sm py-1">
                        Streamlined Hiring Process: Simplify your hiring process and save time with our efficient platform.
                        </div>
                    </div>

                </div>

                <a href='/login' className="font-medium text-xl cursor-pointer hover:bg-purple-600 duration-300 px-3 py-2 my-4 w-36 text-center rounded-xl bg-purple-500 text-white">Hire talent</a>

            </div>

        </div>
    )
}

export default Employer
