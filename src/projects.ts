'use client';
export interface Project {
  id: string;
  name: string;
  description: string;
  description2: string;
  details:string;
  image: string;
  mainImage:string;
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