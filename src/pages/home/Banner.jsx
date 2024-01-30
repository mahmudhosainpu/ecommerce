import React from 'react'
import { FaBagShopping } from "react-icons/fa6";


const Banner = () => {
    return (
        <div className='py-4 bg-primary md:pb-10 pl-4 sm:pl-6 md:pl-10 xl:pl-28'>
            <div className="flex flex-col-reverse sm:flex-row">
                <div className=" sm:ml-20 md:ml-28 2xl:ml-52 md:w-1/2 my-auto mx-auto">
                    <div className="w-fit  mx-auto justify-center flex flex-col gap-2 lg:gap-7">
                        <h1 className="text-3xl w-max mx-auto sm:mx-0 text-center sm:text-start lg:text-6xl font-light">Collection</h1>
                        <p className="w-4/5 capitalize text-center sm:text-start mx-auto sm:mx-0 lg:text-2xl leading-loose font-light">You can explore ans shop many different collection from various brands here.</p>
                        <button className="mx-auto sm:mx-0 w-max flex items-center gap-2 bg-black px-8 py-3 text-sm md:text-base text-white font-semibold rounded hover:bg-white hover:text-black border border-black duration-300 hover:shadow-lg">
                            <FaBagShopping />
                            Shop Now
                        </button>
                    </div>
                </div>

                <div className='mx-auto w-40 sm:w-1/2 md:w-[30%] '>
                    <img src="/banner2.png" alt="" className="w-max items-end " />
                </div>

            </div>
        </div>
    )
}

export default Banner