import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {

    const [nav, setNav] = useState(false);

    let links = [
        {
            id: 1,
            link: "for candidates",
        },
        {
            id: 2,
            link: "about",
        },
        {
            id: 3,
            link: "signup"
        },
        {
            id: 4,
            link: "login"
        },
    ]

    return (

        <nav className='bg-indigo-100 flex justify-around h-20 items-center md:relative'>

            <a href='/' className="group hover:scale-110 box-shadow-hover text-3xl font-bold hover:text-purple-500">

                <span className="duration-300 inline-block group-hover:-rotate-12 group-hover:-translate-x-3 group-hover:translate-y-3">R</span>
                <span className="duration-300 inline-block group-hover:-rotate-12 group-hover:-translate-x-3 group-hover:-translate-y-1">e</span>
                <span className="duration-300 inline-block group-hover:-rotate-12 group-hover:-translate-x-2 group-hover:translate-y-1">c</span>
                <span className="duration-300 inline-block group-hover:-rotate-12 group-hover:-translate-x-1 group-hover:-translate-y-2">r</span>
                <span className="duration-300 inline-block group-hover:-rotate-12">u</span>
                <span className="duration-300 inline-block group-hover:-rotate-12 group-hover:translate-x-1 group-hover:translate-y-1">i</span>
                <span className="duration-300 inline-block group-hover:-rotate-12 group-hover:translate-x-2 group-hover:-translate-y-3">t</span>
                <span className="duration-300 inline-block group-hover:-rotate-12 group-hover:translate-x-3 group-hover:-translate-y-1">i</span>
                <span className="duration-300 inline-block group-hover:-rotate-12 group-hover:translate-x-4 group-hover:-translate-y-3">f</span>
                <span className="duration-300 inline-block group-hover:-rotate-12 group-hover:translate-x-5 group-hover:-translate-y-3">y</span>
                <span className="duration-300 inline-block group-hover:translate-x-6 group-hover:-translate-y-4">.</span>

            </a>

            <ul className="hidden md:flex">

                {links.map(({ id, link }) => {
                    return <li key={id} className='font-medium mx-2 md:mx-4 capitalize'>
                        <a href={link} className="px-4 py-2 hover:bg-purple-500 rounded-xl hover:text-white duration-300">
                            {link}
                        </a>
                    </li>
                })}

            </ul>

            <button className='md:hidden' onClick={() => setNav(!nav)}>
                {nav ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>

            <ul className={`flex flex-col justify-center items-center md:hidden absolute top-0 left-0 ${nav ? 'h-[40vh]' : 'h-0'} w-full ${nav ? 'translate-y-16' : '-translate-y-40'}  duration-300 ease-in-out bg-indigo-100 rounded-b-full`}>
                {links.map(({ id, link }) => {
                    return <li key={id} className='text-xl font-medium my-1 md:mx-4 capitalize'>
                        <a href={link} className="px-4 py-2 hover:bg-purple-500 rounded-xl hover:text-white duration-300">
                            {link}
                        </a>
                    </li>
                })}
            </ul>

        </nav>

    )
}

export default Navbar
