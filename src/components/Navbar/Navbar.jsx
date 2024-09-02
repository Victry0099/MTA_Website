import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const linkClasses = ({ isActive }) =>
    isActive
      ? "text-orange-500 hover:text-orange-500"
      : "text-slate-800 hover:text-orange-500";

  return (
    <header className="sticky top-0 z-50">
      <nav className="bg-white p-4 border-b-2 border-b-slate-200">
        <div className="container mx-auto flex justify-between items-center lg:justify-around md:justify-between">
          <div className="text-[#E27447] font-semibold text-3xl font-sans tracking-wide">
            <Link to="/" className="">
              <img
                src="/images/newMtaLogo.png"
                alt="Website Logo"
                className="w-30 h-10 sm:w-30 sm:h-10 md:w-40 md:h-14"
              />
            </Link>
          </div>
          <div className="hidden md:flex space-x-4 text-lg ">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${linkClasses({ isActive })} text-xl`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${linkClasses({ isActive })} text-xl`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/certificate"
              className={({ isActive }) =>
                `${linkClasses({ isActive })} text-xl`
              }
            >
              Certificate
            </NavLink>
            <NavLink
              to="/courses"
              className={({ isActive }) =>
                `${linkClasses({ isActive })} text-xl`
              }
            >
              Courses
            </NavLink>

            <NavLink
              to="/registration"
              className={({ isActive }) =>
                `${linkClasses({ isActive })} text-xl`
              }
            >
              Registration
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${linkClasses({ isActive })} text-xl`
              }
            >
              Contact
            </NavLink>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-black">
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden flex flex-col space-y-2 mt-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${linkClasses({ isActive })} text-lg`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${linkClasses({ isActive })} text-lg`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/certificate"
              className={({ isActive }) =>
                `${linkClasses({ isActive })} text-lg`
              }
            >
              Certificate
            </NavLink>
            <NavLink
              to="/courses"
              className={({ isActive }) =>
                `${linkClasses({ isActive })} text-lg`
              }
            >
              Courses
            </NavLink>

            <NavLink
              to="/registration"
              className={({ isActive }) =>
                `${linkClasses({ isActive })} text-lg`
              }
            >
              Registration
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${linkClasses({ isActive })} text-lg`
              }
            >
              Contact
            </NavLink>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
