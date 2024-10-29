import React from 'react';
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com'; // Import emailjs

function Feedback() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const emailData = {
      from_name: data.name,      // Correct mapping for sender's name
      reply_to: data.email,      // Use email as the reply-to
      message: data.message,      // The message content
      to_name: 'FlickFinder Support' // Optional recipient name for customization
    };

    emailjs.send(
      'service_6imv41g',           // Your EmailJS service ID
      'template_ze67z2s',          // Your EmailJS template ID
      emailData,                   // Data matching template variables
      'Z-9K9X0cPD_R5vW3t'          // Your EmailJS user ID
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      toast.success('Your message has been sent successfully!', {
        position: "top-right",
        autoClose: 3000,
        onClose: () => reset(),
      });
    })
    .catch((error) => {
      console.error('Email send error:', error);
      toast.error('Failed to send message. Please try again.', {
        position: "top-right",
        autoClose: 3000,
      });
    });
};



  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-800 to-black p-5">
      <motion.div
        className="w-full max-w-md"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold text-white mb-6 text-center animate-fade-in">Let's Connect!</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-6">
          
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-white font-semibold mb-2">Name</label>
            <input
              type="text"
              id="name"
              className={`w-full border-b-2 border-teal-300 text-white bg-transparent focus:outline-none transition duration-300 ease-in-out ${errors.name ? 'border-red-500' : 'border-teal-300'}`}
              placeholder="Your Name"
              aria-label="Your Name"
              {...register("name", { required: 'This field is required' })}
            />
            {errors.name && <p className="text-red-400 mt-2">{errors.name.message}</p>}
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-white font-semibold mb-2">Email</label>
            <input
              type="email"
              id="email"
              className={`w-full border-b-2 border-teal-300 text-white bg-transparent focus:outline-none transition duration-300 ease-in-out ${errors.email ? 'border-red-500' : 'border-teal-300'}`}
              placeholder="Your Email"
              aria-label="Your Email"
              {...register("email", {
                required: 'This field is required',
                pattern: {
                  value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                  message: 'Enter a valid email address',
                },
              })}
            />
            {errors.email && <p className="text-red-400 mt-2">{errors.email.message}</p>}
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-white font-semibold mb-2">Message</label>
            <textarea
              id="message"
              rows="2"
              className={`w-full border-b-2 border-teal-300 text-white bg-transparent focus:outline-none transition duration-300 ease-in-out ${errors.message ? 'border-red-500' : 'border-teal-300'}`}
              placeholder="Your Message"
              aria-label="Your Message"
              {...register("message", { 
                required: 'This field is required',
                minLength: { value: 10, message: 'Message should be at least 10 characters' },
              })}
            ></textarea>
            {errors.message && <p className="text-red-400 mt-2">{errors.message.message}</p>}
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-transparent border-2 border-teal-500 text-teal-500 font-bold py-2 px-4 rounded-lg hover:bg-teal-500 hover:text-white transition duration-300 ease-in-out"
            >
              Submit
            </button>
          </div>
        </form>

        <ToastContainer />
      </motion.div>
    </div>
  );
}

export default Feedback;
