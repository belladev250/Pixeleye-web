import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram, FaXTwitter } from 'react-icons/fa6';
import { SlSocialLinkedin, SlSocialYoutube } from 'react-icons/sl';


const Footer = () => {
  return (
       
    <div className="bg-navColor relative">
    <div className="p-20">
    <div className="flex flex-wrap items-center justify-center gap-4 text-center md:justify-between">
  <Link href="/about" className="font-Gothic font-light text-lg text-white">About</Link>
  <Link href="/portfolio" className="font-Gothic font-light text-md text-white">Portfolio</Link>
  <Link href="/services" className="font-Gothic font-light text-md text-white">Services</Link>

  
  <Link href="/" className="order-first md:order-none">
    <Image src="/assets/logo.svg" alt="logo" width={130} height={130} className="flex-shrink-0" />
  </Link>

  <Link href="/stories" className="font-Gothic font-light text-md text-white">Stories</Link>
  <Link href="/joinus" className="font-Gothic font-light text-md text-white">Join Us</Link>
  <Link href="/contact" className="font-Gothic font-light text-md text-white">Contact Us</Link>
</div>

  
      <hr className="w-auto border-navBorder mt-10" />
  
      <div className="flex items-center mt-12 justify-center text-lg space-x-6 font-light cursor-pointer">
        <a href="https://www.instagram.com/pixeleye_rw/" target="_blank" className="border rounded-full p-2"><FaInstagram /></a>
        <a href="https://www.linkedin.com/company/pixeleye-ltd/" target="_blank" className="border rounded-full p-2"><SlSocialLinkedin /></a>
        <a href="https://x.com/PixelEye_rw" target="_blank" className="border rounded-full p-2"><FaXTwitter /></a>
        <a href="https://www.youtube.com/@pixeleye." target="_blank" className="border rounded-full p-2"><SlSocialYoutube /></a>
      </div>
  
      <footer className="font-Gothic text-center mt-6">
        <p>© 2025 Pixeleye, 2012-2025.</p>
        <p>We love our customers!</p>
      </footer>
    </div>
  
    {/* Full-Width <hr> Below the Copyright */}
    <hr className="absolute left-0 bottom-8 w-full border-navBorder " />
  </div>
  
  )
}

export default Footer;
