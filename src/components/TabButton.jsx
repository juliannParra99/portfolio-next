import React from "react";

// this component generates a button with conditional styling based on its active prop and triggers a function (selectTab) when clicked.
const TabButton = ({ active, selectTab, children }) => {
  // Determine the CSS classes for the button based on whether it's active or not
  const buttonClasses = active
    ? "text-white border-purple-500 border-b"
    : "text-[#ADB7BE]";

  // Return a button element with an onClick event that triggers the selectTab function
  return (
    <button onClick={selectTab}>
      {/* Inside the button, create a paragraph element */}
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {/* Display the content passed into the component */}
        {children}
      </p>
    </button>
  );
};

// Export the TabButton component as the default export
export default TabButton;
