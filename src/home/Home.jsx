import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import linkedInIcon from '../assets/LinkedIn.png';
import instagramIcon from '../assets/instagram_2111463.png';
import githubIcon from '../assets/GitHubb.jpg';
import emailIcon from '../assets/email.png';
import profilePhoto from '../assets/profilePhoto.webp';
import { motion } from 'framer-motion';

const textVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      type: 'spring',
      stiffness: 80,
    },
  }),
};

const descriptionVariant = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: 'easeInOut',
    },
  },
};

const iconVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      type: 'spring',
      stiffness: 80,
    },
  }),
};

const profilePhotoVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      type: 'spring',
      stiffness: 80,
    },
  },
};

function Home() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleDownload = () => {
    toast.success('Resume opened in a new tab!', {
      autoClose: 2000,
    });
  };

  return (
    <>
      <div className="min-h-screen flex flex-col md:flex-row items-stretch bg-gradient-to-r from-gray-800 to-black p-8 overflow-hidden">
        {/* Left Side - Name and Title */}
        <div className="flex flex-col justify-start w-full md:w-1/2 text-left text-white mt-10 md:mt-0">
          <div className="mb-4 mt-24 ml-10">
            {showContent && (
              <>
                <motion.h2
                  className="text-xl md:text-2xl mb-2"
                  initial="hidden"
                  animate="visible"
                  variants={textVariant}
                  custom={0}
                >
                  <span className="text-white ml-2">Hey, I'm</span> <span className="text-teal-400 text-5xl ml-2">Gourav</span>
                </motion.h2>

                <motion.h1
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-600 mb-4 mt-9"
                  initial="hidden"
                  animate="visible"
                  variants={textVariant}
                  custom={1}
                >
                  <span className='text-white text-2xl mr-4'>I'm a </span>
                  Software Engineer
                </motion.h1>

                {/* Resume Button */}
                <div className="mt-16">
                  <a
                    href="/Portfolio/Gourav_Shintre_resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out shadow-md hover:shadow-lg transform hover:scale-105 bg-transparent hover:bg-opacity-90"
                    onClick={handleDownload}
                  >
                    Resume
                  </a>
                  <ToastContainer />
                </div>
              </>
            )}
          </div>
        </div>

        {/* Right Side - Profile Photo, Description and Social Links */}
        <div className="flex flex-col justify-between w-full md:w-1/2 text-left text-white mt-10 md:mt-0">
          {/* Profile Photo with Animation */}
          <div className="flex justify-center mt-10">
            <motion.img
              src={profilePhoto}
              className="w-40 h-40 md:w-52 md:h-52 rounded-full border-4 border-teal-500 shadow-lg object-cover"
              alt="Profile"
              initial="hidden"
              animate="visible"
              variants={profilePhotoVariant}
            />
          </div>

          <div className="flex-grow flex items-center mt-5">
            <motion.p
              className="text-gray-300 text-sm md:text-base lg:text-lg leading-relaxed max-w-2xl"
              initial="hidden"
              animate="visible"
              variants={descriptionVariant}
            >
              I’m a passionate Software Engineer specializing in crafting seamless user interfaces and experiences. I focus on writing clean and efficient code, keeping up with the latest technologies, and constantly improving my skills in modern JavaScript frameworks and libraries.
            </motion.p>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center items-center mt-8 gap-6 mb-10">
            <NavLink to="https://www.linkedin.com/in/gourav-shintre-b52545252/" target="_blank" rel="noopener noreferrer">
              <motion.img
                src={linkedInIcon}
                className="w-12 h-12 hover:scale-125 hover:rotate-6 transition-transform duration-300 ease-in-out"
                alt="LinkedIn"
                initial="hidden"
                animate="visible"
                variants={iconVariant}
                custom={0}
              />
            </NavLink>
            <NavLink to="https://github.com/Gourav-Shintre" target="_blank" rel="noopener noreferrer">
              <motion.img
                src={githubIcon}
                className="w-12 h-12 hover:scale-125 hover:rotate-6 transition-transform duration-300 ease-in-out"
                alt="GitHub"
                initial="hidden"
                animate="visible"
                variants={iconVariant}
                custom={1}
              />
            </NavLink>
            <NavLink to="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <motion.img
                src={instagramIcon}
                className="w-12 h-12 hover:scale-125 hover:rotate-6 transition-transform duration-300 ease-in-out"
                alt="Instagram"
                initial="hidden"
                animate="visible"
                variants={iconVariant}
                custom={2}
              />
            </NavLink>
            <NavLink to="mailto:gouravshintre002@gmail.com">
              <motion.img
                src={emailIcon}
                className="w-12 h-12 hover:scale-125 hover:rotate-6 transition-transform duration-300 ease-in-out bg-slate-50 rounded-lg"
                alt="Email"
                initial="hidden"
                animate="visible"
                variants={iconVariant}
                custom={3}
              />
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
