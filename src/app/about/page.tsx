import React from 'react';
import Image from "next/image";

const about = () => {
  return (
    <div className=" p-6 lg:p-24 space-y-52 lg:space-y-20 ">

      <div className=" flex items-center justify-center mt-24">

        <div className=" relative">
          <Image src="/assets/illustration.svg" alt="eye" width={400} height={400} ></Image>
        </div>

        <div className="flex flex-col lg:flex-row absolute p-8 lg:p-12 lg:space-x-32 mt-48 lg:mt-0 space-y-6 ">
          <div className="font-Caslon  text-3xl lg:text-6xl w-full lg:w-[30vw] space-y-4">
            <p>The Creative </p>
            <p>Impact</p>
          </div>

          <div className="font-Gothic  text-lg leading-[1.75] lg:text-md w-full lg:w-[45vw] space-y-6   ">
            <p>Since 2015, we have been a go-to creative agency for entities that seek crafting narratives that move, inspire and transform. Our vision is clear: Helping businesses build impact through innovative storytelling.
              At Pixel Eye, we give life to creative projects that amplify the client’s vision and mission. Through our services – branding, audio-visual production and campaign management – we shape brand images and build customer relationships that last a lifetime.
            </p>
            <h1 className="relative text-gold font-semibold ">WHAT'S YOUR STORY?</h1>
          </div>

        </div>

      </div>
      <div className="w-full">
        <Image
          src="/assets/about.jpg"
          alt="camera"
          width={1500}
          height={1500}
          layout="responsive"
        />
      </div>

    </div>

  );
}

export default about;
