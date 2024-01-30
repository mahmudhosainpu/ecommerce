import React from 'react'
import Banner from './Banner';
import Category from './Category';
import Products from './Products';

export const Home = () => {
  return (
    <div className=''>
      {/* max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-10 xl:px-28 */}
        <Banner/>
        <Category/>
        <Products/>
    </div>
  )
}
export default Home;
