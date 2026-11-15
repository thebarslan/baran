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
         "Developed and optimized responsive user interfaces, web applications, and Go backend services to deliver real-time personalization experiences at scale.",
      technologies: [
         "Go",
         "JavaScript",
         "React",
         "HTML5",
         "CSS3",
      ],
      date: "01/2026 - 10/2026",
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

const sideProjects = [
   {
      title: "StyList - Teknasyon Hackathon 2024 (3rd Place)",
      link: "https://lnkd.in/p/dqaS_Qgn",
      linkText: "More Info",
      image: "/teknasyon-hackathon.jpg",
      imageAlt: "StyList team receiving the 3rd place award at Teknasyon Hackathon 2024",
      description:
         "Built StyList, an AI-powered mobile app that helps users choose outfits and integrates with clothing brands. Won 3rd place at Teknasyon Hackathon 2024, where I developed the backend.",
      technologies: [] as string[],
      date: "2024",
   },
];

const Projects = () => {
   return (
      <div className="projects flex flex-col gap-4 mt-4">
         <div className="title-container">
            <h2 className="text-xl font-bold">EXPERIENCES & PROJECTS</h2>
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
            {sideProjects.map((project) => (
               <Card className="w-full px-4 py-3" key={project.title}>
                  <Image
                     src={project.image}
                     alt={project.imageAlt}
                     width={1067}
                     height={542}
                     className="w-full h-auto rounded-md mb-3"
                  />
                  <h3 className="lg:text-lg text-base font-semibold">
                     {project.title}
                  </h3>
                  <p className="text-sm text-secondary-foreground mt-2">
                     {project.description}
                  </p>
                  <Link
                     href={project.link}
                     className="text-sm text-green-400"
                     target="_blank"
                  >
                     {project.linkText}
                  </Link>
                  {project.technologies.length > 0 && (
                     <div className="technologies-container flex-wrap flex gap-2 mt-4">
                        {project.technologies.map((technology) => (
                           <Badge key={technology}>{technology}</Badge>
                        ))}
                     </div>
                  )}
                  <p className="lg:text-[13px] text-[12px] text-muted-foreground text-end mt-4">
                     {project.date}
                  </p>
               </Card>
            ))}
         </div>
      </div>
   );
};

export default Projects;
