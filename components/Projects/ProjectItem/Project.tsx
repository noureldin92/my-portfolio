import Image, { StaticImageData } from "next/image";
import React from "react";
import ProjectButton from "./ProjectButton";
import ProjectItemBody from "./ProjectItemBody";
import ProjectHeader from "./ProjectHeader";

const Project: React.FC<{
  title: string;
  technologies: string[];
  usageGuide: string;
  imgSrc: StaticImageData;
  imgTitle: string;
  description: string;
  gitUrl: string;
  liveUrl: string;
}> = ({
  usageGuide,
  technologies,
  title,
  imgTitle,
  imgSrc,
  description,
  liveUrl,
  gitUrl,
}) => {
  return (
    <main className="flex flex-col items-start w-full">
      <ProjectHeader
        gitUrl={gitUrl}
        liveUrl={liveUrl}
        title={title}
        description={description}
      />
      <section className="relative w-full flex rounded-md flex-col sm:flex-row sm:justify-evenly px-4 gap-y-4 items-center shadow-lg shadow-black/40 dark:shadow-black/50">
        <div className="absolute inset-0 bg-tri3Background z-0 bg-cover rounded-md"></div>
        <ProjectItemBody
          title={title}
          description={description}
          usageGuide={usageGuide}
          technologies={technologies}
          liveUrl={liveUrl}
          gitUrl={gitUrl}
        />
        <div className="flex flex-col justify-center items-center gap-y-1 py-2 z-10">
          <Image
            className="rounded-md shadow-md shadow-black/50"
            src={imgSrc}
            alt={imgTitle}
            width={250}
            height={100}
          />
          <section className="flex w-full gap-x-1 text-sm ">
            <ProjectButton title="Source Code" url={gitUrl} />
            <ProjectButton title="Live Demo" url={liveUrl} />
          </section>
        </div>
      </section>
    </main>
  );
};

export default Project;
