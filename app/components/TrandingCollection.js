import Image from 'next/image';
import React from 'react';

function TrandingCollection() {
  return (
    <>
      <div className='text-center'>
        <h1 className='text-5xl font-rye font-bold mb-10'>
          Trendy Collection
        </h1>

        {/* Main container for the collection */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mx-4 md:mx-20 mt-10'>
          {/* Collection Item 1 */}
          <div className='flex flex-col items-center'>
            <Image
              src={'/Component 17.svg'}
              width={250}
              height={400}
              alt='Cable Chain Chokar'
            />
            <h1 className='font-bodoni text-2xl text-[#938965] mt-4 text-right'>
              Cable Chain Chokar
              ₹20,000
            </h1>
          </div>

          {/* Collection Item 2 */}
          <div className='flex flex-col items-center'>
            <Image
              src={'/Component 23.svg'}
              width={250}
              height={479}
              alt='Cable Chain Chokar'
            />
            <h1 className='font-bodoni text-2xl text-[#938965] mt-4 text-right'>
              Cable Chain Chokar
              ₹20,000
            </h1>
          </div>

          {/* Collection Item 3 */}
          <div className='flex flex-col items-center'>
            <Image
              src={'/Component 21.svg'}
              width={250}
              height={479}
              alt='Cable Chain Chokar'
            />
            <h1 className='font-bodoni text-2xl text-[#938965] mt-4 text-right'>
              Cable Chain Chokar
              ₹20,000
            </h1>
          </div>

          {/* Collection Item 4 */}
          <div className='flex flex-col items-center'>
            <Image
              src={'/Component 22.svg'}
              width={250}
              height={479}
              alt='Cable Chain Chokar'
            />
            <h1 className='font-bodoni text-2xl text-[#938965] mt-4 text-right'>
              Cable Chain Chokar
              ₹20,000
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default TrandingCollection;
