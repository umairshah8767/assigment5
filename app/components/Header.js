import React from 'react';
import Head from "next/head";
import { FaRegHeart, FaRegUser, FaSearch } from 'react-icons/fa'; 
import { BsCart3 } from "react-icons/bs";

function Header() {
  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Libre+Bodoni&family=Rye&display=swap" rel="stylesheet" />
      </Head>
      <div className="main flex flex-col md:flex-row justify-between items-center bg-[#A29875] px-6 md:px-12 py-4 w-full"> {/* Responsive padding */}
        
      
        <h1 className="font-rye text-3xl sm:text-4xl text-white mb-4 md:mb-0">
          MANZZARI
        </h1>

        <div className="relative w-full md:w-[769.89px]">
          <input
            type="text"
            className="w-full h-[40px] rounded-xl text-left font-nunito text-[18.68px] font-normal leading-[25.48px] placeholder:text-[#6C757D] pl-10"
            placeholder="Search for Gold Jewellery, Diamond Jewellery and more..."
          />
          <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#6C757D] text-lg cursor-pointer" />
        </div>

        {/* Icons section */}
        <div className="flex space-x-6 mt-4 md:mt-0">
          <FaRegHeart className="text-white text-2xl cursor-pointer" />
          <FaRegUser className="text-white text-2xl cursor-pointer" />
          <BsCart3 className="text-white text-2xl cursor-pointer" />
        </div>
      </div>
    </>
  );
}

export default Header;
