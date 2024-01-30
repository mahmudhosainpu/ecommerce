import React from 'react'

const Category = () => {

    const companyLogo = [
        { id: 1, img: "/companyLogo/logo1.png" },
        { id: 2, img: "/companyLogo/logo2.jpg" },
        { id: 3, img: "/companyLogo/logo3.jpeg" },
        { id: 4, img: "/companyLogo/logo4.jpeg" },
        { id: 5, img: "/companyLogo/logo5.jpeg" },
    ]


    return (
        <div className='py-10 max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-10 xl:px-28'>
            {/* Branch logo */}
            <div className="flex items-center justify-around flex-wrap gap-2 ">
                {
                    companyLogo.map(({ id, img }) => (
                        <div className="">
                            <img key={id} src={img} alt="" className="w-16 md:w-24 xl:w-32" />
                        </div>
                    ))
                }
            </div>

            <div className="py-10 sm:flex">
               <div className=" justify-center flex">
                 <p className="font-light text-xl md:text-2xl uppercase sm:-rotate-90 w-fit my-auto text-center"><p>Explore New And</p> Popular Style </p>
               </div>
                <div className="pt-2 flex sm:w-8/12 md:w-full justify-center mx-auto">
                    <img src="/model/model1.jpg" alt="" className="w-1/2 p-0.5 md:p-1 cursor-pointer hover:scale-105 transition-all" />
                    <div className="grid  grid-cols-2 ">
                        <img src="/model/model2.jpg" alt="" className=" p-0.5 md:p-1 cursor-pointer hover:scale-105 transition-all" />
                        <img src="/model/model3.jpg" alt="" className=" p-0.5 md:p-1 cursor-pointer hover:scale-105 transition-all" />
                        <img src="/model/model4.jpg" alt="" className=" p-0.5 md:p-1 cursor-pointer hover:scale-105 transition-all" />
                        <img src="/model/model5.jpg" alt="" className=" p-0.5 md:p-1 cursor-pointer hover:scale-105 transition-all" />
                    </div>
                </div>



            </div>




        </div>
    )
}

export default Category