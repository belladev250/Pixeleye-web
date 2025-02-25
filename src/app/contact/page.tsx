import React from "react";
import Image from "next/image";

const Contact = () => {
  return (
    <div>
      <div className="p-24 space-y-32 h-[430px] lg:h-[480px] relative flex items-center justify-center">

        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Image src="/assets/illustration.svg" alt="eye" width={400} height={400} />
        </div>

        <div className="absolute left-12 lg:left-24 flex flex-col text-left space-y-4">
          <p className="font-Caslon text-4xl lg:text-8xl w-full lg:w-[40vw]">
            Contact Us
          </p>
          <p className="font-Gothic text-lg lg:text-xl w-full lg:w-[45vw] mt-10">
            We would love to hear your story today - Let’s connect!
          </p>
        </div>
      </div>
      
      <hr className="absolute left-0 w-full border-navBorder " />

      <div className="p-24">


        {/* ADDRESSES */}

        <div className="left-12 lg:left-24 flex flex-col text-left space-y-4">
          <p className="font-Caslon text-2xl text-gold lg:text-4xl w-full lg:w-[40vw]">
            Our Address
          </p>
          <p className="font-Gothic text-lg lg:text-xl w-full lg:w-[45vw] mt-10">
            Gasabo, Kimuhurura, KG 7 Ave, Kigali
          </p>
          <p className="font-Gothic text-lg lg:text-xl w-full lg:w-[45vw] mt-10">
            Kigali Height Fifth Floor- West Wing
          </p>
        </div>

        {/* CONTACTS */}

        <div className="left-12 lg:left-24 flex flex-col text-left space-y-4 mt-24">
          <p className="font-Caslon text-2xl text-gold lg:text-4xl w-full lg:w-[40vw]">
            Our Contacts
          </p>
          <p className="font-Gothic text-lg lg:text-xl w-full lg:w-[45vw] mt-10">
            info@pixeleye.rw
          </p>
          <p className="font-Gothic text-lg lg:text-xl w-full lg:w-[45vw] mt-10">
            +250-786-977-003
          </p>
        </div>

      </div>

      <div className="p-24 space-y-16 h-[430px] lg:h-[480px] relative flex items-center justify-center bg-menuBg">

        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Image src="/assets/17svg.svg" alt="eye" width={400} height={400} />
        </div>

        <div className="absolute left-12 lg:left-24 flex flex-col text-left space-y-6">
          <p className="font-Caslon text-3xl font-regular lg:text-6xl w-full lg:w-[55vw]">
          We have great potential, and all you can think of now is;
          get in <span className="text-gold">partneship</span> with us
          </p>
          <button className="bg-white w-[200px] h-[50px] text-menuBg font-Gothic">Email Us</button>
        </div>
      </div>


    </div>
  );
};

export default Contact;
