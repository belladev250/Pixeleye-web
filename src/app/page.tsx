'use client'
import Image from "next/image";
import { AnimatePresence,motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { HiArrowLongLeft,HiArrowLongRight} from "react-icons/hi2";



export default function Home() {
  
  const [currentSlide ,setCurrentSlide] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);;

 
    const slides =[

      {video:'/PxEvids/Videos/jibu.mp4',text:'JIBU', desc:'Driving change through communication'},
      {video:'/PxEvids/Videos/aegis.mp4',text:'AEGIS',desc:'The stories of peace books'},
      {video:'/PxEvids/Videos/HANGA PITCHFEST FINALE 2024.mp4',text:'HANGA PITCHFEST',desc:'Re-establishing a reputable brand name for across all marketing platforms'},
      {video:'/PxEvids/Videos/YCAS_24 Web reel.mp4',text:'YOUTH CONNEKT AFRICA 2024',desc:'Re-establishing a reputable brand name for across all marketing platforms'},
      {video:'/PxEvids/Videos/250 PODCAST CEREMONY.mp4',text:'250 PODCAST',desc:'Campaign creative direction'},
      {video:'/PxEvids/Videos/HANGA HUBS FINALE HIGHLIGHT.mp4',text:'HANGA HUBS HIGHLIGHTS',desc:'Re-establishing a reputable brand name for across all marketing platforms'},
      {video:'/PxEvids/Videos/Rwandafoam.mp4',text:'RWANDA FOAM',desc:'Re-establishing a reputable brand name for across all marketing platforms,'},
      {video:'/PxEvids/Videos/SRH web HIGHLIGHT.mp4',text:'SRH WEB HIGHLIGHTS',desc:'Re-establishing a reputable brand name for across all marketing platforms'},
    
    ]


    useEffect(()=>{

      const interval = setInterval(() => {
  
      setCurrentSlide((prev)=>(prev+1)% slides.length);
  
      },15000 ) //slideshow is gonna take 15 seconds 

      return ()=>{
        clearInterval(interval) //clear the interval to prevent a leak 
      }
        
  },[slides.length])

  //reset and play video once the slide changes

  useEffect(()=>{

    if(videoRef.current){
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  },[])

  const handlePrev=()=>{
   setCurrentSlide((prev)=>(prev-1 + slides.length)%slides.length)
  }

  const handleNext=()=>{

    setCurrentSlide((prev)=>(prev+1)%slides.length)
  }

  return (
    <div className="overflow-hidden">

      <main >
      
     <div className="relative w-full h-[70vh] lg:h-[100vh] ">
   
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* video section */}

      <AnimatePresence mode="wait">

        {slides.map((slide,index)=> index == currentSlide ? (
          
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
                src={slide.video}
                muted
                className="w-full h-full object-cover"
                autoPlay
                preload="auto"
            
              ></video>

<div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/60 z-10"></div>


<div className="absolute bottom-8 w-full flex flex-col lg:flex-row lg:items-center justify-between p-6 z-20 md:p-10">
  <div className="  w-full lg:w-[45vw] space-y-6">
    <div className="flex space-x-2  lg:space-x-4">
  <h1 className="text-white text-xl md:text-2xl font-Gothic ">{slide.text}</h1>
  <HiArrowLongRight fill="gold" className="text-4xl"/>
  </div>
  <h2 className="text-white text-2xl md:text-4xl font-Caslon ">{slide.desc}</h2>
  </div>

  <div className="flex text-white text-sm md:text-4xl  mt-10 lg:mt-24 space-x-10 cursor-pointer">
    <Image src='/assets/left.svg' alt='menu' height={40} width={40}
      onClick={handlePrev}
      className="hover:text-white transition-transform transform hover:scale-125" 
    />
    <Image src='/assets/right.svg' alt='menu' height={40} width={40}
      onClick={handleNext} 
      className="hover:text-white transition-transform transform hover:scale-125" 
    />
  </div>
</div>


              
            </motion.div>) :null)}
      </AnimatePresence>
      
    </div>



    {/* ABOUT SECTION ->>>>>>>>>>>>>>>>>> */}



    <div className="  p-24   h-[700px] lg:h-[750px] bg-menuBg">

      <div className=" flex items-center justify-center mt-32">

        <div className=" relative">
        <Image src="/assets/17svg.svg" alt="eye" width={300} height={300} ></Image>
        </div>

        <div className="flex  flex-col lg:flex-row absolute p-8 lg:p-12 lg:space-x-44 ">
          <div className="font-Caslon  text-3xl lg:text-6xl w-full lg:w-[30vw] space-y-4">
             <p>Creative </p>
             <p>stories that give</p> 
             <p>goosebumps .</p>
          </div>

          <div className="font-Gothic  text-lg lg:text-xl w-full lg:w-[45vw] space-y-6 mt-10 lg:mt-60  ">
            <p>PixelEye is an agency that helps companies and institutions build brand identities that connect with their audience.</p> 
            <p>We use world-class storytelling tools to execute creative branding, campaign management or social media strategy among other services.</p>

            <div className=" absolute space-y-4">
            <div className="flex space-x-4">
            <button className="font-Gothic font-semibold ">Email us for partnerships</button>
            <HiArrowLongRight fill="gold" className="text-4xl"/>
            </div>

            <h1 className="border-b-2  relative border-gold"></h1>
            </div>
           
          </div>
          
         </div>

         
      </div>
             
    </div>


    {/* PROJECTS SECTION >>>>>>>>>>>>>>>>> */}

<div className=" p-6 lg:p-24 bg-navColor  ">

    <div className=" space-y-8 mt-10">
         <p className="text-4xl lg:text-5xl lg:text-center font-Caslon"> Projects</p>

         <div className="lg:text-center font-Gothic  text-lg lg:text-xl">
          <p>For almost a decade, we have worked with public and private entities to cut through the noise.</p>
          <p>No matter the company size, we deliver communications services that boast terrific ideas,</p>
          <p>clever strategies and tailored design ideas.</p>
          </div>

  </div>

  <div className=" flex flex-col lg:flex-row  space-y-10 lg:space-y-0 lg:space-x-32 mt-10 lg:mt-40 lg:p-4 ">

    <div className="space-y-10 mt-10 lg:mt-52 w-full lg:w-1/2">
      <div className=" w-[110vw] lg:w-[40vw] space-y-2 lg:space-y-4 ">
        
      <p className=" text-3xl lg:text-5xl font-Caslon ">Rwandafoam: Campaign </p>
      <p className=" text-3xl lg:text-5xl font-Caslon"> creative direction</p>
      </div>

      <Image src="/assets/foam2.jpg" height={600} width={600} alt=""  layout="responsive"
     
      className="w-full h-auto object-cover"
    />
    </div>

    <div className="space-y-8 w-full lg:w-1/2">
 
      <Image src="/assets/foam1.jpg" alt="" width={500} height={600}  layout="responsive"
    
      className="w-full h-auto object-cover"
    />

      <div className="flex space-x-4">
            <button className="font-Gothic text-xl ">Read Casestudy</button>
            <HiArrowLongRight fill="gold" className="text-4xl"/>
            </div>
    </div>


  </div>



<div className=" flex flex-col lg:flex-row  space-y-10 lg:space-y-0 lg:space-x-32 mt-10 lg:p-4 ">

<div className="space-y-10 mt-10 lg:mt-40 w-full lg:w-1/2">
  <div className=" w-[88vw] lg:w-[40vw] space-y-2 lg:space-y-4">
  <p className=" text-3xl lg:text-5xl font-Caslon">AEGIS: The "Stories </p>
  <p className=" text-3xl lg:text-5xl font-Caslon"> Of Peace " Book</p>
  </div>

  <Image src="/assets/covers.jpg" alt="" height={1000} width={1000} 
    layout="responsive" className="w-full h-auto object-cover"
    />
</div>

<div className="space-y-8 -mt-10 w-full lg:w-1/2">

  <Image src="/assets/merch.jpg" alt="" width={1600} height={1600}  layout="responsive" className="w-full h-auto object-cover"/>

 <div className="flex space-x-4">
        <button className="font-Gothic text-xl ">Read Casestudy</button>
        <HiArrowLongRight fill="gold" className="text-4xl"/>
        </div>
</div>


</div>


</div>

{/* OTHER PROJECTS SECTION >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

<div className=" p-6 lg:p-24 space-y-12 cursor-pointer">

{/* DIV 1 ---------------------------*/}


<div className="flex flex-col lg:flex-row   space-y-8 lg:space-y-0 lg:space-x-12">

{/* pic 1 */}
  <div className="relative w-full lg:w-1/2">
  <Image
      src="/assets/flag.jpg"
      alt=""
      layout="responsive"
      width={500}
      height={500}
      className="w-full h-auto object-cover"
    />
 <div className=" absolute inset-0  bg-black opacity-50 "></div>

<div className=" absolute bottom-0 lg:bottom-8  p-4 lg:p-8 space-y-4">
 <div className="flex space-x-4">
  <p className=" text-white text-2xl md:text-2xl font-Gothic">YOUTHCONNEKT AFRICA 2024 </p>
   <HiArrowLongRight fill="gold" className="text-4xl"/>
   </div>
   <div>
   <p className="text-white text-3xl md:text-4xl font-Caslon ">Campaign creative </p>
   <p className="text-white text-3xl md:text-4xl font-Caslon "> direction</p>
   </div>

   </div>

  </div>

{/* pic 2 */}
  <div className="relative w-full lg:w-1/2">
  <Image src="/assets/group.jpg" alt=""  layout="responsive"
      width={500}
      height={500}
      className="w-full h-auto object-cover"
    />
  <div className=" absolute inset-0  bg-black opacity-50 "></div>

  <div className=" absolute bottom-8 p-4 lg:p-8 space-y-4">
 <div className="flex space-x-4">
  <p className=" text-white text-2xl md:text-2xl font-Gothic">250 PODCAST </p>
   <HiArrowLongRight fill="gold" className="text-4xl"/>
   </div>
   <div>
   <p className="text-white text-3xl md:text-4xl font-Caslon ">Campaign creative </p>
   <p className="text-white text-3xl md:text-4xl font-Caslon "> direction</p>
   </div>

   </div>

   </div>

  </div>



  {/* DIV 2 --------------------------------------------*/}

  <div className="flex flex-col lg:flex-row  space-y-8 lg:space-y-0 lg:space-x-12">
   {/* pic 1 */}
  <div className="relative w-full lg:w-1/2">
  <Image src="/assets/pk.jpg" alt=""   layout="responsive"
      width={500}
      height={500}
      className="w-full h-auto object-cover"
    />
  <div className=" absolute inset-0  bg-black opacity-50 "></div>
  <div className=" absolute bottom-8 p-4 lg:p-8 space-y-4">
 <div className="flex space-x-4">
  <p className=" text-white text-2xl md:text-2xl font-Gothic">WTDC </p>
   <HiArrowLongRight fill="gold" className="text-4xl"/>
   </div>
   <div>
   <p className="text-white text-3xl md:text-4xl font-Caslon ">Campaign creative </p>
   <p className="text-white text-3xl md:text-4xl font-Caslon "> direction</p>
   </div>

   </div>

  </div>

{/* pic 2 */}
  <div className="relative w-full lg:w-1/2">

  <Image src="/assets/hanga.jpg" alt=""   layout="responsive"
      width={500}
      height={500}
      className="w-full h-auto object-cover"
    />
  <div className=" absolute inset-0  bg-black opacity-50 "></div>

  <div className=" absolute bottom-8 p-4 lg:p-8 space-y-4">
 <div className="flex space-x-4">
  <p className=" text-white text-2xl md:text-2xl font-Gothic">HANGA PITCHFEST </p>
   <HiArrowLongRight fill="gold" className="text-4xl"/>
   </div>
   <div>
   <p className="text-white text-3xl md:text-4xl font-Caslon ">Driving change through </p>
   <p className="text-white text-3xl md:text-4xl font-Caslon ">  communication </p>
   </div>

   </div>

  </div>

  </div>

  <div className="relative space-y-4 text-center">
    <button className="font-Gothic font-semibold whitespace-nowrap border-b -2 border-gold pb-4">
      <div className="flex ">
      Discover more projects
      <HiArrowLongRight fill="gold" className="text-2xl ml-2" />
      </div>
    </button>
   

</div>





</div>

{/* PARTNERS SECTION ---->>>>>>>>>>>>>>>>>>>>>> */}

<div className="w-full ">

<p className="text-center text-5xl font-Caslon">Our Partners</p>

<div className="bg-menuBg mt-20">

  <div className="flex items-center p-10 justify-between ">
  <Image src="/assets/clients-logo/visit.png" alt="" width={100} height={100}/>
  <Image src="/assets/clients-logo/moshions.png" alt="" width={100} height={100}/>
  <Image src="/assets/clients-logo/aegis.png" alt="" width={100} height={100}/>
  <Image src="/assets/clients-logo/kina.png" alt="" width={100} height={100}/>
  <Image src="/assets/clients-logo/jibu.png" alt="" width={70} height={70}/>
  <Image src="/assets/clients-logo/hanga.png" alt="" width={120} height={120}/>
  </div>

  <div className="flex items-center p-10 justify-between ">
  <Image src="/assets/clients-logo/gorilla.png" alt="" width={130} height={130}/>
  <Image src="/assets/clients-logo/jica.png" alt="" width={80} height={80}/>
  <Image src="/assets/clients-logo/ict-chamber.png" alt="" width={80} height={80}/>
  <Image src="/assets/clients-logo/rwandafoam.png" alt="" width={90} height={90}/>
  <Image src="/assets/clients-logo/mpp.png" alt="" width={100} height={100}/>

 <div className="text-gold font-Caslon text-xl text-center">
  <p>YOU COULD BE</p>
  <p> OUR NEXT PARTNER</p>
 </div>
  
  </div>

</div>




</div>
    
    
      </main>
    
    </div>
  );


}


 

