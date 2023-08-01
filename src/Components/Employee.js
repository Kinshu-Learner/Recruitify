import React from 'react';
import empImg from '../Assets/undraw_online_resume_re_ru7s.svg';
import { AiOutlineStar } from 'react-icons/ai';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { GoRocket } from 'react-icons/go';
import { BsLink45Deg } from 'react-icons/bs';


const Employee = () => {
    return (
        <div className='flex flex-col-reverse md:flex-row my-40 max-w-screen-lg justify-center items-center mx-auto'>

            <div className="flex flex-col m-4">

                <div className="text-4xl font-bold">
                    <div className="text-3xl font-medium my-4">
                        Got Talent?
                    </div>
                    Tech Wizards Wanted-
                    <div className='text-2xl'>
                        Unleash Your Potential with Global Companies!
                    </div>
                </div>
                <div className="font-medium my-2">Attention tech wizards! Exciting opportunities await. Join Recruitify to explore visionary companies worldwide. Whether you're a software engineer, product manager, or data scientist, unlock your career's true magic with us!</div>

                <div className="">

                    <div className="flex">
                        <AiOutlineStar size={80} className='mr-4 h-12' />
                        <div className="text-sm py-1">
                            Explore Exciting Opportunities: Join Recruitify to access a world of exciting opportunities with visionary companies worldwide.
                        </div>
                    </div>
                    <div className="flex">
                        <HiOutlineLightBulb size={80} className='mr-4 h-12' />
                        <div className="text-sm py-1">
                            Unleash Your Potential: Showcase your tech skills and unlock your true potential by connecting with top-tier employers.
                        </div>
                    </div>
                    <div className="flex">
                        <GoRocket size={80} className='mr-4 h-12' />
                        <div className="text-sm py-1">
                            Shape the Future of Tech: Be a part of shaping the future of technology by working with innovative and cutting-edge organizations.
                        </div>
                    </div>
                    <div className="flex">
                        <BsLink45Deg size={55} className='mr-3 h-12' />
                        <div className="text-sm py-1">
                            Limitless Possibilities: With Recruitify, the possibilities for your tech career are limitless.
                        </div>
                    </div>

                </div>

                <a href='/login' className="font-medium text-xl cursor-pointer hover:bg-indigo-600 duration-300 px-3 py-2 my-4 w-36 text-center rounded-xl bg-indigo-500 text-white">Find jobs</a>

            </div>

            <img src={empImg} alt="" className='h-80 relative md:flex mb-8' />

        </div>
    )
}

export default Employee
