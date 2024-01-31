import React, { useEffect, useState } from 'react';
import { FaFilter } from 'react-icons/fa6';
import Cards from '../../components/Cards';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [filteredItemsList, setFilteredItemsList] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [sortOption, setSortOption] = useState('default');

    // Cards items
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/products.json');
                const data = await response.json();
                // console.log(data)
                setProducts(data);
                setFilteredItemsList(data);
            } catch (error) {
                console.log('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    // filtering function
    const filterItems = (category) => {
        const filtered = category === 'all' ? products : products.filter((item) => item.category === category);

        setFilteredItemsList(filtered);
        setSelectedCategory(category);
    };

    // show all products
    const showAll = () => {
        setFilteredItemsList(products);
        setSelectedCategory('all');
    };

    // sorting products functionality
    const handleSortChange = (option) => {
        setSortOption(option);

        // logics for solting
        let sortedItems = [...filteredItemsList]

        switch (option) {
            case "A-Z":
                sortedItems.sort((a, b) => a.title.localeCompare(b.title));
                break;
            case "Z-A":
                sortedItems.sort((a, b) => b.title.localeCompare(a.title));
                break;
            case "low-to-high":
                sortedItems.sort((a, b) => a.price - b.price);
                break;
            case "high-to-low":
                sortedItems.sort((a, b) => b.price - a.price);
                break;
            default:
                break;
        }
        setFilteredItemsList(sortedItems);
    }





    return (
        <div className="pb-20 max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-10 xl:px-28">
            <h1 className="capitalize text-2xl sm:text-3xl text-center text-black font-semibold my-8">
                Or subscribe to newsletter
            </h1>

            <div className="sm:flex justify-between items-center space-y-4 sm:space-y-0">
                {/* Cagegory Button */}
                <div className="space-x-10 flex flex-wrap">
                    <button onClick={showAll} className="font-semibold">
                        All Products
                    </button>
                    <button onClick={() => filterItems('dress')} className="font-semibold">
                        Clothing
                    </button>
                    <button onClick={() => filterItems('bag')} className="font-semibold">
                        Bag
                    </button>
                    <button onClick={() => filterItems('shoes')} className="font-semibold">
                        Shoes
                    </button>
                </div>

                {/* sorting products */}
                <div className="flex justify-end">
                    <div className="rounded flex items-end bg-black sm:w-fit cursor-pointer">
                        <div className="pb-2.5 pl-2 w-fit items-center">
                            <FaFilter className="text-white text-base sm:text-xl my-auto" />
                        </div>
                        <div className="">
                            <select
                                id='sort'
                                onChange={(e) => handleSortChange(e.target.value)}
                                className="text-xs sm:text-sm xl:text-base bg-black cursor-pointer text-white outline-none px-4 py-3 rounded-r"
                                value={sortOption}
                            >
                                <option value="default">Default</option>
                                <option value="A-Z">A-Z</option>
                                <option value="Z-A">Z-A</option>
                                <option value="low-to-high">Low to High</option>
                                <option value="high-to-low">High to Low</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            {/* Product cards */}
            <div className="pt-20 ">
                <Cards filteredItems={filteredItemsList} />
            </div>
        </div>
    );
};

export default Products;
