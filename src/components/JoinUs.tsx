import React from 'react';
import Image from 'next/image';
import Link from "next/link";

const JoinUs = () => {
  return (
    <div className="  p-8 lg:p-20 relative  h-[300px] lg:h-[450px] bg-menuBg">



      <div className=" flex items-center justify-center ">

        <div className=" relative">
          <Image src="/assets/17svg.svg" alt="eye" width={300} height={300} />
        </div>

      </div>

      <div className="font-Caslon space-y-8  absolute top-10 lg:top-32  mr-2 lg:mr-0  ">
        <div className="">
          <p className=" font-Caslon text-3xl lg:text-5xl ">We are looking for dynamic</p>
          <p className=" font-Caslon text-3xl lg:text-5xl  "> and creative minds to join our team. </p>
        </div>
        <div>
        <Link href='/joinus' className=''>
          <button className='font-Gothic bg-white text-black p-4 px-8 ' > Join us Today</button>
        </Link>
        </div>
        

      </div>

    </div>
  );
}

export default JoinUs;
