import React from "react";
import ProjectHeader from "./ProjectHeader";

const ProjectItemBody: React.FC<{
  technologies: string[];
  usageGuide?: string;
  title: string;
  description: string;
  gitUrl: string;
  liveUrl: string;
}> = ({ usageGuide, technologies }) => {
  return (
    <div className="w-full sm:w-2/3 flex flex-col space-y-1 py-6 h-full z-10">
      <section className="self-start w-full space-y-2">
        <h2 className=" mx-auto sm:mx-0 px-4 py-1 rounded-md  bg-gradient-to-r from-darkGray/50 to-transparent dark:from-white/50 dark:to-transparent w-fit text-white shadow-md">
          Used technologies
        </h2>
        <ul className=" text-sm  p-2 flex flex-wrap justify-center sm:justify-start gap-x-2 bg-black/30 rounded">
          {technologies.map((tech, index) => {
            return (
              <li key={index}>
                <p className="text-white">{tech}</p>
              </li>
            );
          })}
        </ul>
      </section>
      <section className="self-start w-full sm:w-[95%] space-y-2">
        <h3 className=" w-fit mx-auto sm:mx-0 px-4 py-1 rounded-md  bg-gradient-to-r from-darkGray/50 to-transparent dark:from-white/50  dark:to-transparent text-white shadow-md">
          Usage guide
        </h3>
        <p className=" text-sm  text-center sm:text-start p-2 text-white bg-black/30 rounded">
          {usageGuide && usageGuide}
        </p>
      </section>
    </div>
  );
};

export default ProjectItemBody;
