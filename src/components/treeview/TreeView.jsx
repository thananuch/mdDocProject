import React, { useState } from "react";

export function TreeItem({  id, title, children , icon , activeId, setActiveId }) {

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setActiveId(title);
    if (children) {
      setIsOpen(!isOpen);
    }
  };
  
  return (
    <div>
      <div  className={`flex items-center mx-2 mt-2 p-2 cursor-pointer rounded-md  ${
          activeId === title ? "bg-[#f4f9ff] text-[#1976D2] border font-bold" : ""
        }`}  onClick={handleClick}>
        <div>{children ? (isOpen ? "-" : ">") : ""}</div>
        <div className="flex ml-2">{icon} <span className="mx-2">{title}</span></div>
      </div>
      {isOpen && <div className="mx-5">{children}</div>}
    </div>
  );
}


