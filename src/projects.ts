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
  mainImage:string;
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

  // {
  //   id: "aegis",
  //   name: "AEGIS",
  //   description: "The stories of peace ",
  //   description2:"books.",
  //   image: "/assets/paper.jpg",
  //   layoutType: "half",
  // },

  // {
  //   id: "250-podcast",
  //   name: "250 PODCAST",
  //   description: "Campaign creative ",
  //   description2:"direction.",
  //   image: "/assets/group.jpg",
  //   layoutType: "half",
  // },

  // {
  //   id: "youth-connekt",
  //   name: "YOUTH CONNEKT AFRICA 2024",
  //   description: "Re-establishing a reputable brand name ",
  //   description2:"across all marketing platforms.",

  //   image: "/assets/meeting.png",
  //   layoutType: "full",
  // },
  // {
  //   id: "wtdc",
  //   name: "WTDC",
  //   description: "Campaign creative ",
  //   description2:"direction.",
  //   image: "/assets/pk.jpg",
  //   layoutType: "half",
  // },
  // {
  //   id: "jibu",
  //   name: "JIBU",
  //   description: "Driving change through",
  //   description2:" communication.",

  //   image: "/assets/kr 1.jpg",
  //   layoutType: "half",
  // },
  // {
  //   id: "hanga-pitchfest",
  //   name: "HANGA PITCHFEST",
  //   description: "Re-establishing a reputable brand name",
  //   description2:" across all marketing platforms.",
  //   image: "/assets/winner.jpg",
  //   layoutType: "full",
  // },

  // {
  //   id: "trend-tense",
  //   name: "TREND TENSE",
  //   description: "Campaign creative ",
  //   description2:"direction.",

  //   image: "/assets/trends.jpg",
  //   layoutType: "half",
  // },

  // {
  //   id: "imivugo",
  //   name: "IMIVUGO SERIES",
  //   description: "Driving change through ",
  //   description2:"communication.",

  //   image: "/assets/imivugo.jpg",
  //   layoutType: "half",
  // },
  // {
  //   id: "tekana",
  //   name: "TEKANA ONLINE",
  //   description: "Driving change through ",
  //   description2:"communication.",

  //   image: "/assets/campain.jpg",
  //   layoutType: "full",
  // },
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
        mainImage: ""
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
        mainImage: ""
      });
      tempGroup = [];
    }
    groupedProjects.push(project);
  }
});



export default groupedProjects;