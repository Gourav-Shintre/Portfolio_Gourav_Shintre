import React from 'react';
import { motion } from 'framer-motion';
import react from '../assets/React.png';
import javaScript from '../assets/JavaScript.png';
import html from '../assets/HTML5.png';
import css from '../assets/CSS3.png';
import tailwind from '../assets/Tailwind CSS.png';
import redux from '../assets/Redux.png';
import typeScript from '../assets/TypeScript.png';
import gitHub from '../assets/GitHubb.jpg';

function SkillAndExperience() {
  const skills = [
    { name: 'HTML5', icon: html },
    { name: 'CSS3', icon: css },
    { name: 'JavaScript', icon: javaScript },
    { name: 'TypeScript', icon: typeScript },
    { name: 'React', icon: react },
    { name: 'Tailwind CSS', icon: tailwind },
    { name: 'Redux', icon: redux },
    { name: 'GitHub', icon: gitHub },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 to-black text-white p-10 flex flex-col items-center">
      {/* Skills Section */}
      <motion.div
        className="w-full flex flex-col items-center mb-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <h2 className="text-3xl text-teal-400 font-bold mb-8">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="flex flex-col items-center text-center p-6 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl shadow-lg cursor-pointer hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:bg-teal-500"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img src={skill.icon} alt={skill.name} className="h-16 w-16 rounded-full bg-gray-800 p-2" />
              <p className="text-white mt-4 font-medium">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Work Experience Section */}
      <motion.div
        className="w-full flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-4xl font-bold text-teal-400 mb-12">Work Experience</h2>

        {/* Experience Cards */}
        {[
          {
            title: "Jr. Software Engineer at Epam Systems",
            duration: "May 2024 - September 2024",
            location: "Hyderabad, India",
            responsibilities: [
              "Developed responsive websites using HTML, CSS, JavaScript, and React.",
              "Collaborated with cross-functional teams to deliver high-quality web applications.",
              "Participated in Agile ceremonies to improve team collaboration and efficiency.",
              "Utilized JIRA and GitHub for project tracking and version control.",
            ]
          },
        ].map((experience, index) => (
          <motion.div
            key={index}
            className="mb-14 w-full max-w-3xl bg-gradient-to-r from-gray-700 to-gray-900 p-8 rounded-lg shadow-lg hover:shadow-xl transform transition-transform duration-300 hover:scale-105"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: index * 0.3 }}
          >
            <h3 className="text-2xl font-semibold text-teal-400">{experience.title}</h3>
            <span className="block text-gray-400">{experience.duration} | {experience.location}</span>

            {/* Responsibilities */}
            <div className="flex items-center mt-4">
              <h4 className="text-lg font-medium">Responsibilities:</h4>
            </div>
            <ul className="list-disc list-inside mt-2 space-y-1">
              {experience.responsibilities.map((item, i) => (
                <motion.li
                  key={i}
                  className="text-gray-300 hover:text-teal-400 transition-colors duration-200"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default SkillAndExperience;
