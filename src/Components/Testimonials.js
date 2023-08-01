
import React from 'react'
import avataaars1 from '../Assets/avataaars1.svg'
import avataaars2 from '../Assets/avataaars2.svg'
import avataaars3 from '../Assets/avataaars3.svg'
import avataaars4 from '../Assets/avataaars4.svg'

const Testimonials = () => {
    return (
        <div className='max-w-screen-lg flex flex-col justify-center items-center mx-auto'>

            <div className="text-4xl font-bold my-8">Words of Delight</div>
            <div className="text-3xl font-medium mb-12 text-center">Hear What Our Users Have to Say</div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">

                <div className="bg-indigo-100 p-8 mt-12 m-4 rounded-lg h-96 relative shadow-xl">
                    <div className="flex flex-col items-center justify-center -top-20 relative">
                        <img src={avataaars2} alt="Human1" className="h-28 w-28 rounded-full bg-purple-300" />
                        <div className="text-xl font-semibold mt-4">
                            Sarah Johnson
                        </div>
                    </div>
                    <div className="relative -top-14">
                        <img src="https://freesvg.org/img/right-double-quotation-mark.png" alt="" className="h-8 my-2 scale-[-1]" />
                        <div className="">
                            Recruitify opened doors to incredible opportunities. Within weeks of joining, I found my dream job at a cutting-edge startup. Thank you for helping me unlock my true potential!
                        </div>
                        <img src="https://freesvg.org/img/right-double-quotation-mark.png" alt="" className="h-8 absolute my-2 right-0" />
                    </div>
                </div>

                <div className=" bg-purple-200 p-8 mt-12 m-4 rounded-lg h-96 relative shadow-xl">
                    <div className="flex flex-col items-center justify-center -top-20 relative">
                        <img src={avataaars1} alt="Human1" className="h-28 w-28 rounded-full bg-indigo-200" />
                        <div className="text-xl font-semibold mt-4">
                            David Miller
                        </div>
                    </div>
                    <div className="relative -top-14">
                        <img src="https://freesvg.org/img/right-double-quotation-mark.png" alt="" className="h-8 my-2 scale-[-1]" />
                        <div className="">
                            Finding the right talent was a breeze with Recruitify. We built an exceptional tech team in record time, thanks to their vast network of skilled professionals. Highly recommended!
                        </div>
                        <img src="https://freesvg.org/img/right-double-quotation-mark.png" alt="" className="h-8 absolute my-2 right-0" />
                    </div>
                </div>

                <div className=" bg-purple-200 p-8 mt-12 m-4 rounded-lg h-96 relative shadow-xl">
                    <div className="flex flex-col items-center justify-center -top-20 relative">
                        <img src={avataaars4} alt="Human1" className="h-28 w-28 rounded-full bg-indigo-200" />
                        <div className="text-xl font-semibold mt-4">
                            Emily Walker
                        </div>
                    </div>
                    <div className="relative -top-14">
                        <img src="https://freesvg.org/img/right-double-quotation-mark.png" alt="" className="h-8 my-2 scale-[-1]" />
                        <div className="">
                            Recruitify streamlined our hiring process and saved us valuable time. We found talented professionals who perfectly aligned with our company culture. It's been a game-changer for our business!
                        </div>
                        <img src="https://freesvg.org/img/right-double-quotation-mark.png" alt="" className="h-8 absolute my-2 right-0" />
                    </div>
                </div>

                <div className="bg-indigo-100 p-8 mt-12 m-4 rounded-lg h-96 relative shadow-xl">
                    <div className="flex flex-col items-center justify-center -top-20 relative">
                        <img src={avataaars3} alt="Human1" className="h-28 w-28 rounded-full bg-purple-300" />
                        <div className="text-xl font-semibold mt-4">
                            Michael Roberts
                        </div>
                    </div>
                    <div className="relative -top-14">
                        <img src="https://freesvg.org/img/right-double-quotation-mark.png" alt="" className="h-8 my-2 scale-[-1]" />
                        <div className="">
                            I was amazed by the global opportunities Recruitify offered. Their platform connected me with top companies across the world, and I landed a role that perfectly matched my skills and aspirations.
                        </div>
                        <img src="https://freesvg.org/img/right-double-quotation-mark.png" alt="" className="h-8 absolute my-2 right-0" />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Testimonials

