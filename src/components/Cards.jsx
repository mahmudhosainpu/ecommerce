import React from 'react'
import { Link } from 'react-router-dom'

const Cards = ({ filteredItems }) => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4'>
            {
                filteredItems.slice(0,6).map((item) => (
                    <div key={item.id} className="shadow-md hover:scale-105 duration-300 cursor-pointer">
                        <Link to={`/shop/${item.id}`}>
                            <img src={item.image} alt="" className="w-full sm:h-[330px] object-cover" />
                        </Link>
                        <div className="py-4 px-4 capitalize">
                            <h3 className="text-lg text-black font-semibold capitalize line-clamp-1">{item.title}</h3>
                            <div className="mt-2 flex justify-between">
                                <p className="text-black text-opacity-50">{item.category}</p>
                                <p className="font-semibold text-purple-600">${item.price}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Cards