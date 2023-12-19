"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

//change the "image" property for the link to real project
const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/hero_image.png",
    tag: ["All", "Web"],
  },
  {
    id: 2,
    title: "Potography Portfolio Website",
    description: "Project 2 description",
    image: "/images/hero_image.png",
    tag: ["All", "Web"],
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: "Project 3 description",
    image: "/images/hero_image.png",
    tag: ["All", "Web"],
  },
  {
    id: 4,
    title: "Food Ordering Application",
    description: "Project 4 description",
    image: "/images/hero_image.png",
    tag: ["All", "Mobile"],
  },
  {
    id: 5,
    title: "React Firebase Template",
    description: "Authentication and CRUD operations",
    image: "/images/hero_image.png",
    tag: ["All", "Web"],
  },
  {
    id: 6,
    title: "Full-stack Roadmap",
    description: "Project 5 description",
    image: "/images/hero_image.png",
    tag: ["All", "Web"],
  },
];

//   This component essentially manages a section displaying projects, providing tag selection buttons and dynamically rendering project cards based on the selected tag
const ProjectsSection = () => {

  // State hook to manage the selected tag
  const [tag, setTag] = useState("All");

  // Filter projects based on the selected tag
  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  // Function to handle tag change and update the selected tag state
  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  return (
    <section className="my-8 md:my-12">
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
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;