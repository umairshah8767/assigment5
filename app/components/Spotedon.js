import Image from 'next/image';
import React from 'react';

function Spotedon() {
  return (
    <div className="main mt-10">
      <div>
        <h1 className="text-5xl text-center font-bodoni">Spotted on</h1>
        <div className="flex justify-between mt-10 mx-10">
          <Image
            src="/R1.svg"
            width={300}
            height={400}
            alt="Spotted on R1" 
          />
          <Image
            src="/R2.svg"
            width={300}
            height={400}
            alt="Spotted on R2" 
          />
          <Image
            src="R3.svg"
            width={300}
            height={400}
            alt="Spotted on R3" 
          />
        </div>
      </div>
    </div>
  );
}

export default Spotedon;
