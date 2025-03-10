import React from 'react';
import Image from 'next/image';

const JoinUs = () => {
  return (
    <div className="  p-20 relative  h-[300px] lg:h-[450px] bg-menuBg">

       

      <div className=" flex items-center justify-center ">

        <div className=" relative">
        <Image src="/assets/17svg.svg" alt="eye" width={300} height={300} />
        </div>
         
      </div>

      <div className="font-Caslon space-y-10  absolute top-32 ">
        <div className="">
            <p className=" font-Caslon text-5xl  ">We are looking for dynamic</p>
            <p  className=" font-Caslon text-5xl  "> and creative minds to join our team. </p>
        </div>

            <button className='font-Gothic bg-white text-black p-4 px-8 ' > Join us Today</button>

            
            </div>
             
    </div>
  );
}

export default JoinUs;
