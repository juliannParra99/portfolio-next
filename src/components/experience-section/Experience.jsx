"use client";
import Image from "next/image";

const workexperiences =  [
  {
    "position": "Frontend Developer",
    "company": "random Company",
    "company_link": "https://tumoco.co.jp/",
    "project": "CMS",
    "skills": "Reactjs, Material UI, Redux",
    "period": "May 2023 - Present",
    "desc": " lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
  },
  {
    "position": "Frontend Developer",
    "company": " MWC ",
    "company_link": "https://www.nwc.com/",
    "project": "Ecommerce Project",
    "skills": "Nextjs, Zustand, Material UI, Tailwind",
    "period": "Oct 2022 - Jan 2023",
    "desc": "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
  }
]

const Experience = () => {
  return (
    <section className="my-8 md:my-12 relative ">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Working Experience
      </h2>
      <ol class="border-s border-gray-200 dark:border-gray-700">
        {workexperiences.map((experience, index)=>(
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
            {experience.position} in {experience.company}
          </h3>
          <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Released on December 7th, 2021
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
