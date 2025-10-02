'use client'
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import Link from "next/link";
import Lenis from '@studio-freight/lenis';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const slides = [
    { video: '/PxEvids/Videos/jibu.mp4', text: 'JIBU', desc: 'Driving Change Through Communication', link: '/project/jibu' },
    { video: '/PxEvids/Videos/aegis.mp4', text: 'AEGIS', desc: 'The "Stories Of Peace" book', link: '/project/aegis' },
    { video: '/PxEvids/Videos/hanga-pitch.mp4', text: 'HANGA PITCHFEST', desc: 'Campaign Creative Direction', link: '/project/hanga-pitchfest' },
    { video: '/PxEvids/Videos/youth.mp4', text: 'YOUTH CONNEKT AFRICA 2024', desc: 'Campaign Creative Direction', link: '/project/youth-connekt' },
    { video: '/PxEvids/Videos/ceremony.mp4', text: '250 PODCAST', desc: 'Identity Development & Training Coordination', link: '/project/250-podcast' },
    { video: '/PxEvids/Videos/hanga-hubs.mp4', text: 'HANGA HUBS', desc: 'Campaign Creative Direction', link: '/project/hanga-pitchfest' },
    { video: '/PxEvids/Videos/rwandafoam.mp4', text: 'RWANDAFOAM', desc: 'Brand Revival Implementation', link: '/project/rwandafoam' },
    { video: '/PxEvids/Videos/srh.mp4', text: 'HANGA SRH', desc: 'Campaign Creative Direction', link: '/project/hanga-pitchfest' },
  ]

  // Initialize smooth scrolling with Lenis
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    setIsLoaded(true);

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 17000); // slideshow is gonna take 15 seconds 

    return () => {
      clearInterval(interval); // clear the interval to prevent a leak 
    }
  }, [slides.length]);



// Reset and play video once the slide changes
  useEffect(() => {
    console.log('🔄 Slide changed to:', currentSlide, slides[currentSlide].video);
    
    // Small delay to ensure video element is mounted
    const timer = setTimeout(() => {
      const video = videoRef.current;
      
      if (!video) {
        console.error('❌ No video ref! Video element not mounted.');
        return;
      }

      console.log('📹 Video ref exists:', video);
      console.log('📹 Current src:', video.src);
      console.log('📹 Video readyState:', video.readyState);

      // Force set the src and load
      const videoSrc = slides[currentSlide].video;
      if (video.src !== window.location.origin + videoSrc) {
        console.log('🔄 Setting new video src:', videoSrc);
        video.src = videoSrc;
      }
      
      video.muted = true;
      video.playsInline = true;
      video.load(); // Force reload
      
      console.log('📹 After load - readyState:', video.readyState);
      

      const playVideo = async () => {
        try {
          video.currentTime = 0;
          console.log('🎬 Attempting to play...');
          await video.play();
          console.log('✅ Playing successfully!');
        } catch (error:any) {
          console.error('❌ Play failed:', error.name, error.message);
          
          // Try one more time after a brief delay
          setTimeout(() => {
            video.play().catch(e => console.error('Retry failed:', e));
          }, 500);
        }
      };

      // Wait for video to be ready
      if (video.readyState >= 3) {
        console.log('✅ Video already loaded, playing now');
        playVideo();
      } else {
        console.log('⏳ Waiting for video to load...');
        video.addEventListener('canplay', () => {
          console.log('✅ Video canplay event fired');
          playVideo();
        }, { once: true });
        
        // Timeout fallback
        setTimeout(() => {
          if (video.readyState < 3) {
            console.warn('⚠️ Video still not ready after 3s, readyState:', video.readyState);
          }
        }, 3000);
      }
    }, 200);

    return () => {
      clearTimeout(timer);
      if (videoRef.current) {
        videoRef.current.pause();
      }
    };
  }, [currentSlide]);




  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }

    // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 }
    }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 }
    }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const textReveal = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const scaleUp = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.7 }
    }
  };

  const imageHover = {
    rest: { scale: 1, transition: { duration: 0.4 } },
    hover: { scale: 1.03, transition: { duration: 0.4 } }
  };

  return (
    <motion.div
      className="overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <main>
        <div className="relative w-full h-[90vh] lg:h-[100vh]">
          <div className="absolute inset-0 bg-black opacity-50"></div>

          {/* Video section */}
          <AnimatePresence mode="wait">
            {slides.map((slide, index) => index == currentSlide ? (
              <motion.div
                key={index}
                className="absolute inset-0 w-full h-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
              >

                <video
                  ref={videoRef}
                  key={slide.video}
                  muted
                  playsInline={true}
                  className="w-full h-full object-cover"
                  autoPlay
                  preload="auto"
                >
                  <source src={slide.video} type="video/mp4" />
                  
                </video>

                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/60 z-10"></div>

                <div className="absolute bottom-8 w-full flex flex-col lg:flex-row lg:items-center justify-between p-6 z-20 md:p-10">
                  <motion.div
                    className="w-full lg:w-[45vw] space-y-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                  >
                    <motion.div
                      className="flex space-x-2 lg:space-x-4"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.7, delay: 0.5 }}
                    >
                      <Link href={slide.link}>
                        <h1 className="text-white text-xl md:text-2xl font-Gothic">{slide.text}</h1>
                      </Link>
                      <HiArrowLongRight fill="gold" className="text-4xl" />
                    </motion.div>
                    <motion.h2
                      className="text-white text-2xl md:text-4xl font-Caslon"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7, delay: 0.7 }}
                    >
                      {slide.desc}
                    </motion.h2>
                  </motion.div>

                  <motion.div
                    className="flex text-white text-sm md:text-4xl mt-10 lg:mt-24 space-x-10 cursor-pointer"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.9 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Image src='/assets/left.svg' alt='menu' height={40} width={40}
                        onClick={handlePrev}
                        className="hover:text-white transition-transform"
                      />
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Image src='/assets/right.svg' alt='menu' height={40} width={40}
                        onClick={handleNext}
                        className="hover:text-white transition-transform"
                      />
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            ) : null)}
          </AnimatePresence>
        </div>

        {/* ABOUT SECTION */}


        <motion.div
          className="p-24 h-[700px] lg:h-[750px] bg-menuBg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.3 }}
          variants={staggerChildren}
        >
          <div className="flex items-center justify-center mt-32">
            <motion.div
              className="relative"
              variants={scaleUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Image src="/assets/17svg.svg" alt="eye" width={300} height={300} />
            </motion.div>

            <div className="flex flex-col lg:flex-row absolute p-8 lg:p-12 lg:space-x-44">
              <motion.div
                className="font-Caslon text-3xl lg:text-6xl w-full lg:w-[30vw] space-y-4"
                variants={staggerChildren}
              >
                <motion.p variants={textReveal}>Creative </motion.p>
                <motion.p variants={textReveal}>stories that give</motion.p>
                <motion.p variants={textReveal}>goosebumps .</motion.p>
              </motion.div>

              <motion.div
                className="font-Gothic text-lg lg:text-xl w-full lg:w-[45vw] space-y-6 mt-10 lg:mt-60"
                variants={fadeInRight}
              >
                <motion.p variants={fadeIn}>PixelEye is an agency that helps companies and institutions build brand identities that connect with their audience.</motion.p>
                <motion.p variants={fadeIn}>We use world-class storytelling tools to execute creative branding, campaign management or social media strategy among other services.</motion.p>

                <motion.div
                  className="absolute space-y-4"
                  variants={fadeIn}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  {/* <div className="flex space-x-4">
                    <button className="font-Gothic font-semibold" onClick={handleEmailClick}>Email us for partnerships</button>
                    <HiArrowLongRight fill="gold" className="text-4xl" />
                  </div> */}
                  <Link href='/services'>
                    <div className="flex space-x-4">
                      <button className="font-Gothic font-semibold">Explore our Services</button>
                      <HiArrowLongRight fill="gold" className="text-4xl" />
                    </div>
                  </Link>
                  <h1 className="border-b-2 relative border-gold"></h1>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* PROJECTS SECTION */}
        <div className="p-6 lg:p-24 bg-navColor">
          <motion.div
            className="space-y-8 mt-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerChildren}
          >
            <motion.p
              className="text-4xl lg:text-5xl lg:text-center font-Caslon"
              variants={fadeIn}
            >
              Projects
            </motion.p>

            <motion.div
              className="lg:text-center font-Gothic text-lg lg:text-xl"
              variants={staggerChildren}
            >
              <motion.p variants={textReveal}>For almost a decade, we have worked with public and private entities to cut through the noise.</motion.p>
              <motion.p variants={textReveal}>No matter the company size, we deliver communication services that boast bold ideas, insightful strategies,</motion.p>
              <motion.p variants={textReveal}>and tailored design solutions.</motion.p>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex flex-col lg:flex-row space-y-10 lg:space-y-0 lg:space-x-32 mt-10 lg:mt-40 lg:p-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerChildren}
          >
            <motion.div
              className="space-y-10 mt-10 lg:mt-52 w-full lg:w-1/2"
              variants={fadeInLeft}
            >
              <div className="w-[110vw] lg:w-[40vw] space-y-2 lg:space-y-4">
                <motion.p
                  className="text-3xl lg:text-5xl font-Caslon"
                  variants={textReveal}
                >
                  RwandaFoam: Brand
                </motion.p>
                <motion.p
                  className="text-3xl lg:text-5xl font-Caslon"
                  variants={textReveal}
                >
                  Revival Implementation
                </motion.p>
              </div>

              <motion.div
                variants={scaleUp}
                whileHover="hover"
                initial="rest"
                animate="rest"
              >
                <Image src="/assets/foam2.jpg" height={600} width={600} alt="" className="w-full h-auto object-cover" />
              </motion.div>
            </motion.div>

            <motion.div
              className="space-y-8 w-full lg:w-1/2"
              variants={fadeInRight}
            >
              <motion.div
                variants={scaleUp}
                whileHover="hover"
                initial="rest"
                animate="rest"
              >
                <Image src="/assets/foam1.jpg" alt="" width={500} height={600} className="w-full h-auto object-cover" />
              </motion.div>

              <motion.div
                className="flex space-x-4"
                variants={fadeIn}
                whileHover={{ x: 5, transition: { duration: 0.2 } }}
              >
                <Link href='/project/rwandafoam'>
                  <button className="font-Gothic text-xl">Read Case Study</button>
                </Link>
                <HiArrowLongRight fill="gold" className="text-4xl" />
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex flex-col lg:flex-row space-y-10 lg:space-y-0 lg:space-x-32 mt-10 lg:p-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerChildren}
          >
            <motion.div
              className="space-y-10 mt-10 lg:mt-40 w-full lg:w-1/2"
              variants={fadeInLeft}
            >
              <div className="w-[88vw] lg:w-[40vw] space-y-2 lg:space-y-4">
                <motion.p
                  className="text-3xl lg:text-5xl font-Caslon"
                  variants={textReveal}
                >
                  AEGIS: The "Stories
                </motion.p>
                <motion.p
                  className="text-3xl lg:text-5xl font-Caslon"
                  variants={textReveal}
                >
                  Of Peace " Book
                </motion.p>
              </div>

              <motion.div
                variants={scaleUp}
                whileHover="hover"
                initial="rest"
                animate="rest"
              >
                <Image src="/assets/covers.jpg" alt="" height={1000} width={1000} className="w-full h-auto object-cover" />
              </motion.div>
            </motion.div>

            <motion.div
              className="space-y-8 -mt-10 w-full lg:w-1/2"
              variants={fadeInRight}
            >
              <motion.div
                variants={scaleUp}
                whileHover="hover"
                initial="rest"
                animate="rest"
              >
                <Image src="/assets/merch.jpg" alt="" width={1600} height={1600} className="w-full h-auto object-cover" />
              </motion.div>

              <motion.div
                className="flex space-x-4"
                variants={fadeIn}
                whileHover={{ x: 5, transition: { duration: 0.2 } }}
              >
                <Link href='/project/aegis'>
                  <button className="font-Gothic text-xl">Read Case Study</button>
                </Link>
                <HiArrowLongRight fill="gold" className="text-4xl" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* OTHER PROJECTS SECTION */}
        <div className="p-6 lg:p-24 space-y-12 cursor-pointer">
          {/* DIV 1 */}
          <motion.div
            className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerChildren}
          >
            {/* pic 1 */}
            <motion.div
              className="relative w-full lg:w-1/2"
              variants={fadeInLeft}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <Image
                src="/assets/flag.jpg"
                alt=""
                width={500}
                height={500}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-50"></div>

              <Link href='/project/youth-connekt'>
                <motion.div
                  className="absolute bottom-0 lg:bottom-8 p-4 lg:p-8 space-y-4"
                  variants={fadeIn}
                >
                  <div className="flex space-x-4">
                    <p className="text-white text-2xl md:text-2xl font-Gothic">YOUTHCONNEKT AFRICA 2024 </p>
                    <HiArrowLongRight fill="gold" className="text-4xl" />
                  </div>
                  <div>
                    <p className="text-white text-3xl md:text-4xl font-Caslon">Campaign Creative </p>
                    <p className="text-white text-3xl md:text-4xl font-Caslon"> Direction</p>
                  </div>
                </motion.div>
              </Link>
            </motion.div>

            {/* pic 2 */}
            <motion.div
              className="relative w-full lg:w-1/2 cursor-pointer"
              variants={fadeInRight}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <Image
                src="/assets/group.jpg"
                alt=""
                width={500}
                height={500}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-50"></div>

              <Link href='/project/250-podcast'>
                <motion.div
                  className="absolute bottom-8 p-4 lg:p-8 space-y-4"
                  variants={fadeIn}
                >
                  <div className="flex space-x-4">
                    <p className="text-white text-2xl md:text-2xl font-Gothic">250 PODCAST </p>
                    <HiArrowLongRight fill="gold" className="text-4xl" />
                  </div>
                  <div>
                    <p className="text-white text-3xl md:text-4xl font-Caslon">Identity Development & </p>
                    <p className="text-white text-3xl md:text-4xl font-Caslon"> Training Coordination</p>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>

          {/* DIV 2 */}
          <motion.div
            className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerChildren}
          >
            {/* pic 1 */}
            <motion.div
              className="relative w-full lg:w-1/2"
              variants={fadeInLeft}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <Image
                src="/assets/pk.jpg"
                alt=""
                width={500}
                height={500}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-50"></div>

              <Link href='/project/wtdc'>
                <motion.div
                  className="absolute bottom-8 p-4 lg:p-8 space-y-4"
                  variants={fadeIn}
                >
                  <div className="flex space-x-4">
                    <p className="text-white text-2xl md:text-2xl font-Gothic">WTDC </p>
                    <HiArrowLongRight fill="gold" className="text-4xl" />
                  </div>
                  <div>
                    <p className="text-white text-3xl md:text-4xl font-Caslon">Audio-Visual</p>
                    <p className="text-white text-3xl md:text-4xl font-Caslon">Production</p>
                  </div>
                </motion.div>
              </Link>
            </motion.div>

            {/* pic 2 */}
            <motion.div
              className="relative w-full lg:w-1/2"
              variants={fadeInRight}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <Image
                src="/assets/hanga.jpg"
                alt=""
                width={500}
                height={500}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-50"></div>

              <Link href='/project/hanga-pitchfest'>
                <motion.div
                  className="absolute bottom-8 p-4 lg:p-8 space-y-4"
                  variants={fadeIn}
                >
                  <div className="flex space-x-4">
                    <p className="text-white text-2xl md:text-2xl font-Gothic">HANGA PITCHFEST </p>
                    <HiArrowLongRight fill="gold" className="text-4xl" />
                  </div>
                  <div>
                    <p className="text-white text-3xl md:text-4xl font-Caslon"> Campaign Creative </p>
                    <p className="text-white text-3xl md:text-4xl font-Caslon"> Direction </p>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative space-y-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            <Link href='/portfolio'>
              <button className="font-Gothic font-semibold whitespace-nowrap border-b -2 border-gold pb-4">
                <div className="flex">
                  Discover more projects
                  <HiArrowLongRight fill="gold" className="text-2xl ml-2" />
                </div>
              </button>
            </Link>
          </motion.div>
        </div>

        {/* PARTNERS SECTION */}
        <div className="w-full">
          <motion.p
            className="text-center text-5xl font-Caslon"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Partners
          </motion.p>

          <motion.div
            className="bg-menuBg mt-20 h-[60vh]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerChildren}
          >
            <motion.div
              className="grid grid-cols-3 gap-4 space-y-6 lg:space-y-0 p-4 lg:p-20 items-center lg:flex lg:flex-row lg:justify-between"
              variants={staggerChildren}
            >
              <motion.div variants={scaleUp} whileHover={{ scale: 1.1 }}>
                <Image src="/assets/clients-logo/visit.png" alt="" width={100} height={100} />
              </motion.div>
              <motion.div variants={scaleUp} whileHover={{ scale: 1.1 }}>
                <Image src="/assets/clients-logo/moshions.png" alt="" width={100} height={100} />
              </motion.div>
              <motion.div variants={scaleUp} whileHover={{ scale: 1.1 }}>
                <Image src="/assets/clients-logo/aegis.png" alt="" width={100} height={100} />
              </motion.div>
              <motion.div variants={scaleUp} whileHover={{ scale: 1.1 }}>
                <Image src="/assets/clients-logo/kina.png" alt="" width={100} height={100} />
              </motion.div>
              <motion.div variants={scaleUp} whileHover={{ scale: 1.1 }}>
                <Image src="/assets/clients-logo/jibu.png" alt="" width={70} height={70} />
              </motion.div>
              <motion.div variants={scaleUp} whileHover={{ scale: 1.1 }}>
                <Image src="/assets/clients-logo/hanga.png" alt="" width={120} height={120} />
              </motion.div>
            </motion.div>

            <motion.div
              className="grid grid-cols-3 gap-4 p-2 space-y-2 lg:space-y-0 lg:p-10 items-center lg:flex lg:flex-row lg:justify-between"
              variants={staggerChildren}
            >
              <motion.div variants={scaleUp} whileHover={{ scale: 1.1 }}>
                <Image src="/assets/clients-logo/gorilla.png" alt="" width={130} height={130} />
              </motion.div>
              <motion.div variants={scaleUp} whileHover={{ scale: 1.1 }}>
                <Image src="/assets/clients-logo/jica.png" alt="" width={80} height={80} />
              </motion.div>
              <motion.div variants={scaleUp} whileHover={{ scale: 1.1 }}>
                <Image src="/assets/clients-logo/ict-chamber.png" alt="" width={80} height={80} />
              </motion.div>
              <motion.div variants={scaleUp} whileHover={{ scale: 1.1 }}>
                <Image src="/assets/clients-logo/rwandafoam.png" alt="" width={90} height={90} />
              </motion.div>
              <motion.div variants={scaleUp} whileHover={{ scale: 1.1 }}>
                <Image src="/assets/clients-logo/mpp.png" alt="" width={100} height={100} />
              </motion.div>

              <motion.div
                className="text-gold font-Caslon text-sm lg:text-xl text-center"
                variants={textReveal}
                whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
              >
                <p>YOU COULD BE</p>
                <p> OUR NEXT PARTNER</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </main>
    </motion.div>
  );
}