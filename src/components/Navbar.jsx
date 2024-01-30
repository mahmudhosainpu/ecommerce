import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// react icons
import { IoSearch } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { IoMdMenu, IoMdClose } from "react-icons/io";


const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    const navItems = [
        { title: "Jewelry & Accessories", path: "/" },
        { title: "Clothing & Shoes", path: "/" },
        { title: "Home & Living", path: "/" },
        { title: "Wedding & Party", path: "/" },
        { title: "Toy & Entertainment", path: "/" },
        { title: "Art & Collectibles", path: "/" },
        { title: "Craft Supplies & Tools", path: "/" },
    ];

    return (
        <header className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-10 xl:px-28">
            <nav className="py-3 mx-auto flex justify-between items-center border-b ">
                <IoSearch className=' hidden md:block text-black text-3xl' />
                <a href="/" className="text-2xl font-serif">
                    Fashion.com
                </a>
                <div className="xl:flex gap-4 hidden ">
                    <a href="" className="flex gap-2 text-lg text-black hover:text-purple-900 items-center">
                        <FaUser className='' />Account
                    </a>
                    <a href="" className="flex gap-2 text-lg text-black hover:text-purple-900 items-center">
                        <FaBagShopping className='' />Shopping
                    </a>
                </div>

                {/* navbar for mobile */}
                <div className="items-center xl:hidden">
                    <button className='items-center' onClick={toggleMenu}>
                        {
                            menuOpen ?
                                <IoMdClose className='text-3xl text-black cursor-pointer' />
                                :
                                <IoMdMenu className='text-3xl text-black cursor-pointer' />
                        }
                    </button>
                </div>
            </nav>
            {/* categories for mobile */}
            <div className={`${menuOpen ? 'right-0 ' : 'right-[-100%]'} py-4 w-4/5 xs:w-4/6 sm:w-1/3 duration-500 fixed top-[57px] bg-black `}>
                <ul className="items-center  text-black">
                    {navItems.map(({ title, path }) => (
                        <li className='py-3 text-center text-white hover:text-purple-900 cursor-pointer' key={title}>
                            <Link to={path}>{title}</Link>
                        </li>
                    ))}
                </ul>
            </div>



            {/* Categories items for desktop */}
            <div className="py-4 hidden xl:block justify-between">
                <ul className="flex items-center justify-between text-black">
                    {navItems.map(({ title, path }) => (
                        <li className='hover:text-purple-900 cursor-pointer' key={title}>
                            <Link to={path}>{title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
}

export default Navbar;
