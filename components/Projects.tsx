import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

const projects = [
   {
      title: "Insider One - Software Developer",
      link: "https://useinsider.com",
      linkText: "useinsider.com",
      description:
         "Developing and optimizing responsive user interfaces, web applications, and Go backend services to deliver real-time personalization experiences at scale.",
      technologies: [
         "Go",
         "JavaScript",
         "React",
         "HTML5",
         "CSS3",
      ],
      date: "01/2026 - Present",
   },
   {
      title: "Full Stack Developer (Collaborative Project)",
      link: "https://openpet.app",
      linkText: "openpet.app",
      description:
         "Co-developed a mobile application and an AI-integrated backend server with a teammate to help pet owners track and manage pet care.",
      technologies: [
         "React Native",
         "Expo",
         "TypeScript",
         "Node.js",
         "Express.js",
         "MongoDB",
         "Firebase",
      ],
      date: "06/2025 - 01/2026",
   },
   {
      title: "Fibabanka - Fintern Internship",
      link: "https://fibabanka.com.tr",
      linkText: "fibabanka.com.tr",
      description:
         "Maintained internal CRM systems and developed new enterprise backend features to improve banking workflows.",
      technologies: [
         "Java",
         "Spring Boot",
         "MongoDB",
         "MySQL",
         "React",
         "JavaScript",
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
                           <h3 className="lg:text-lg text-base font-semibold">
                              {project.title}
                           </h3>
                           <Link
                              href={project.link}
                              className="text-sm text-green-400"
                              target="_blank"
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
                           <p className="lg:text-[13px] text-[12px] text-muted-foreground text-end mt-4">
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
