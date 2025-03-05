'use client';
export interface Project {
  id: string;
  name: string;
  description: string;
  image: string;
  layoutType: "full" | "half";
}

export interface GroupedProject {
  id: string;
  layoutType: "full" | "half";
  items?: Project[];
  name?: string;
  description?: string;
  image?: string;
}

// Define the projects array
const projects: Project[] = [
  {
    id: "rwandafoam",
    name: "RWANDAFOAM",
    description: "Re-establishing a reputable brand name across all marketing platforms.",
    image: "/assets/landscape.jpg",
    layoutType: "full",
  },
  {
    id: "aegis",
    name: "AEGIS",
    description: "The stories of peace books.",
    image: "/assets/paper.jpg",
    layoutType: "half",
  },
  {
    id: "250-podcast",
    name: "250 PODCAST",
    description: "Campaign creative direction.",
    image: "/assets/group.jpg",
    layoutType: "half",
  },
  {
    id: "youth-connekt",
    name: "YOUTH CONNEKT AFRICA 2024",
    description: "Re-establishing a reputable brand name across all marketing platforms.",
    image: "/assets/meeting.png",
    layoutType: "full",
  },
  {
    id: "wtdc",
    name: "WTDC",
    description: "Campaign creative direction.",
    image: "/assets/pk.jpg",
    layoutType: "half",
  },
  {
    id: "jibu",
    name: "JIBU",
    description: "Driving change through communication.",
    image: "/assets/kr 1.jpg",
    layoutType: "half",
  },
  {
    id: "hanga-pitchfest",
    name: "HANGA PITCHFEST",
    description: "Re-establishing a reputable brand name across all marketing platforms.",
    image: "/assets/winner.jpg",
    layoutType: "full",
  },
  {
    id: "trend-tense",
    name: "TREND TENSE",
    description: "Campaign creative direction.",
    image: "/assets/trends.jpg",
    layoutType: "half",
  },
  {
    id: "imivugo",
    name: "IMIVUGO SERIES",
    description: "Driving change through communication.",
    image: "/assets/imivugo.jpg",
    layoutType: "half",
  },
  {
    id: "tekana",
    name: "TEKANA ONLINE",
    description: "Driving change through communication.",
    image: "/assets/campain.jpg",
    layoutType: "full",
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
      });
      tempGroup = [];
    }
    groupedProjects.push(project);
  }
});



export default groupedProjects;