import React from 'react';

function Footer() {
  return (
    <>
    <div className="bg-[#A29875] text-white font-bodoni py-10">
      <div className="container mx-auto px-4 md:px-8 flex flex-wrap justify-between ">
        {/* MY ACCOUNT */}
        <div className="w-full md:w-1/4">
          <h1 className="text-xl font-bold mb-4">MY ACCOUNT</h1>
          <ul>
            <li className="mb-2">Career at Eldy</li>
            <li className="mb-2">About us</li>
            <li className="mb-2">Sustainability</li>
            <li className="mb-2">Press</li>
          </ul>
        </div>

        {/* HELP */}
        <div className="w-full md:w-1/4">
          <h1 className="text-xl font-bold mb-4">HELP</h1>
          <ul>
            <li className="mb-2">FAQ</li>
            <li className="mb-2">Shipping</li>
            <li className="mb-2">Returns</li>
            <li className="mb-2">Order Status</li>
          </ul>
        </div>

        {/* FOLLOW US */}
        <div className="w-full md:w-1/4">
          <h1 className="text-xl font-bold mb-4">Follow Us On</h1>
          <ul>
            <li className="mb-2">Twitter</li>
            <li className="mb-2">Facebook</li>
            <li className="mb-2">Google Plus</li>
            <li className="mb-2">Instagram</li>
          </ul>
        </div>

        {/* ABOUT US (Contact info) */}
        <div className="w-full md:w-1/4">
          <h1 className="text-xl font-bold mb-4">Contact Us</h1>
          <ul>
            <li className="mb-2">Email: purity_jewel@gmail.com</li>
            <li className="mb-2">Phone: 0987654321</li>
          </ul>
        </div>
      </div>
      
    </div>
    <div className='bg-[#504933] h-[34px]'></div>
    </>
  );
}

export default Footer;
