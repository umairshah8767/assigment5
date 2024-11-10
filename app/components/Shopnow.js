import Image from 'next/image';
import React from 'react';

function Shopnow() {
  return (
    <div className="w-full h-[550px] flex bg-[#a29875] p-4 md:p-10 mt-28">
      {/* First Div: 50% width with an Image */}
      <div className="w-full md:w-1/2 h-full py-0   ">
        <Image className='m-[-40]'
          src="/lookbook-3.jpg.svg" // Replace with your image source
          alt="Jewelry"
          width={435}
          height={300} 
         
        />
      </div>

      {/* Second Div: 25% width with Text and Button */}
      <div className="w-full md:w-1/4 flex flex-col justify-center items-center text-center p-4">
        <h1 className="font-bodoni text-3xl md:text-4xl font-normal leading-[50px] text-[#fafaf9] mb-4">
          Jewelry for Every Occasion
        </h1>
        <button className="bg-white text-[#A29875] w-[239.08px] h-[66px] ">
          Shop Now
        </button>
      </div>

      {/* Third Div: 25% width with two images */}
      <div className="w-full md:w-1/4 relative flex justify-center items-center">
        {/* Centered Image */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Image
            src="/banner-30.jpg.png" // Replace with your centered image source
            alt="Center Image"
            width={350}
            height={448}
            
          />
        </div>

        {/* Right-Bottom Image */}
        <div className="absolute bottom-0 right-0 mb-[-40] mr-[-40]">
          <Image
            src="/image.svg" // Replace with your bottom-right image source
            alt="Right Bottom Image"
            width={200}
            height={336}
            
          />
        </div>
      </div>
    </div>
  );
}

export default Shopnow;
