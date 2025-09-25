import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

const projects = [
   {
      title: "Co-founder & Lead Developer",
      link: "https://openpet.app",
      linkText: "openpet.app",
      description:
         "Developed and maintained a mobile app and a backend server integrated with AI to help pet owners take care of their pets.",
      technologies: [
         "React Native",
         "Expo",
         "TypeScript",
         "Node.js",
         "Express.js",
         "MongoDB",
         "Firebase",
      ],
      date: "06/2025 - Present",
   },
   {
      title: "Fibabanka Fintern Internship",
      link: "https://fibabanka.com.tr",
      linkText: "fibabanka.com.tr",
      description:
         "Maintain CRM system and develop new features for the system.",
      technologies: [
         "React",
         "JavaScript",
         "Java",
         "Spring Boot",
         "MongoDB",
         "MySQL",
      ],
      date: "01/2025 - 06/2025",
   },
];

const Projects = () => {
   return (
      <div className="projects flex flex-col gap-4 mt-4">
         <div className="title-container">
            <h2 className="text-xl font-bold">PROJECTS & EXPERIENCES</h2>
         </div>

         <div className="content-container flex flex-col gap-4">
            {projects.map((project) => (
               <div className="content-container" key={project.title}>
                  <Card className="w-full px-4 py-3">
                     <div className="project-container">
                        <div className="project-info-container">
                           <h3 className="text-lg font-semibold">
                              {project.title}
                           </h3>
                           <Link
                              href={project.link}
                              className="text-sm  text-green-400"
                           >
                              {project.linkText}
                           </Link>

                           <p className="text-sm text-secondary-foreground mt-2">
                              {project.description}
                           </p>
                           <div className="technologies-container flex-wrap flex gap-2 mt-4">
                              {project.technologies.map((technology) => (
                                 <Badge key={technology}>{technology}</Badge>
                              ))}
                           </div>
                           <p className="text-[13px] text-muted-foreground text-end mt-4">
                              {project.date}
                           </p>
                        </div>
                     </div>
                  </Card>
               </div>
            ))}
         </div>
      </div>
   );
};

export default Projects;
