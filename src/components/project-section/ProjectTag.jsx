import React from "react";

// This component essentially generates a button representing a project tag that can be selected or unselected, applying different visual styles based on its selection state, and triggers a function when clicked, typically used to handle the selection or interaction with the tag.
const ProjectTag = ({ name, onClick, isSelected }) => {
    // Determine button styles based on selection
    const buttonStyles = isSelected
      ? "text-white border-purple-500" // Apply styles for selected tag
      : "text-[#ADB7BE] border-slate-600 hover:border-white"; // Apply styles for unselected tag on hover
  
    // Return a button element representing a project tag
    return (
      <button
        onClick={() => onClick(name)} // Handle click event, passes the tag name to the onClick function
        className={`border-2 rounded-full px-6 py-3 text-xl cursor-pointer ${buttonStyles}`} 
      >
        {name} 
      </button>
    );
  };

export default ProjectTag;