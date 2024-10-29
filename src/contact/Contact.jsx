import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import linkedInIcon from '../assets/LinkedIn.png'; // Ensure the correct file paths
import instagramIcon from '../assets/instagram_2111463.png'; // Ensure the correct file paths
import githubIcon from '../assets/GitHubb.jpg'; // Ensure the correct file paths
import emailIcon from '../assets/email.png'; // Ensure the correct file paths
import Feedback from '../feedback/FeedBack';
function Contact() {
  const handleClick = (platform) => {
    toast.success(`Navigating to ${platform}!`, {
      position: "top-right",
      autoClose: 3000,
    });
  };

  return (
   <Feedback/>
  );
}

export default Contact;
