"use client";
import React, {useState} from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  //if i want to use the date data which come from the form i need to use fetch or axios to use my api/send/route.js to pass there the date and use it into the mail

  // State to track successful email submission.
  // Prevent default form submission, extract form data, convert to JSON, and define server endpoint.

  // Send a POST request to the server with the JSON-formatted data.
  // If successful (status code 200), log a success message and update the emailSubmitted state.

  // Render content based on email submission status.
  // Display a success message or the submission form, depending on the emailSubmitted state.

  const [emailSubmitted, setEmailSubmitted] = useState(false);

  // Handle form submission event, prevent default behavior, and extract form data (email, subject, message) from the event.
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };


  return (
    <section id="contact" className="grid md:grid-cols-2 my-12 md:my-16 py-24 gap-4 relative">
      <div className="absolute w-80 h-80 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full blur-lg top-full -left-4 transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I'm currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I'll try my best
          to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/juliannParra99" target="_blank">
            <Image src={GithubIcon} alt={GithubIcon} />
          </Link>
          <Link href="https://www.linkedin.com/in/juliannparra/" target="_blank">
            <Image src={LinkedinIcon} alt={GithubIcon} />
          </Link>
        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">
            Email sent successfully!
          </p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-white"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-[#18191E] border border-[#33353F] bg-[#18191E] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg  block w-full p-2.5"
                placeholder="example@google.com"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-white"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="bg-gray-[#18191E] border border-[#33353F] bg-[#18191E] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg  block w-full p-2.5"
                placeholder="Just saying hi"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-white"
              >
                Message
              </label>
              <textarea
                id="message"
                className="bg-gray-[#18191E] border border-[#33353F] bg-[#18191E] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg  block w-full p-2.5"
                placeholder="Let's talk about..."
              />
            </div>
            <div className="mb-6">
              <button
                type="submit"
                className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
              >
                {" "}
                Send message{" "}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;