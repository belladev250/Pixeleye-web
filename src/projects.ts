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
    details:"Rwanda Foam is a prominent manufacturer of mattresses and sleep accessories established in 1983. They specialize in producing high-quality foam mattresses designed for comfort and airflow, with a focus on enhancing sleep quality and providing value to customers",
    description: "Re-establishing a reputable brand name ",
    description2:"across all marketing platforms.",
    image: "/assets/landscape.jpg",
    mainImage:"/assets/mattress.jpg",
    layoutType: "full",
    video:"/PxEvids/Videos/Rwandafoam.mp4",
    survey1:"Pixel Eye was keen on finding out challenges that RwandaFoam was facing. At the beginning of the project, we conducted a thorough market survey to identify areas of improvement. Pixel Eye analysed the data, and provided hands-on guidance on elevating their image through various initiatives.",
    solution1:"Pixel Eye was keen on finding out challenges that RwandaFoam was facing. At the beginning of the project, we conducted a thorough market survey to identify areas of improvement. Pixel Eye analysed the data, and provided hands-on guidance on elevating their image through various initiatives.",
    solution2:"Activating creative strategies for RwandaFoam has boosted the company's outreach on and offline. Together with the Client, we told stories that turned users into comfortable customers. One mattress at a time.",
    subImage1:"/assets/mom.png",
    subImage2:"/assets/rose.jpg",
    subImage3:"/assets/sirimuka.png",
    projSubtitle1:"RwandaFoam at Tour du",
    projSubtitle2:" Rwanda",
    projDesc1:"As part of elevating the brand image, Pixel Eye launched Sirimuka na Rwandafoam [Upgrade with RwandaFoam]. The campaign that positioned the mattress giant as an attractive choice for high-end clientele.  The aim was to change a mindset held by Made-in-Rwanda-equals-poor-quality believers; revealing the intricate process and premium materials it takes to make the award-winning mattresses.",
    proj2Subtitle1:"Re-establish the brand's",
    proj2Subtitle2:"digital presence",
    proj2Desc1:"With the need to revive their public presence and re-establish themselves as the leading manufacturer of Pure foam mattresses in Rwanda, we developed a campaign based communication plan, that focused on re-establishing a reputable brand name for Rwandafoam across all social media platforms, increase product knowledge by using TV commercials, and thus generate more sales by establishing Rwandafoam's online shopping platform.",
    sub2Image1:"/assets/foam1.jpg",
    sub2Image2:"/assets/man.png",
    sub2Image3:"/assets/landscape.jpg"
    
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
    sub2Image3: "/assets/page.png"
  },

  {
    id: "250-podcast",
    name: "250 PODCAST",
    description: "Campaign creative ",
    description2: "direction.",
    image: "/assets/group.jpg",
    layoutType: "half",
    details: "",
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
  },

  {
    id: "youth-connekt",
    name: "YOUTH CONNEKT AFRICA 2024",
    description: "Re-establishing a reputable brand name ",
    description2: "across all marketing platforms.",

    image: "/assets/meeting.png",
    layoutType: "full",
    details: "",
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
  },
  {
    id: "wtdc",
    name: "WTDC",
    description: "Campaign creative ",
    description2: "direction.",
    image: "/assets/pk.jpg",
    layoutType: "half",
    details: "",
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
  },
  {
    id: "jibu",
    name: "JIBU",
    description: "Driving change through",
    description2: " communication.",

    image: "/assets/kr 1.jpg",
    layoutType: "half",
    details: "",
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
  },
  {
    id: "hanga-pitchfest",
    name: "HANGA PITCHFEST",
    description: "Re-establishing a reputable brand name",
    description2: " across all marketing platforms.",
    image: "/assets/winner.jpg",
    layoutType: "full",
    details: "",
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
  },

  {
    id: "trend-tense",
    name: "TREND TENSE",
    description: "Campaign creative ",
    description2: "direction.",

    image: "/assets/trends.jpg",
    layoutType: "half",
    details: "",
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
  },

  {
    id: "imivugo",
    name: "IMIVUGO SERIES",
    description: "Driving change through ",
    description2: "communication.",

    image: "/assets/imivugo.jpg",
    layoutType: "half",
    details: "",
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
  },
  {
    id: "tekana",
    name: "TEKANA ONLINE",
    description: "Driving change through ",
    description2: "communication.",

    image: "/assets/campain.jpg",
    layoutType: "full",
    details: "",
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