"use client";

import React from "react";

interface Props {
  project: {
    id: number;
    pp: string;
    cat: string;
    img: string;
    username: string;
  };
}

const ProjectCard = ({ project }: Props) => {
  return (
    <div>
      <div className="relative w-[300px] h-[300px] rounded overflow-hidden border shadow-md">
        <img
          className="w-full h-[70%] object-cover"
          src={project.img}
          alt=""
          loading="lazy"
        />

        <div className="flex items-center space-x-3 p-4">
          <img
            className="w-9 h-9 rounded-full object-cover"
            src={project.pp}
            alt=""
            loading="lazy"
          />

          <div className="flex flex-col">
            <h2 className="font-bold text-sm">{project.cat}</h2>

            <p className="text-xs">{project.username}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
