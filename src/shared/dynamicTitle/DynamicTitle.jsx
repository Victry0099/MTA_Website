import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const DynamicTitle = () => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;

    let title = "MTA India";

    switch (path) {
      case "/":
        title = "Welcome to MTA India";
        break;
      case "/about":
        title = "About Us - MTA India";
        break;
      case "/courses":
        title = "Our Courses - MTA India";
        break;
      case "/certificate":
        title = "Certificate Programs - MTA India";
        break;
      case "/coursesdetails":
        title = "Course Details - MTA India";
        break;
      case "/contact":
        title = "Contact Us - MTA India";
        break;
      case "/registration":
        title = "Registration Now - MTA India";
        break;
      case "/courses/full-stack-python":
        title = "Full Stack Development with Python - MTA India";
        break;
      case "/courses/full-stack-java":
        title = "Full Stack Development with Java - MTA India";
        break;
      case "/courses/mern-stack":
        title = "MERN Stack Development - MTA India";
        break;
      case "courses/react":
        title = "Frontend Development with React - MTA India";
        break;
      default:
        title = "MTA India";
    }

    document.title = title;
  }, [location]);

  return null; // This component does not render anything in the UI
};

export default DynamicTitle;
