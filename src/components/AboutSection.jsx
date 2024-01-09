"use client";
// Managing smooth UI transitions during state changes with useTransition
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

// Array of tab data objects containing titles, IDs, and content

const aboutMeSection = [
  {
    "aboutMe": `I'm a FullStack Software developer.My approach revolves around merging languages and tools to breathe life into innovative business ideas and practical aplications. My focus lies in deeply understanding business needs. This translates into solutions that are not just technically sound but also add value and solve real business problems.
    My soft skills are my main force. Clear communication and the ability to lead or collaborate within teams are crucial in translating business visions into tangible products.
    I firmly believe in constant improvement. I keep my skills updated, foster creativity, and learn from every project, always seeking ways to overcome challenges. ` 
  }
];

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>TypeScript Node.js, Express</li>
        <li>React.js, Next.js, Zustand, Material UI, Tailwind</li>
        <li>C# .Net Framework</li>
        <li>Python, Django</li>
        <li>MySQL, Microsoft SQL server</li>
        <li>Sequelize</li>
        <li>MongoDB</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>University of Buenos Aires, Bachelor of Psychology </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Google Computing Cloud, 2022</li>
      </ul>
    ),
  },
];

// AboutSection component responsible for rendering the about section
const AboutSection = () => {
  const [tab, setTab] = useState("skills"); // State to manage the active tab
  const [isPending, startTransition] = useTransition(); // Using concurrent mode transition

  // Function to handle tab change
  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id); // Set the active tab based on the clicked tab
    });
  };
  // Return JSX representing the about section

  return (
    <section id="about" className="text-white">
      <div className="gap-8 items-center py-8 px-4 xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-16">
        {/* change image for a good one */}
        <Image
          src="/images/hero_image.png"
          width={500}
          height={500}
          alt="about"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-white text-base md:text-lg">
          {aboutMeSection[0].aboutMe}
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8">
            {/* Find and display content for the active tab */}
            {/*
                 Use TAB_DATA.find() to locate the object in the TAB_DATA array
                where the 'id' property matches the currently selected 'tab'.
                Once found, access and display the 'content' property of that object.
            */}
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
