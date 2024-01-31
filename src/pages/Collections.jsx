import React from 'react'

const Collections = () => {
    return (
        <div className='py-10 bg-primary'>
            <div className="text-black mx-auto my-auto w-fit">
                <div className="w-fit  mx-auto justify-center flex flex-col gap-2 lg:gap-7">
                    <h1 className="text-3xl w-fit mx-auto sm:mx-0 text-center sm:text-start lg:text-6xl">Collection</h1>
                    <p className="w-4/5 capitalize text-center sm:text-start mx-auto sm:mx-0 lg:text-2xl leading-loose font-light">You can explore ans shop many different collection from various brands here.</p>
                    <button className="mx-auto sm:mx-0 w-max flex items-center gap-2 bg-black px-8 py-3 text-sm md:text-base text-white font-semibold rounded hover:bg-white hover:text-black border border-black duration-300 hover:shadow-lg">
                        {/* <FaBagShopping /> */}
                        Shop Now
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Collections