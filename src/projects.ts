'use client';
export interface Project {
  id: string;
  name: string;
  description: string;
  description2: string;
  details:string;
  image: string;
  mainImage:string;
  video:string;
  desc:string
  survey1:string;
  solution1:string;
  solution2:string;
  subImage1:string;
  subImage2:string;
  subImage3:string;
  projSubtitle1:string;
  projSubtitle2:string;
  projDesc1:string;
  proj2Subtitle1:string;
  proj2Subtitle2:string;
  proj2Desc1:string;
  sub2Image1:string;
  sub2Image2:string;
  sub2Image3:string;

  layoutType: "full" | "half";
}

export interface GroupedProject {
  id: string;
  layoutType: "full" | "half";
  items?: Project[];
  name?: string;
  description?: string;
  description2?: string;
  image?: string;
  mainImage?:string;
  video?:string;
  survey1?:string;
  solution1?:string;
  solution2?:string;
  subImage1?:string;
  subImage2?:string;
  subImage3?:string;
  projSubtitle1?:string;
  projSubtitle2?:string;
  projDesc1?:string;
  proj2Subtitle1?:string;
  proj2Subtitle2?:string;
  proj2Desc1?:string;
  sub2Image1?:string;
  sub2Image2?:string;
  sub2Image3?:string;
}

// Define the projects array
const projects: Project[] = [
  {
    id: "rwandafoam",
    name: "RWANDA FOAM",
    details: "Rwanda Foam is a prominent manufacturer of mattresses and sleep accessories established in 1983. They specialize in producing high-quality foam mattresses designed for comfort and airflow, with a focus on enhancing sleep quality and providing value to customers",
    description: "Re-establishing a reputable brand name ",
    description2: "across all marketing platforms.",
    image: "/assets/foam.png",
    mainImage: "/assets/mattress.jpg",
    layoutType: "full",
    video: "/PxEvids/Videos/Rwandafoam.mp4",
    survey1: "Pixel Eye was keen on finding out challenges that RwandaFoam was facing. At the beginning of the project, we conducted a thorough market survey to identify areas of improvement. Pixel Eye analysed the data, and provided hands-on guidance on elevating their image through various initiatives.",
    solution1: "Pixel Eye was keen on finding out challenges that RwandaFoam was facing. At the beginning of the project, we conducted a thorough market survey to identify areas of improvement. Pixel Eye analysed the data, and provided hands-on guidance on elevating their image through various initiatives.",
    solution2: "Activating creative strategies for RwandaFoam has boosted the company's outreach on and offline. Together with the Client, we told stories that turned users into comfortable customers. One mattress at a time.",
    subImage1: "/assets/mom.png",
    subImage2: "/assets/rose.jpg",
    subImage3: "/assets/sirimuka.png",
    projSubtitle1: "RwandaFoam at Tour du",
    projSubtitle2: " Rwanda",
    projDesc1: "As part of elevating the brand image, Pixel Eye launched Sirimuka na Rwandafoam [Upgrade with RwandaFoam]. The campaign that positioned the mattress giant as an attractive choice for high-end clientele.  The aim was to change a mindset held by Made-in-Rwanda-equals-poor-quality believers; revealing the intricate process and premium materials it takes to make the award-winning mattresses.",
    proj2Subtitle1: "Re-establish the brand's",
    proj2Subtitle2: "digital presence",
    proj2Desc1: "With the need to revive their public presence and re-establish themselves as the leading manufacturer of Pure foam mattresses in Rwanda, we developed a campaign based communication plan, that focused on re-establishing a reputable brand name for Rwandafoam across all social media platforms, increase product knowledge by using TV commercials, and thus generate more sales by establishing Rwandafoam's online shopping platform.",
    sub2Image1: "/assets/foam1.jpg",
    sub2Image2: "/assets/man.png",
    sub2Image3: "/assets/landscape.jpg",
    desc: "PROJECT DESCRIPTION"
  },

  {
    id: "aegis",
    name: "AEGIS TRUST",
    description: "The stories of peace ",
    description2: "books.",
    image: "/assets/paper.jpg",
    layoutType: "half",
    details: "Aegis Trust is a global organization dedicated to preventing genocide and honoring human life. Founded in 2000 by brothers James and Stephen Smith, it operates internationally, overseeing the Kigali Genocide Memorial in Rwanda to confront genocide and promote dignity worldwide.",
    mainImage: "/assets/main.png",
    video: "/PxEvids/Videos/aegis.mp4",
    survey1: "In their noble pursuit and fight against genocide, crimes against humanity, and mass atrocities worlwide, Aegis Trust’s held the dream to preserve the memory of the 1994 Genocide against the Tutsi and fostering peacebuilding faced the challenge of expanding its reach. The need to amplify survivor stories and educate wider audiences about the importance of unity and resilience remained a pressing priority.",
    solution1: "We decided to be bearers of that same dream to bring these stories to life through a thoughtfully crafted short documentary, focusing on the experiences of genocide survivors. Our work combined compelling visuals, authentic storytelling, and professional production to ensure these narratives were shared with sensitivity and impact. ",
    solution2: "By aligning with Aegis Trust’s mission, we contributed to fostering understanding, empathy, and dialogue in Rwanda and beyond.",
    subImage1: "/assets/stories.png",
    subImage2: "/assets/side.png",
    subImage3: "/assets/covers.jpg",
    projSubtitle1: "The “Stories Of Peace” ",
    projSubtitle2: "Book.",
    projDesc1: "Over the years, we have worked with AEGIS TRUST in a creative capacity over various projects that range mostly in creative graphic design. One particular project to highlight is the stories of peace books. AEGIS TRUST wanted to design the book in a visually storytelling manner that would appeal to the readers.We designed a book that combined visual and written elements to tell stories of peace, which were a compilation of stories from survivors of 1994 genocide against the Tutsi. This enabled AEGIS TRUST to launch the book, thus contributing to their peacebuilding mission here in Rwanda, and all around the world.",
    proj2Subtitle1: "Healing Our Community ",
    proj2Subtitle2: "(HOC)",
    proj2Desc1: "Healing Our Communities is a partnership that also includes Healing and Rebuilding Our Communities- Rwanda and IRDP - Institute of Research and Dialogue for Peace, and is supported by USAID. This joint project is a documentary that highlights the lives that have been positively impacted by the initiative. This inspiring  30 minute documentary reveals what we can all learn from Rwandan peace-builders, 25 years after the Genocide Against the Tutsi and includes stories from Karuna Center's Healing Our Communities program.",
    sub2Image1: "/assets/half1.png",
    sub2Image2: "/assets/half2.png",
    sub2Image3: "/assets/page.png",
    desc: "PROJECT DESCRIPTION"
  },

  {
    id: "250-podcast",
    name: "250 Podcast lab",
    description: "Campaign creative ",
    description2: "direction.",
    image: "/assets/group.jpg",
    layoutType: "half",
    details: "250 Podcast Lab is a program designed to equip aspiring Rwandan podcasters with essential skills, cutting-edge tools, and hands-on training to craft high-quality content. By amplifying local voices and fostering innovation, the program builds a thriving podcasting ecosystem.",
    mainImage: "",
    video: "/PxEvids/Videos/250 PODCAST CEREMONY.mp4",
    survey1: "The podcasting game might have taken slightly over a minute to get in the Land of a Thousand Hills, but it came in full motion when it got here!250 Podcast Lab was founded with the ambition of nurturing the podcasting ecosystem in Rwanda, aiming to empower local storytellers and creators. At the onset, we faced challenges in establishing a strong, recognizable brand identity while trying to differentiate ourselves in a competitive and emerging market. The demand for a cohesive and professional image that resonated with both creators and audiences was critical to our long-term success.",
    solution1: "We  provided a comprehensive branding solution that aligned with the core mission. Creating 250 Podcast Lab felt like stepping into a vibrant storytelling workshop, where every idea had the potential to resonate far and wide. We weren’t just barely creators—we were collaborators. From building the brand identity to shaping the learning experience, ",
    solution2: "we dove in headfirst. We designed and provided the learning materials, tailored to the needs of budding podcasters, and stayed hands-on by supervising the classes to bring those lessons to life. This wasn’t just about tools or content; it was about building a space where Rwanda’s next generation of audio creators could experiment, grow, and find their voice.",
    subImage1: "/assets/man1.png",
    subImage2: "/assets/man2.png",
    subImage3: "/assets/man3.png",
    projSubtitle1: "",
    projSubtitle2: "",
    projDesc1: "",
    proj2Subtitle1: "",
    proj2Subtitle2: "",
    proj2Desc1: "",
    sub2Image1: "",
    sub2Image2: "",
    sub2Image3: "",
    desc: "PROJECT DESCRIPTION"
  },

  {
    id: "youth-connekt",
    name: "YOUTH CONNEKT AFRICA 2024",
    description: "Re-establishing a reputable brand name ",
    description2: "across all marketing platforms.",

    image: "/assets/meeting.png",
    layoutType: "full",
    details: "YouthConnekt Africa is a pan-African platform designed to empower young people by connecting them for socio-economic transformation. Focused on providing solutions for the global South, it helps youth enhance their knowledge, skills, and experiences while supporting their ideas and innovations to drive positive change.",
    mainImage: "",
    video: "/PxEvids/Videos/YCAS_24 Web reel.mp4",
    survey1: "“The youth of today are the leaders of tomorrow.” Nelson Mandela.YouthConnekt Africa is now known to bring together youth, policymakers, and innovators from across the continent of Africa to tackle unemployment and foster entrepreneurship across the continent. For its 2024 edition in Kigali, the challenge was to craft a cohesive narrative that would amplify its impact while engaging a culturally diverse, continent-wide audience. The summit needed impactful and fun branding, immersive storytelling, and catchy content creation to bridge the gap between its inspiring goals and its digital and physical audience.",
    solution1: "Our team  on the ground in Rwanda, with the YouthConnekt Africa 2024 team honored and brought the summit's vision to life. ",
    solution2: "With a full creative package, from rebranding and strategic campaign management to audio-visual production and real-time digital media management: live event coverage, interactive social media content, and visually compelling videos that showcased the event's essence. By immersing ourselves in the energy of Kigali, devouring the pleasure that is being part of such a dream, we captured the vibrancy of the summit, delivering impactful content that resonated with youth and stakeholders across Africa.",
    subImage1: "/assets/lady.png",
    subImage2: "/assets/smile.png",
    subImage3: "/assets/group.png",
    projSubtitle1: "",
    projSubtitle2: "",
    projDesc1: "",
    proj2Subtitle1: "",
    proj2Subtitle2: "",
    proj2Desc1: "",
    sub2Image1: "",
    sub2Image2: "",
    sub2Image3: "",
    desc: "PROJECT DESCRIPTION"
  },
  {
    id: "wtdc",
    name: " ITU WTDC",
    description: "Campaign creative ",
    description2: "direction.",
    image: "/assets/pk.jpg",
    layoutType: "half",
    details: "The World Telecommunication Development Conference (WTDC), hosted by the International Telecommunication Union (ITU), is a crucial event for every leader that wants to shape a future for telecommunication.",
    mainImage: "/assets/mainimg.png",
    video: "",
    survey1: "PixelEye had the vital role of providing audio-visual support for their first conference held in Rwanda. Our mission went beyond technical support — we were tasked with creating awareness and ensuring the event makes a lasting impact in this new and exciting location. ITUWTDC is well known for fostering the development of digital solutions. For its inaugural conference in Rwanda, the ITU faced challenges related to visibility and awareness in this new location. Our mission went beyond technical support — we were tasked with creating awareness and ensuring the event makes a lasting impact in this new and exciting location.",
    solution1: "PixelEye had the chance to participate for their first time in Africa by a virtual approach that engages audiences, going from impactful social media content to an entire website dedicated to spreading awareness before, during and after the event.",
    solution2: "",
    subImage1: "/assets/td2.png",
    subImage2: "/assets/paula.png",
    subImage3: "/assets/td1.png",
    projSubtitle1: "",
    projSubtitle2: "",
    projDesc1: "",
    proj2Subtitle1: "",
    proj2Subtitle2: "",
    proj2Desc1: "",
    sub2Image1: "",
    sub2Image2: "",
    sub2Image3: "",
    desc: "PROJECT DESCRIPTION"
  },
  {
    id: "jibu",
    name: "JIBU",
    description: "Driving change through",
    description2: " communication.",

    image: "/assets/kr 1.jpg",
    layoutType: "half",
    details: "Focused on creating meaningful impact, Jibu, Inc. empowers local entrepreneurs to provide affordable essentials like safe drinking water, LPG, and fortified porridge. With a network of independent franchise owners, it aims to transform Africa’s landscape and harness global resources for lasting change in emerging markets.",
    mainImage: "",
    video: "/PxEvids/Videos/jibu.mp4",
    survey1: "Have you ever held the task to convince a whole society that there’s cleaner, better tasting water than the freshly boiled one?Jibu came to us with a mission beyond providing clean water—they wanted to deepen trust within their customer base and establish themselves as the go-to name for reliability in the industry. We crafted a branding strategy that reflected their values of transparency and community impact. Through engaging visuals, storytelling, and tailored campaigns, connecting authentically with their audience. From impactful video content that showcased their commitment to quality, to on-the-ground marketing efforts, every piece was designed to strengthen the narrative of Jibu as a dependable and caring water provider.",
    solution1: "Pixel Eye delivered a comprehensive creative package tailored to Jibu’s needs. We developed engaging videos, vibrant graphics, and managed an integrated campaign that showcased the company’s innovative solutions and local impact. By aligning our strategy with Jibu’s mission, we elevated their narrative, ensuring their message resonated with audiences while reinforcing their position as a leader in sustainable water solutions.",
    solution2: "",
    subImage1: "/assets/mic.png",
    subImage2: "/assets/light.png",
    subImage3: "/assets/jiibu.png",
    projSubtitle1: "",
    projSubtitle2: "",
    projDesc1: "",
    proj2Subtitle1: "",
    proj2Subtitle2: "",
    proj2Desc1: "",
    sub2Image1: "",
    sub2Image2: "",
    sub2Image3: "",
    desc: "PROJECT DESCRIPTION"
  },
  {
    id: "hanga-pitchfest",
    name: "HANGA PITCHFEST",
    description: "Re-establishing a reputable brand name",
    description2: " across all marketing platforms.",
    image: "/assets/winner.jpg",
    layoutType: "full",
    details: "Hanga PitchFest, the largest in-person technology event in Rwanda, brings together tech-entrepreneurs to pitch their innovations to investors and industry leaders. It features showcases, masterclasses, live music, and a competition for the top 5 startups.",
    mainImage: "/assets/srh.png",
    video: "/PxEvids/Videos/HANGA PITCHFEST FINALE 2024.mp4",
    survey1: "Hanga PitchFest was a young project with immense potential, but craved a unified identity and strong online presence to support its goal of enabling Rwandan entrepreneurs. A strong presence was necessary to connect with investors and entrepreneurs in the cutthroat world of startup competitions.",
    solution1: "Over the past three years, Pixel Eye has been a reliable partner in defining Hanga PitchFest's trajectory and narrative. We've continuously worked to improve their visibility, from rethinking their branding to providing skillfully designed campaigns, audiovisual productions, and digital media tactics. ",
    solution2: "The dream is to make Hanga PitchFest a consistent vital component of Rwanda's startup scene.",
    subImage1: "/assets/kivumbi.png",
    subImage2: "/assets/bracelet.png",
    subImage3: "/assets/sync.png",
    projSubtitle1: "Hanga Sexual Reproductive ",
    projSubtitle2: "Health (Hanga-SRH)",
    projDesc1: "In a time where sexual and reproductive health is still overlooked not only ocally but worldwide, Hanga SRH was not only a dream. It was a necessity.he Hanga Sexual and Reproductive Health (SRH) initiative leverages technology to address critical challenges in sexual and reproductive health in Rwanda. For Hanga SRH, we worked on brand identity creation, digital content production, outreach materials. We find pride in knowing we are the messengers of the impact that Hanga SRH has had and continues to have.",
    proj2Subtitle1: "Hanga Hubs",
    proj2Subtitle2: "",
    proj2Desc1: "Hanga Hubs is that one place you want to be in if you are a creator, business-minded and love tech! It comes as no surprise that we are part of this grail!.Hanga Hubs focuses on nurturing the Rwanda innovation ecosystems by providing resources and training to startups and creatives. We provided visual branding, promotional videos, educational materials and responded as present to provide great launch campaigns.",
    sub2Image1: "/assets/woman.png",
    sub2Image2: "/assets/vr.png",
    sub2Image3: "/assets/ppl.png",
    desc: "PROJECT DESCRIPTION"
  },

  {
    id: "trend-tense",
    name: "TREND TENSE",
    description: "Campaign creative ",
    description2: "direction.",
    desc:"PROJECT DESCRIPTION",
    image: "/assets/trends.jpg",
    layoutType: "half",
    details: "At PixelEye, Trends Tense is where the buzz begins. Born from our passion for exploring the new and the next, Trends Tense is our way of spotlighting the trends steering industries & cultures and stirring meaningful conversations.",
    mainImage: "/assets/trendmain.png",
    video: "",
    survey1: "In today’s fast-moving world, we noticed how easy it is for people to feel lost in the whirlwind of changing trends and tech talk. Many miss out on understanding what’s truly shaping the world around them. That’s why we created Trends Tense—a space dedicated to cutting through the noise, turning big ideas into meaningful, easy-to-follow conversations that inspire and connect with everyday people.",
    solution1: "PixelEye saw a chance to turn the confusion into clarity and curiosity into connection. We created a fresh, approachable way to talk about big ideas—breaking down complex trends into simple, engaging threads that feel like a conversation with a friend. By sharing simple, bite-sized viewpoints on social media, we’ve made it easier for people to understand what’s happening around them and why it’s important. Whether it’s the latest tech, a shift in how we connect, or something completely new, Trends Tense brings those conversations to life in a way that’s easy to grasp, fun to follow, and hard to ignore.",
    solution2: "",
    subImage1: "/assets/trends1.png",
    subImage2: "/assets/trends2.png",
    subImage3: "/assets/ben.png",
    projSubtitle1: "",
    projSubtitle2: "",
    projDesc1: "",
    proj2Subtitle1: "",
    proj2Subtitle2: "",
    proj2Desc1: "",
    sub2Image1: "",
    sub2Image2: "",
    sub2Image3: ""
  },

  {
    id: "imivugo",
    name: "IMIVUGO SERIES",
    description: "Driving change through ",
    description2: "communication.",

    image: "/assets/imivugo.jpg",
    layoutType: "half",
    details: "The Imivugo Series delivers captivating stories through modern visual artistry. Our goal was to give unfiltered access to different journeys from Rwandan creatives and an opportunity to inspire thousands of dreamers.",
    mainImage: "/assets/mvgmain.png",
    video: "",
    survey1: "In a country full of artists, many lack something crucial to grow: a voice. The Imivugo Series seeks to bridge a hole in the Rwandan creative industry: the limited visibility and reach of entities. Despite the growing appreciation for local narratives, many creators struggle to find platforms to showcase their talent. By creating the Imivugo Series, PixelEye aims to amplify voices, connect artists with audiences and inspire vibrant creative conversations in Rwanda.",
    solution1: "To help our local creatives find a community where they can express themselves, PixelEye decided to design a multi-channel approach to immortalise thousands of stories. ",
    solution2: "By providing a clean production, engaging social media teasers and amplifying the art form across digital sources, we made the Imivugo Series a source for all the passionate individuals who needed inspiration and wanted to nurture their creativity but also a platform for those who had a story to share.",
    subImage1: "/assets/imivugo3.png",
    subImage2: "/assets/imivugo2.png",
    subImage3: "/assets/imivugo1.png",
    projSubtitle1: "",
    projSubtitle2: "",
    projDesc1: "",
    proj2Subtitle1: "",
    proj2Subtitle2: "",
    proj2Desc1: "",
    sub2Image1: "",
    sub2Image2: "",
    sub2Image3: "",
    desc: "PROJECT DESCRIPTION"
  },
  {
    id: "tekana",
    name: "TEKANA ONLINE",
    description: "Driving change through ",
    description2: "communication.",

    image: "/assets/campain.jpg",
    layoutType: "full",
    details: "Tekana Online campaign by Rwanda's National Cyber Security Authority ran from October 2 to November 17, 2023, focusing on raising awareness about cybersecurity and data protection through roadshows and digital outreach.",
    mainImage: "/assets/wallpaper.png",
    video: "",
    survey1: "Tekana Online set out to confront a critical gap; the widespread unawareness of cyber threats among Rwandans. Despite the urgency of safeguarding personal data, their message struggled to reach those who needed it most. PixelEye joined forces with the National Cyber Security Authority through everyday touchpoints to turn the complex issue into a message that empowered Rwandans to take control of their digital safety.",
    solution1: "To address the growing concern around cyber threats, PixelEye created a versatile strategy for Tekana Online. We developed a range of content for the campaign, including professional TV and radio ads, engaging social media materials, educational videos, and lively graphics. By working with influencers and hosting community activations across Rwanda, we ensured the message reached diverse audiences—turning online safety into a conversation everyone could join in because in today’s world, your data deserves better than a simple “password123.”",
    solution2: "",
    subImage1: "/assets/tekana1.png",
    subImage2: "/assets/tekana2.png",
    subImage3: "/assets/tekana3.png",
    projSubtitle1: "",
    projSubtitle2: "",
    projDesc1: "",
    proj2Subtitle1: "",
    proj2Subtitle2: "",
    proj2Desc1: "",
    sub2Image1: "",
    sub2Image2: "",
    sub2Image3: "",
    desc: "PROJECT DESCRIPTION"
  },
];

const groupedProjects: GroupedProject[] = [];
let tempGroup: Project[] = [];

projects.forEach((project) => {
  if (project.layoutType === "half") {
    tempGroup.push(project);
    if (tempGroup.length === 2) {
      groupedProjects.push({
        id: `${tempGroup[0].id}-${tempGroup[1].id}`,
        layoutType: "half",
        items: [...tempGroup],
        mainImage: "",
        video: "",
        survey1: "",
        solution1: "",
        solution2: "",
        subImage1: "",
        subImage2: "",
        subImage3: "",
        projSubtitle1: "",
        projSubtitle2: "",
        projDesc1: "",
        proj2Subtitle1: "",
        proj2Subtitle2: "",
        proj2Desc1: "",
        sub2Image1: "",
        sub2Image2: "",
        sub2Image3: ""
      });
      tempGroup = [];
    }

    console.log(tempGroup)

  } else {
    if (tempGroup.length > 0) {
      groupedProjects.push({
        id: tempGroup[0].id,
        layoutType: "half",
        items: [...tempGroup],
        mainImage: "",
        video: "",
        survey1: "",
        solution1: "",
        solution2: "",
        subImage1: "",
        subImage2: "",
        subImage3: "",
        projSubtitle1: "",
        projSubtitle2: "",
        projDesc1: "",
        proj2Subtitle1: "",
        proj2Subtitle2: "",
        proj2Desc1: "",
        sub2Image1: "",
        sub2Image2: "",
        sub2Image3: ""
      });
      tempGroup = [];
    }
    groupedProjects.push(project);
  }
});



export default groupedProjects;