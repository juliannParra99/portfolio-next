/* eslint-disable react/no-unescaped-entities */
//rafce
"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r  from-purple-400 to-red-600">
              Hello, I'm{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Julian Parra",
                1150,
                "Frontend/Backend",
                1100,
                "Software Dev",
                1200,
                "Mobile Designer",
                1000,
                "UI/UX Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptatum.
          </p>
          <div>
            <button className="bg-gradient-to-br from-blue-500 via-purple-500 to-red-500 hover:bg-slate-200 text-white px-6 py-3 rounded-full mr-4">
              Hire Me
            </button>
            <button className="m-4 bg-gradient-to-br from-blue-500 via-purple-500 to-red-500 px-1 py-1  text-white rounded-full">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero_image.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

// const HeroSection = () => {
//   return (
//     <section className="grid grid-cols-1 lg:grid-cols-12 my-4">
//       <div className="col-span-7 place-self-center place-items-center grid lg:place-items-start">
//         <h1 className="text-white max-w-2xl mb-4 lg:text-6xl text-4xl font-extrabold">
//           <span className="text-transparent text-6xl bg-clip-text bg-gradient-to-r from-purple-400 to-red-600">
//             Hello, I'm{"  "}
//           </span>{" "}
//           <br></br>
//           <TypeAnimation
//             sequence={[
//               "Julian Parra",
//               1150,
//               "Frontend/Backend",
//               1100,
//               "Software Dev",
//               1200,
//               "Mobile Designer",
//               1000,
//               "UI/UX Designer",
//               1000,
//             ]}
//             wrapper="span"
//             speed={50}
//             repeat={Infinity}
//           />
//         </h1>
//         <p className="text-[#ADB7BE] mb-6 textl-lg lg:text-xl">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
//           voluptatum.
//         </p>
//         <div>
//           <button className="bg-gradient-to-br from-blue-500 via-purple-500 to-red-500 hover:bg-slate-200 text-white px-6 py-3 rounded-full mr-4">
//             Hire Me
//           </button>
//           <button className="m-4 bg-gradient-to-br from-blue-500 via-purple-500 to-red-500 px-1 py-1  text-white rounded-full">
//             <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
//               Download CV
//             </span>
//           </button>
//         </div>
//       </div>
//       <div className="col-span-5 place-self-center mt-4 lg:mt-0">
//         <div className="bg-[#181818] lg:w-[400px] lg:h-[400px] w-[250px] h-[250px] rounded-full relative">
//           <Image
//             src="/images/hero_image.png"
//             alt="hero image"
//             className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
//             width={300}
//             height={300}
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

//   return (
//     <section className="lg:py-16">
//       <div className="grid grid-cols-1 sm:grid-cols-12">
//         <motion.div
//           initial={{ opacity: 0, scale: 0.5 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.5 }}
//           className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
//         >
//           <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold">

//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
//               Hello, I'm{" "}
//             </span>
//             <br></br>
//             <TypeAnimation
//               sequence={[
//                 "Julian Parra",
//                 1150,
//                 "Frontend/Backend",
//                 1100,
//                 "Software Dev",
//                 1200,
//                 "Mobile Designer",
//                 1000,
//                 "UI/UX Designer",
//                 1000,
//               ]}
//               wrapper="span"
//               speed={50}
//               repeat={Infinity}
//             />
//           </h1>
//           <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
//             voluptatum.
//           </p>
//           <div>
//             <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white">
//               Hire Me
//             </button>
//             <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3">
//               <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
//                 Download CV
//               </span>
//             </button>
//           </div>
//         </motion.div>
//         <motion.div
//           initial={{ opacity: 0, scale: 0.5 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.5 }}
//           className="col-span-4 place-self-center mt-4 lg:mt-0"
//         >
//           <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
//             <Image
//               src="/images/hero_image.png"
//               alt="hero image"
//               className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
//               width={300}
//               height={300}
//             />
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };
