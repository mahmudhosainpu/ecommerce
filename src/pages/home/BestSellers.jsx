import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { data } from 'autoprefixer';

const BestSellers = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("products.json").then(res => res.json()).then(data => setProducts(data))
    }, []);

    const bestSellers = products.filter((item) => item.status === "Best Selers");

    return (
        <div className='py-20 max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-10 xl:px-28'>
            <div className="">
                <h1 className="text-black font-semibold text-2xl md:text-3xl text-center">Best Saller</h1>
                <p className="pt-4 text-black text-center capitalize md:w-1/2 mx-auto">After this preliminary, general considerations on what automations and tools you can rely on to write and optimize product titles?</p>

                {/* Best Seller products cards */}

                <div className="pt-10">

                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                        breakpoints={{
                            300: {
                              slidesPerView: 1, // 1 slide for mobile devices
                            },
                            640: {
                              slidesPerView: 2, // 2 slides for tablets
                            },
                            768: {
                              slidesPerView: 3, // 4 slides for desktop
                            },
                            1024: {
                              slidesPerView: 4, // 4 slides for desktop
                            },
                          }}
                    >

                        {
                            bestSellers.map((products) => (
                                <SwiperSlide key={products.id} className=' py-10'>
                                    <div className="shadow-md hover:scale- duration-300 cursor-pointer">
                                        <Link to={`/shop/${products.id}`}>
                                            <img src={products.image} alt="" className="w-full h-[330px] object-cover" />
                                        </Link>
                                        <div className="py-4 px-4 capitalize">
                                            <h3 className="text-lg text-black font-semibold capitalize line-clamp-1">{products.title}</h3>
                                            <div className="mt-2 flex justify-between">
                                                <p className="text-black text-opacity-50">{products.category}</p>
                                                <p className="font-semibold text-purple-600">${products.price}</p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                        }




                    </Swiper>
                </div>


            </div>
        </div>
    )
}

export default BestSellers