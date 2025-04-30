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
        <div className="space-y-2">
          <p className=" font-Caslon text-3xl lg:text-5xl ">Let’s Build Something Meaningful</p>
          <p className=" font-Caslon text-3xl lg:text-5xl  ">Contact Us Today.</p>
        </div>
        <div>
        <Link href='/contact' className=''>
          <button className='font-Gothic bg-white text-black p-4 px-8 ' >Contact Us</button>
        </Link>
        </div>
        

      </div>

    </div>
  );
}

export default JoinUs;
