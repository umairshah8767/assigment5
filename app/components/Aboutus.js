import Image from 'next/image';
import React from 'react';

function Aboutus() {
  return (
    <section className="bg-[#A29875] py-16 px-8 mt-20">
      <div className="container mx-auto gap-20 flex flex-col md:flex-row  items-center justify-center md:justify-between space-y-8 md:space-y-0">
        
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/about.svg"
            width={643}
            height={422}
            alt="Illustration representing Purity's values and excellence"
            className="object-contain"
          />
        </div>
        
        {/* Text Section */}
        <div className="w-full md:w-1/2 flex flex-col items-center text-center space-y-4">
          <h1 className="text-3xl font-semibold text-white">About Us</h1>
          <p className="text-lg text-white">
            At Purity, we strive to deliver excellence consistently. Weve brought to the market a whole new
            standard of business ethics and product reliability.
          </p>
          <button className="bg-white text-[#A29875] py-2 px-6 rounded-md hover:bg-[#D8D2B5] transition-colors duration-300">
            View More
          </button>
        </div>
      </div>
    </section>
  );
}

export default Aboutus;
