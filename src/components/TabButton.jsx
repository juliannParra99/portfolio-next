import React from "react";
import { motion } from "framer-motion";

//with this we will controll the state of our animation
const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

// this component generates a button with conditional styling based on its active prop and triggers a function (selectTab) when clicked.
const TabButton = ({ active, selectTab, children }) => {
  // Determine the CSS classes for the button based on whether it's active or not
  const buttonClasses = active
    ? "text-white "
    : "text-[#ADB7BE]";

  // Return a button element with an onClick event that triggers the selectTab function
  return (
    <button onClick={selectTab}>
      {/* Inside the button, create a paragraph element */}
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {/* Display the content passed into the component */}
        {children}
      </p>
      {/* animation */}
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-purple-500  mt-2 mr-3"
      ></motion.div>
    </button>
  );
};

// Export the TabButton component as the default export
export default TabButton;
