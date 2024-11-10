import Image from 'next/image';
import React from 'react';
import Head from 'next/head';

function Shipping() {
  return (
    <div className="flex justify-between items-start space-x-6 mt-8 p-20 mx-6 md:mx-0">
      {/* Google Font Plyfire (added in Head) */}
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Plyfire&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* Shipping Item 1 */}
      <div className="flex flex-col items-center w-full sm:w-[200px] md:w-[300px]">
        <Image src={'/SVG.svg'} width={53} height={53} alt="Shipping Worldwide" />
        <h3 className="font-bold font-bodoni text-lg mt-3">Shipping Worldwide</h3>
        <p className="text-sm mt-2 text-center font-plyfire">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      </div>

      {/* Shipping Item 2 */}
      <div className="flex flex-col items-center w-full sm:w-[200px] md:w-[300px]">
        <Image src={'/SVG2.svg'} width={53} height={53} alt="14 Days Return" />
        <h3 className="font-bold font-bodoni text-lg mt-3">14 Days Return</h3>
        <p className="text-sm mt-2 text-center font-plyfire">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      </div>

      {/* Shipping Item 3 */}
      <div className="flex flex-col items-center w-full sm:w-[200px] md:w-[300px]">
        <Image src={'/SVG1.svg'} width={53} height={53} alt="Security Payment" />
        <h3 className="font-bold font-bodoni text-lg mt-3">Security Payment</h3>
        <p className="text-sm mt-2 text-center font-plyfire">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      </div>
    </div>
  );
}

export default Shipping;
