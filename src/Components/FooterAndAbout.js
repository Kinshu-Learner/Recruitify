import React from 'react';
import { Link } from 'react-scroll';

import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { BsTwitter } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';


const FooterAndAbout = () => {
    return (
        <div className="flex flex-col mt-20 bg-indigo-100">

            <div className='flex flex-col md:flex-row'>

                <div name="about" className="p-8 m-6 rounded-2xl bg-purple-200 md:w-1/2">

                    <div className="text-4xl font-bold text-indigo-500 mb-4 border-b-4 border-indigo-500 pb-1 w-3/4">
                        About Us
                    </div>
                    <div className="">
                        At Recruitify, we believe in the power of meaningful connections that can transform careers and businesses alike. Join us and experience the next-generation platform that empowers talent and transforms businesses. Together, let's shape a future where potential knows no limits.
                        <div className="font-medium text-lg pt-2">
                            For Job Seekers:
                        </div>
                        Explore a vast array of global job opportunities from visionary companies that value your unique skills and aspirations. Our user-friendly interface ensures that you can easily navigate through exciting roles, empowering you to make informed decisions and take that next career-defining leap.
                        <div className="font-medium text-lg pt-2">
                            For Employers:
                        </div>
                        Discover top tech talent with ease, leveraging our extensive network of skilled professionals from all corners of the globe. Streamline your hiring process, connect with visionary talent, and drive innovation within your organization.
                        <div className="font-semibold text-lg py-2">
                            Empower Connections. Elevate Careers. Drive Innovation.
                        </div>
                        <div className="font-bold text-xl py-2">
                            Welcome to Recruitify – Your Gateway to Talent and Opportunity!
                        </div>
                    </div>

                </div>


                <div className="m-6 mx-12 flex flex-col xl:flex-row">

                    <div className="md:m-12">
                        <div className="text-lg font-medium border-b-2 border-black">
                            Navigate
                        </div>
                        <div className="flex flex-col py-6">
                            <Link to='Home' smooth duration={500} className="group my-2 cursor-pointer transition duration-300">Home
                                <span className='block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500'></span>
                            </Link>
                            <Link to='for employers' smooth duration={500} className="group my-2 cursor-pointer transition duration-300">For Employers
                                <span className='block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500'></span>
                            </Link>
                            <Link to='for job seekers' smooth duration={500} className="group my-2 cursor-pointer transition duration-300">For Job Seekers
                                <span className='block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500'></span>
                            </Link>
                            <Link to='testimonials' smooth duration={500} className="group my-2 cursor-pointer transition duration-300">What our users say
                                <span className='block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500'></span>
                            </Link>
                            <a href='/help' className="group my-2 cursor-pointer transition duration-300">Help
                                <span className='block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500'></span>
                            </a>
                        </div>
                    </div>

                    <div className="my-8 md:m-12 xl:mx-20">

                        <div className="text-lg font-medium border-b-2 border-black">
                            Connect with us
                        </div>

                        <div className="flex my-4">

                            <a href="https://github.com/Kinshu-Learner/recruitify" target='_blank' rel="noreferrer" className="">
                                <AiFillGithub size={50} className='my-2 mr-2 text-purple-500 hover:text-indigo-500 duration-300' />
                            </a>
                            <a href="https://www.linkedin.com/in/kinshu-raj-gupta/" target='_blank' rel="noreferrer" className="">
                                <AiFillLinkedin size={50} className='my-2 mr-2 text-indigo-500 hover:text-purple-500 duration-300' />
                            </a>
                            <a href="https://twitter.com/" target='_blank' rel="noreferrer" className="">
                                <BsTwitter size={50} className='my-2 mr-2 text-purple-500 hover:text-indigo-500 duration-300' />
                            </a>
                            <a href="mailto:kinshurajgupta1@gmail.com" target='_blank' rel="noreferrer" className="">
                                <MdOutlineEmail size={50} className='my-2 mr-2 text-indigo-500 hover:text-purple-500 duration-300' />
                            </a>

                        </div>

                    </div>

                </div>

            </div>

            <div className="text-center py-4 border-t-2 border-gray-300 mx-4 text-gray-600">
                Copyright &#169;2023 Recruitify - Designed by Kinshu Raj Gupta
            </div>

        </div>

    )
}

export default FooterAndAbout
