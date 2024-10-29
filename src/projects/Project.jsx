import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import recipeImage from '../assets/recipeImage.png';
import flickFinderImage from '../assets/FlickFinder.png';

const projects = [
    {
        name: 'Recipe Management System',
        description: 'A robust application to manage and share recipes with detailed ingredients, instructions, and images.',
        image: recipeImage,
        link: null, // Indicate confidential project by leaving link as null
        confidential: true,
    },
    {
        name: 'Flick Finder',
        description: 'A movie search and discovery platform with personalized suggestions and a clean, interactive UI.',
        image: flickFinderImage,
        link: 'https://frontend-flick-finder.vercel.app/',
        confidential: false,
    }
];

const Project = () => {
    const [showModal, setShowModal] = useState(false);

    // Handle project click
    const handleProjectClick = (project) => {
        if (project.confidential) {
            setShowModal(true);
        } else {
            window.open(project.link, "_blank");
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-800 to-black p-8 flex flex-col items-center">
  
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="relative bg-gray-900 rounded-lg overflow-hidden shadow-lg transform transition-transform cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        onClick={() => handleProjectClick(project)}
                    >
                        <div className="relative group">
                            {/* Image with Gradient Overlay */}
                            <img src={project.image} alt={project.name} className="w-full h-56 object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black opacity-70 group-hover:opacity-60 transition-opacity duration-300"></div>
                        </div>
                        
                        <div className="p-6">
                            <h2 className="text-2xl text-white font-bold mb-2">{project.name}</h2>
                            <p className="text-gray-400 mb-4">{project.description}</p>
                            <motion.a
                                className="inline-block text-indigo-500 hover:text-indigo-400 font-semibold transition-colors duration-200"
                                whileHover={{ x: 5 }}
                            >
                                View Project &rarr;
                            </motion.a>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Confidentiality Modal */}
            <AnimatePresence>
                {showModal && (
                    <motion.div
                        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="bg-gray-800 rounded-lg p-8 max-w-md w-full text-center"
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                        >
                            <h2 className="text-2xl text-white font-bold mb-4">Project Confidentiality</h2>
                            <p className="text-gray-300 mb-6">
                                Due to confidentiality agreements with the company, we cannot display details of this project publicly.
                            </p>
                            <button
                                onClick={() => setShowModal(false)}
                                className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-400 transition"
                            >
                                Close
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Project;
