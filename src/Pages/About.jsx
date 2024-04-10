import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { FaWarehouse } from 'react-icons/fa6';

import 'animate.css';
import { Helmet } from 'react-helmet-async';

const About = () => {
    return (
        <div className="container mx-auto lg:my-14 animate__animated animate__bounce">
            <Helmet>
                <title>ResiVibe || About Us</title>
            </Helmet>
            <div className="text-center p-4">
                <h2 className="text-2xl text-red-500 mb-8 font-poppins font-medium bg-gray-200 lg:w-[25%] mx-auto rounded-md">What are you looking for?</h2>
                <h2 className="text-2xl lg:text-3xl font-poppins font-semibold">Property In Most Popular Places</h2>
                <p className="text-xl font-poppins my-6 lg:my-10 lg:w-1/2 mx-auto">Perched atop the hills of Beverly Hills, this sprawling mansion boasts unparalleled luxury and privacy. With sweeping views of the city below, expansive outdoor spaces, and resort-style amenities including a pool, tennis court, and home theater,</p>
            </div>
            <div className="grid md:grid-cols-2  lg:grid-cols-3 gap-10">
                <div className=" card shadow-xl p-4 text-center space-y-4 border hover:bg-red-600 hover:transition hover:scale-105 hover:text-white">
                    <div className="mx-auto p-4 rounded-full bg-red-500 scale-75 w-20 h-20 flex justify-center items-center">
                    <FaWarehouse className=" text-4xl text-white"></FaWarehouse>
                    </div>
                    <h2 className="text-3xl font-poppins font-semibold">Modern Villa</h2>
                    <p className="text-xl font-poppins opacity-80 font-semibold"> This exquisite modern villa offers the epitome of contemporary luxury living. Boasting sleek architectural design and panoramic views of the surrounding landscape.</p>
                </div>
                <div className=" card shadow-xl p-4 text-center space-y-4 border hover:bg-red-600 hover:transition hover:scale-105 hover:text-white">
                    <div className="mx-auto p-4 rounded-full bg-red-500 scale-75 w-20 h-20 flex justify-center items-center">
                    <FaWarehouse className=" text-4xl text-white"></FaWarehouse>
                    </div>
                    <h2 className="text-3xl font-poppins font-semibold">Family House</h2>
                    <p className="text-xl font-poppins opacity-80 font-semibold">This charming house offers the perfect blend of comfort, convenience, and warmth, making it an ideal place for creating cherished memories with your loved ones.</p>
                </div>
                <div className=" card shadow-xl p-4 text-center space-y-4 border hover:bg-red-600 hover:transition hover:scale-105 hover:text-white">
                    <div className="mx-auto p-4 rounded-full bg-red-500 scale-75 w-20 h-20 flex justify-center items-center">
                    <FaWarehouse className=" text-4xl text-white"></FaWarehouse>
                    </div>
                    <h2 className="text-3xl font-poppins font-semibold">Town House</h2>
                    <p className="text-xl font-poppins opacity-80 font-semibold">Approaching our townhouse, you'll be greeted by a picturesque facade adorned with blooming flowers in window boxes and a welcoming front porch—a perfect spot for enjoying a morning cup of coffee </p>
                </div>
                <div className=" card shadow-xl p-4 text-center space-y-4 border hover:bg-red-600 hover:transition hover:scale-105 hover:text-white">
                    <div className="mx-auto p-4 rounded-full bg-red-500 scale-75 w-20 h-20 flex justify-center items-center">
                    <FaWarehouse className=" text-4xl text-white"></FaWarehouse>
                    </div>
                    <h2 className="text-3xl font-poppins font-semibold">Student Housing</h2>
                    <p className="text-xl font-poppins opacity-80 font-semibold">  Our student housing community is designed to provide a comfortable, convenient, and supportive environment where students can thrive academically, socially, and personally..</p>
                </div>
                <div className=" card shadow-xl p-4 text-center space-y-4 border hover:bg-red-600 hover:transition hover:scale-105 hover:text-white">
                    <div className="mx-auto p-4 rounded-full bg-red-500 scale-75 w-20 h-20 flex justify-center items-center">
                    <FaWarehouse className=" text-4xl text-white"></FaWarehouse>
                    </div>
                    <h2 className="text-3xl font-poppins font-semibold">Vacation Rentals</h2>
                    <p className="text-xl font-poppins opacity-80 font-semibold"> Escape to paradise with our luxurious vacation rentals at [ResiVibe]. Our properties offer the perfect blend of comfort, convenience, and relaxation for your next holiday.</p>
                </div>
                <div className=" card shadow-xl p-4 text-center space-y-4 border hover:bg-red-600 hover:transition hover:scale-105 hover:text-white">
                    <div className="mx-auto p-4 rounded-full bg-red-500 scale-75 w-20 h-20 flex justify-center items-center">
                    <FaWarehouse className=" text-4xl text-white"></FaWarehouse>
                    </div>
                    <h2 className="text-3xl font-poppins font-semibold">Apartment</h2>
                    <p className="text-xl font-poppins opacity-80 font-semibold"> Our apartment offers a modern oasis amidst the vibrant energy of urban life. Whether you're a young professional seeking convenience or a couple starting a new chapter..</p>
                </div>
                
            </div>

            <div className="text-center mt-12 lg:mt-40">
                <h2 className="text-2xl text-red-500 mb-8 font-poppins font-medium bg-gray-200 lg:w-[25%] mx-auto rounded-md">Popular Companies</h2>
                <h2 className="text-3xl font-poppins font-semibold">Our Best Partners</h2>
                <p className="text-xl font-poppins my-6 lg:my-10 lg:w-1/2 mx-auto">At <span className='text-red-400'>[ResiVibe]</span>, we value collaboration and strategic partnerships to deliver exceptional results for our clients. Our network of partners consists of industry leaders, innovative startups, and trusted service providers who share our commitment to excellence and client satisfaction.</p>
            </div>
            <div>
            <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className=" p-4 text-center flex flex-col lg:flex-row lg:gap-16 items-center justify-center text-red-400">
                    <h2 className="card shadow-xl text-3xl font-poppins font-semibold p-6">themeforest</h2>
                    <h2 className="card shadow-xl text-3xl font-poppins font-semibold p-6">codecanyon</h2>
                    <h2 className="card shadow-xl text-3xl font-poppins font-semibold p-6">audiojungle</h2>
                    <h2 className="card shadow-xl text-3xl font-poppins font-semibold p-6">envatomarket</h2>
                    
                    
                </div></SwiperSlide>
        <SwiperSlide>
            <div className=" p-4 text-center flex flex-col lg:flex-row lg:gap-16 items-center justify-center text-red-400">
                    <h2 className="card shadow-xl text-3xl font-poppins font-semibold p-6">videohibe</h2>
                    <h2 className="card shadow-xl text-3xl font-poppins font-semibold p-6">graphicriver</h2>
                    <h2 className="card shadow-xl text-3xl font-poppins font-semibold p-6">photodune</h2>
                    <h2 className="card shadow-xl text-3xl font-poppins font-semibold p-6">3docean</h2>
                    
                    
                </div></SwiperSlide>
        
        
      </Swiper>
    </>
            </div>
        </div>
          
    );
};

export default About;