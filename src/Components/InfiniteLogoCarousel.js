import React, { Component } from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class InfiniteLogoCarousel extends Component {
    render() {
        const settings = {
            dots: false,
            arrows:false,
            infinite: true,
            slidesToShow: 6,
            slidesToScroll: 4,
            autoplay: true,
            speed: 7000,
            autoplaySpeed: 0,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        cssEase: "linear",

                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2,
                        cssEase: "linear",

                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        cssEase: "linear",
                    }
                }
            ]
        };
        return (
            <div className="">
                
                <div className="text-3xl font-medium pb-10 text-center mb-12 border-b-2 border-gray-300"><span className='font-bold'>10,00,000+ </span>professionals from over <span className='font-bold'>12,000</span> companies are using <span className='font-bold'>Recruitify.</span></div>

                <div className='mainContainer border-b-2 border-gray-300 pb-8 mb-12'>
                <Slider {...settings}>
                    <div className="md:p-10">
                        <img className='h-24 flex items-center justify-center mx-auto text-center' src="https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png" alt="" />
                    </div>
                    <div className="md:p-10">
                        <img className='h-24 flex items-center justify-center mx-auto text-center' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png" alt="" />
                    </div>
                    <div className="md:p-10">
                        <img className='h-24 flex items-center justify-center mx-auto text-center' src="https://blogs.microsoft.com/wp-content/uploads/prod/2012/08/8867.Microsoft_5F00_Logo_2D00_for_2D00_screen.jpg" alt="" />
                    </div>
                    <div className="md:p-10">
                        <img className='h-24 flex items-center justify-center mx-auto text-center' src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png" alt="" />
                    </div>
                    <div className="md:p-10">
                        <img className='h-24 flex items-center justify-center mx-auto text-center' src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Meta-Logo.png" alt="" />
                    </div>
                    <div className="md:p-10">
                        <img className='h-24 flex items-center justify-center mx-auto text-center' src="https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png" alt="" />
                    </div>
                    <div className="md:p-10">
                        <img className='h-24 flex items-center justify-center mx-auto text-center' src="https://logos-world.net/wp-content/uploads/2022/05/Berkshire-Hathaway-Symbol.png" alt="" />
                    </div>
                    <div className="md:p-10">
                        <img className='h-24 flex items-center justify-center mx-auto text-center' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" alt="" />
                    </div>
                    <div className="md:p-10">
                        <img className='h-24 flex items-center justify-center mx-auto text-center' src="https://logos-world.net/wp-content/uploads/2022/05/Alibaba-Logo.png" alt="" />
                    </div>
                    <div className="md:p-10">
                        <img className='h-24 flex items-center justify-center mx-auto text-center' src="https://logolook.net/wp-content/uploads/2021/11/Netflix-Logo.svg" alt="" />
                    </div>
                    <div className="md:p-10">
                        <img className='h-24 flex items-center justify-center mx-auto text-center' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Walmart_logo.svg/2560px-Walmart_logo.svg.png" alt="" />
                    </div>
                    <div className="md:p-10">
                        <img className='h-24 flex items-center justify-center mx-auto text-center' src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" alt="" />
                    </div>
                    <div className="md:p-10">
                        <img className='h-24 flex items-center justify-center mx-auto text-center' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Adobe_Corporate_logo.svg/2560px-Adobe_Corporate_logo.svg.png" alt="" />
                    </div>
                    <div className="md:p-10">
                        <img className='h-24 flex items-center justify-center mx-auto text-center' src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/2560px-Samsung_Logo.svg.png" alt="" />
                    </div>
                    <div className="md:p-10">
                        <img className='h-24 flex items-center justify-center mx-auto text-center' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/PepsiCo_logo.svg/2500px-PepsiCo_logo.svg.png" alt="" />
                    </div>
                    <div className="md:p-10">
                        <img className='h-24 flex items-center justify-center mx-auto text-center' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Coca-Cola_logo.svg/1200px-Coca-Cola_logo.svg.png" alt="" />
                    </div>
                    <div className="md:p-10">
                        <img className='h-24 flex items-center justify-center mx-auto text-center' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/1200px-McDonald%27s_Golden_Arches.svg.png" alt="" />
                    </div>
                    <div className="md:p-10">
                        <img className='h-24 flex items-center justify-center mx-auto text-center' src="https://mma.prnewswire.com/media/467598/Oracle_Logo.jpg?p=facebook" alt="" />
                    </div>
                    <div className="md:p-10">
                        <img className='h-24 flex items-center justify-center mx-auto text-center' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Walt_Disney_wordmark.svg/2560px-Walt_Disney_wordmark.svg.png" alt="" />
                    </div>
                    <div className="md:p-10">
                        <img className='h-24 flex items-center justify-center mx-auto text-center' src="https://cdn.pixabay.com/photo/2016/08/15/18/19/toyota-1596082_1280.png" alt="" />
                    </div>
                    <div className="md:p-10">
                        <img className='h-24 flex items-center justify-center mx-auto text-center' src="https://1000logos.net/wp-content/uploads/2021/04/Accenture-logo.png" alt="" />
                    </div>
                    <div className="md:p-10">
                        <img className='h-24 flex items-center justify-center mx-auto text-center' src="https://1000logos.net/wp-content/uploads/2021/05/Sony-logo.png" alt="" />
                    </div>
                    <div className="md:p-10">
                        <img className='h-24 flex items-center justify-center mx-auto text-center' src="https://static.vecteezy.com/system/resources/previews/021/671/890/original/bmw-logo-transparent-free-png.png" alt="" />
                    </div>
                    <div className="md:p-10">
                        <img className='h-24 flex items-center justify-center mx-auto text-center' src="https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20200716011427_2020-nissan-brand-logo.jpg&w=700&q=90&c=1" alt="" />
                    </div>
                    <div className="md:p-10">
                        <img className='h-24 flex items-center justify-center mx-auto text-center' src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Dell_Logo.svg/1024px-Dell_Logo.svg.png" alt="" />
                    </div>
                </Slider>
                </div>
            </div>
        )
    }
}
