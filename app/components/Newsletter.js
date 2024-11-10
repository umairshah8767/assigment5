import React from 'react';
import Head from "next/head";

function Newsletter() {
  return (
    <div className="main mt-20">
          <Head>
    <link href="https://fonts.googleapis.com/css2?family=Libre+Bodoni&family=Rye&display=swap" rel="stylesheet" />
  </Head>
      <div className="text-center">
        <h1 className="text-5xl font-bodoni">Newsletter</h1>
        <h3 className="text-2xl font-bodoni text-gray-600 mt-8">
          Sign up to receive 10% off your next purchase. Plus, hear about new arrivals and offers.
        </h3>
      </div>

      <div className="flex justify-center items-center mt-5 ">
        <input
          type="text"
          className="w-96 h-9 px-4 border border-gray-300 text-[#A29875] rounded-l-lg"
          placeholder="                         Email Address"
          aria-label="Enter your email"
        />
        <button
          className="bg-[#A29875] w-36 h-9 rounded-r-lg m-4 text-white"
          aria-label="Subscribe to newsletter"
        >
          Subscribe
        </button>
      </div>
    </div>
  );
}

export default Newsletter;
