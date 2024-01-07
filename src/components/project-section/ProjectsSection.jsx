"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

//change the "image" property for the link to real project
const projectsData = [
  {
    title: "Digital E-commerce",
    description: "ecommerce",
    image: "images/projects-section/digital-ecommerce.png",
    tag: ["All", "Web"],
  },
  {
    title: "Study Cases News Application",
    description: "Project 1 description",
    image: "images/projects-section/study-cases.png",
    tag: ["All", "Web"],
  },
  {
    title: "E-commerce Inventory Management",
    description: "Project 1 description",
    image: "images/projects-section/inventory-management.png",
    tag: ["All", "Web"],
  },
  {
    title: "Music Records Management System",
    description: "Project 1 description",
    image: "images/projects-section/music-records.png",
    tag: ["All", "Web"],
  },
  {
    title: "Students Management System",
    description: "Project 1 description",
    image: "images/projects-section/Students_management.png",
    tag: ["All", "Web"],
  },
  {
    title: "Movies and Series Streamin App",
    description: "Project 1 description",
    image: "images/projects-section/movies-app-next-js.png",
    tag: ["All", "Web"],
  },
  {
    title: "Criptocurrency Prices Application",
    description: "Project 1 description",
    image: "images/projects-section/criptocurrency-prices-api.png",
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
          name="Mobile"
          onClick={handleTagChange}
          isSelected={tag == "Mobile"}
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
