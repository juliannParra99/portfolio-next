"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

//change the "image" property for the link to real project
const projectsData = [
  {
    title: "Authentication and Authorization: .NET, Entity Framework",
    description: ` .NET Core module that handles user authentication and authorization with Entity Framework Core for data storage. Users cannot access backend data without proper credentials.`,
    image: "/images/projects-section/api-jwt-img.png",
    tag: ["All", "Web"],
  },
  {
    title: "Replicate: Image Generation",
    description: `Web application that leverages the power of Replicate's API to empower users to generate images from text descriptions (prompts).`,
    image: "/images/projects-section/replicate.png",
    tag: ["All", "Web"],
  },
  {
    title: "Digital E-commerce",
    description: `Powered by secure payment systems and reliable authentication is responsive, ensuring an optimal experience across devices. Its versatility makes it adaptable to various niches and business ideas, providing a robust foundation for entrepreneurial ventures.`,
    image: "/images/projects-section/digital-ecommerce.png",
    tag: ["All", "Web"],
  },
  {
    title: "Study Cases News Application",
    description: `Study Cases News Platform: A scalable model powered by Next.js, React, and Typescript. Unlocking potential expansions into diverse niches, offering curated insights and paving the way for versatile business models`,
    image: "/images/projects-section/study-cases.png",
    tag: ["All", "Web"],
  },
  {
    title: "E-commerce Inventory Management",
    description: `A user-friendly desktop application empowering precise record handling and error-free inventory control. Seamlessly organize, modify, and swiftly access data. Designed to streamline operations, optimize decision-making, and enhance overall efficiency.`,

    image: "/images/projects-section/inventory-management.png",
    tag: ["All", "Desktop"],
  },
  {
    title: "Music Records Management System",
    description:
      "Disk management app in C#. Enables streamlined handling of diverse disk types—unlocking business potentials through efficient data organization and management.",
    image: "/images/projects-section/music-records.png",
    tag: ["All", "Desktop"],
  },
  {
    title: "Students Management System",
    description: `Revamped project features robust security for student data management. Seamlessly handles complex tasks like user authentication, data manipulation, and system flexibility. Adaptable for diverse educational niches, offering scalable solutions for varied business models.`,
    image: "/images/projects-section/Students_management.png",
    tag: ["All", "Web"],
  },
  {
    title: "Movies and Series Streamin App",
    description: `Versatile movie and series catalog web app using Next.js and Typescript, primed for diverse niches and business models. Its adaptable framework and versatile features open doors for varied applications, from entertainment hubs to educational platforms, offering scalable solutions for entrepreneurial ventures.`,

    image: "/images/projects-section/movies-app-next-js.png",
    tag: ["All", "Web"],
  },
  {
    title: "Criptocurrency Prices Application",
    description: ` Utilizes an API for real-time values, showcasing major Cryptocurrency prices. Unlocking potential business opportunities through real-time market insights and cryptocurrency value tracking.`,
    image: "/images/projects-section/criptocurrency-prices-api.png",
    tag: ["All", "Web"],
  },
];

//   This component essentially manages a section displaying projects, providing tag selection buttons and dynamically rendering project cards based on the selected tag
const ProjectsSection = () => {
  // State hook to manage the selected tag
  const [tag, setTag] = useState("All");

  //with whis we will handle the state of our animation
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  //animation
  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  // Filter projects based on the selected tag
  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  // Function to handle tag change and update the selected tag state
  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  return (
    <section id="projects" ref={ref} className="my-8 md:my-12">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="flex flex-row justify-center items-center gap-2 text-white my-6">
        <ProjectTag
          name="All"
          onClick={handleTagChange}
          isSelected={tag === "All"}
        />
        <ProjectTag
          name="Web"
          onClick={handleTagChange}
          isSelected={tag === "Web"}
        />
        <ProjectTag
          name="Desktop"
          onClick={handleTagChange}
          isSelected={tag == "Desktop"}
        />
      </div>
      <ul className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
            key={index}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.image}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
