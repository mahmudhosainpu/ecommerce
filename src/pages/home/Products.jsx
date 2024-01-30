import React, { useEffect, useState } from 'react'
import { FaFilter } from "react-icons/fa6";
import Cards from '../../components/Cards';

const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/products.json");
                const data = await response.json();
                // console.log(data)
                setProducts(data)
            } catch (error) {
                console.log("Error fetching data:", error)
            }
        }
        fetchData();
    }, [])


    return (
        <div className='pb-20 max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-10 xl:px-28'>
            <h1 className="capitalize text-2xl sm:text-3xl text-center text-black font-semibold my-8">Or subscribe to newsletter</h1>


            <div className=" sm:flex justify-between items-center space-y-4 sm:space-y-0">
                <div className=" space-x-10 flex flex-wrap">
                    <button className='font-semibold'>All Products</button>
                    <button className='font-semibold'>T-Shirt</button>
                    <button className='font-semibold'>Hoodis </button>
                    <button className='font-semibold'>Bag </button>
                </div>
                <div className=" flex justify-end">
                    <div className="rounded flex items-end bg-black sm:w-fit cursor-pointer">
                        <div className="pb-2.5 pl-2 w-fit items-center">
                            <FaFilter className=' text-white text-base sm:text-xl my-auto ' />
                        </div>
                        <div className="">
                            <select className='text-xs sm:text-sm xl:text-base bg-black cursor-pointer text-white outline-none px-4 py-3 rounded-r '>
                                <option value="defult">Defult</option>
                                <option value="A-Z">A-Z</option>
                                <option value="Z-A">Z-A</option>
                                <option value="low-to-high">Low to High</option>
                                <option value="high-to-low">High to Law</option>
                            </select>
                        </div>
                    </div>
                </div>


            </div>

            {/* Product carts */}
            <div className="pt-20 ">


                <Cards  filteredItems={products} />


            </div>


        </div>
    )
}

export default Products