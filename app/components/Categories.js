import Image from 'next/image';
import React from 'react';

function Categories() {
  return (
    <div className="text-center my-10 mt-20">
      {/* Heading */}
      <h1 className="font-bold font-rye text-4xl mb-6">Shop By Categories</h1>

      {/* Navigation */}
      <nav>
        <ul className="flex justify-center space-x-8 mb-8 text-3xl font-bodoni text-[#0000009E]">
          <li className="cursor-pointer">Earrings</li>
          <li className="cursor-pointer">Necklace</li>
          <li className="cursor-pointer">Bracelet</li>
          <li className="cursor-pointer">Rings</li>
        </ul>
      </nav>

      {/* Image Grid */}
      <div className="grid grid-cols-1 items-center md:grid-cols-2 gap-1 mx-24 mt-10">
        {/* Image 1 */}
        <div className="relative w-[482px] h-[300px] mx-28">
          <Image
            src={'/img1.jpg'}
            alt="img1"
            layout="fill"
            objectFit="cover"
          />
        </div>

        {/* Image 2 */}
        <div className="flex justify-between">
          <div className="relative w-[238px] h-[300px] left-[20px]">
            <Image
              src={'/img2.jpg'}
              alt="img2"
              layout="fill"
              objectFit="cover"
            />
          </div>

          {/* Image 3 */}
          <div className="relative w-[238px] h-[300px] left-[-70px]">
            <Image
              src={'/img3.jpg'}
              alt="img3"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>

        {/* Image 4 */}
        <div className="flex justify-between">
          <div className="relative w-[238px] h-[300px] right-[-110]">
            <Image
              src={'/img4.jpg'}
              alt="img4"
              layout="fill"
              objectFit="cover"
            />
          </div>

          {/* Image 5 */}
          <div className="relative w-[238px] h-[300px] right-[-18]">
            <Image
              src={'/img5.jpg'}
              alt="img5"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>

        {/* Image 6 */}
        <div className="relative w-[485px] h-[300px] left-[20px]">
          <Image
            src={'/img6.jpg'}
            alt="img6"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Categories;
