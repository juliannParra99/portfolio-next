"use client";
import Image from "next/image";

const workexperiences = [
  {
    position: "Frontend/ Backend Developer",
    company: "Solar T.S",
    company_link: "",
    project:
      "Customer Relationship Management, Landing Page, Content Management System",
    skills: "TypeScript, React.js, Next.js, Express, MySQL",
    period: "May 2023 - November-2023",
    desc: `Development of a comprehensive Customer Relationship Management (CRM) system, a captivating Landing Page, and a dynamic Content Management System (CMS). Employing TypeScript, React.js, Next.js, and Express, I played a pivotal role in crafting these solutions. With a focus on delivering an intuitive user experience, I leveraged my skills in React.js and Next.js to build robust functionalities while ensuring a seamless and visually appealing interface. Collaborating closely with the team, I contributed actively to code reviews and worked diligently to optimize the systems for enhanced performance and customer interaction. During period, Throughout this period, I deepened my expertise in both frontend and backend development, aligning these skill sets with our project objectives and surpassing user expectations. Additionally, I extensively utilized MySQL databases to store data in a scalable manner, contributing to efficient data management and facilitating project scalability.`,
  },
  {
    position: "Frontend/Backend Dev, Frelance Worker",
    company: " Fiverr",
    company_link: "",
    project: "Ecommerce Project, Database Management, scaling and integration",
    skills: "Nextjs, React.js, Zustand, Material UI, Tailwind, MySQL",
    period: "2023 - Present",
    desc: `As a Freelance Frontend/Backend Developer at Fiverr, I spearheaded an e-commerce project focusing on robust Database Management, Scaling, and seamless Integration with both frontend and backend. Leveraging Next.js, React.js Zustand, Material UI, Tailwind, and MySQL, I ensured a high-performing and scalable platform.  My emphasis has been on optimizing database performance, scalability, and smooth connectivity across all application layers while I kept improving my expertise on these topics.`,
  },
];

const Experience = () => {
  return (
    <section className="my-8 md:my-12 relative ">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Working Experience
      </h2>
      <ol class="border-s border-gray-200 dark:border-gray-700">
        {workexperiences.map((experience, index) => (
          <li key={index} class="mb-10 ms-6">
            <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <svg
                class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </span>
            <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              {experience.company}: {experience.position}
            </h3>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {experience.period}
            </time>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">
              {experience.desc}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Experience;
