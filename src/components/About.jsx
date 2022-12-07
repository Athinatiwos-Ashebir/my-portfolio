import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gray-300 from-gray-800 to-black text-black"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          I am athinatiwos ashebir. 
          I am a Gondar universtiy student in 2015
          
        </p>

        <br />

        <p className="text-xl">
        just doing a project 
        </p>
      </div>
    </div>
  );
};

export default About;
