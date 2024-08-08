import { projectOne, projectThree, projectTwo } from "../../assets/index";

import ProjectsCard from './ProjectsCard';
import React from 'react';
import Title from '../layouts/Title';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          // title="VISIT MY PORTFOLIO AND BRING YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="GEMINI CLONE"
          des= "I designed the UI for a Gemini AI clone, focusing on creating an intuitive and user-friendly interface. Although the project is still in progress, it demonstrates my proficiency in UI/UX design and front-end development."
          src={projectOne}
        />
        <ProjectsCard
          title="Portfolio Website"
          des="I developed a portfolio website to showcase my projects, skills, and experiences. This site reflects my expertise in web design, coding, and creating visually appealing layouts to effectively present my professional journey."
          src={projectTwo}
        />
        <ProjectsCard
          title="Chatting App"
          des="I developed a fully functional chat app using Flutter and Firebase, integrating real-time messaging, user authentication, and cloud storage. This project highlights my skills in both front-end and back-end development, demonstrating a seamless user experience and efficient data management."
          src={projectThree}
        />
        <ProjectsCard
          title="university watch"
          des="For my final year project, I developed a social media application called University Watched using Flutter and Firebase. This app features real-time interactions, user authentication, and dynamic content management, showcasing my expertise in building comprehensive, scalable applications."
          src={projectThree}
        />

      </div>
    </section>
  );
}

export default Projects