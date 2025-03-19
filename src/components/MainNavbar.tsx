import React, { useEffect, useState } from 'react'
import { IoIosClose } from "react-icons/io";
import { FaInstagram } from "react-icons/fa6";
import { SlSocialLinkedin } from "react-icons/sl";
import { FaXTwitter } from "react-icons/fa6";
import { SlSocialYoutube } from "react-icons/sl";
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from "framer-motion";

const MainNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  
  const handleClick = () => {
    setIsOpen(false)
  }

  useEffect(() => {
    // Prevent scrolling more thoroughly when menu is open
    if (isOpen) {
      // Lock the body and html elements
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100%';
      document.documentElement.style.overflow = 'hidden';
      document.documentElement.style.height = '100%';
      
      // Save the current scroll position
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
    } else {
      // Restore scrolling when menu is closed
      const scrollY = document.body.style.top;
      document.body.style.overflow = '';
      document.body.style.height = '';
      document.documentElement.style.overflow = '';
      document.documentElement.style.height = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      
      // Restore scroll position
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
      }
    }
    
    return () => {
      // Cleanup function to restore scroll in case component unmounts
      document.body.style.overflow = '';
      document.body.style.height = '';
      document.documentElement.style.overflow = '';
      document.documentElement.style.height = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
    };
  }, [isOpen]);

  // Animation variants
  const menuVariants = {
    hidden: { 
      opacity: 0,
      y: "-100vh",
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 20,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      y: "-100vh",
      transition: {
        ease: "easeInOut",
        duration: 0.5,
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        ease: "easeInOut",
        duration: 0.3
      }
    }
  };

  const logoAnimation = {
    initial: { opacity: 0, x: -20 },
    animate: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const menuButtonAnimation = {
    initial: { opacity: 0, x: 20 },
    animate: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    },
    tap: { scale: 0.9 }
  };

  const socialIconVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
        delay: 0.3 + (i * 0.1)
      }
    }),
    hover: { 
      scale: 1.1,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    tap: { scale: 0.9 }
  };

  const menuItems = ['About', 'Portfolio', 'Services', 'Stories', 'Contact', 'Join Us'];
  const socialIcons = [
    { Icon: FaInstagram, link: 'https://www.instagram.com/pixeleye_rw/' },
    { Icon: SlSocialLinkedin, link: 'https://www.linkedin.com/company/pixeleye-ltd/' },
    { Icon: FaXTwitter, link: 'https://x.com/PixelEye_rw' },
    { Icon: SlSocialYoutube, link: 'https://www.youtube.com/@pixeleye.' }
  ];

  return (
    <div className={`${isOpen ? 'fixed inset-0 z-50' : ''}`}>
      <motion.div 
        className="z-50 absolute top-0 left-0 right-0 mx-auto flex justify-between p-8 lg:p-10 w-full"
        initial="initial"
        animate="animate"
      >
        <Link href='/' onClick={handleClick}>
          <motion.div variants={logoAnimation}>
            <Image 
              src="/assets/logo.svg" 
              alt="logo" 
              width={130} 
              height={130} 
              className='cursor-pointer flex-shrink-0'
            />
          </motion.div>
        </Link>
        
        {isOpen ? (
          <motion.div
            variants={menuButtonAnimation}
            whileTap="tap"
          >
            <Image  
              alt="" 
              src="/assets/cross.svg"  
              width={30} 
              height={30} 
              className='cursor-pointer'  
              onClick={toggleMenu} 
              aria-label="Close Menu" 
              aria-expanded={isOpen}
            />
          </motion.div>
        ) : (
          <motion.div
            variants={menuButtonAnimation}
            whileTap="tap"
          >
            <Image 
              src='/assets/menu.svg' 
              alt='menu' 
              height={40} 
              width={40} 
              onClick={toggleMenu} 
              className='cursor-pointer'
              aria-label="Open Menu" 
              aria-expanded={isOpen}
            />
          </motion.div>
        )}
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav 
            className='z-30 fixed inset-0 flex items-center justify-center bg-menuBg h-screen w-full'
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <ul className='text-4xl lg:text-5xl font-Caslon text-center space-y-6 -mt-52 lg:mt-24'>
              {menuItems.map((item, index) => (
                <motion.li 
                  key={index} 
                  onClick={handleClick}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href={`/${item.toLowerCase().replace(' ','')}`}>{item}</Link>
                </motion.li>
              ))}
              
              <motion.div 
                className="flex text-lg space-x-4 -ml-4 font-light cursor-pointer justify-center mt-6"
                variants={itemVariants}
              >
                {socialIcons.map(({ Icon, link }, i) => (
                  <motion.a 
                    key={i}
                    href={link} 
                    target='_blank' 
                    className='border rounded-full p-2'
                    custom={i}
                    variants={socialIconVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <Icon />
                  </motion.a>
                ))}
              </motion.div>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  )
}

export default MainNavbar;