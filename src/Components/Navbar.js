import React from 'react'

const Navbar = () => {

    let links = [
        {
            id: 1,
            link: "about",
        },
        {
            id: 2,
            link: "signup"
        },
        {
            id: 3,
            link: "login"
        },
    ]

    return (

        <nav className='bg-indigo-100'>

            <div className="flex justify-around  mx-auto h-20 items-center">

                <a href='/' className="group box-shadow-hover text-2xl font-bold hover:text-purple-500">

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

                <ul className="flex">

                    {links.map(({ id, link }) => {
                        return <li key={id} className='font-medium mx-4 capitalize'>
                            <a href={link} className="px-4 py-2 hover:bg-purple-500 rounded-xl hover:text-white duration-300">
                                {link}
                            </a>
                        </li>
                    })}
                    
                </ul>

            </div>

        </nav>

    )
}

export default Navbar
