import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  let Navigate = useNavigate();

  const btnOne = () => {
    console.log("button return is clicked.....");
  };
  const btnTwo = () => {
    console.log("button back is clicked.....");
  };

  return (
    <div className="text-4xl font-bold">
     <div className="flex gap-7">
       <button
        onClick={() => {
          btnOne();
          Navigate('/home')
        }}
        className="bg-emerald-500 font-medium text-2xl py-2 px-2 rounded active:scale-95 cursor-pointer"
      >
        Return to Home page
      </button>
      <button
        onClick={() => {
          btnTwo();
          Navigate('/contact')
        }}
        className="bg-emerald-500 font-medium text-2xl py-2 px-2 rounded active:scale-95 cursor-pointer"
      >
        Back
      </button>
     </div>
      <h1 className="text-4xl font-bold">About page</h1>
    </div>
  );
};

export default About;
