import React, { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useRegistrationUserMutation } from "../../redux/api/api.js";
import { setFormField, resetForm } from "../../redux/reducers/formSlice";

const PopupForm = () => {
  const [showPopup, setShowPopup] = useState(false);

  const dispatch = useDispatch();
  const { name, email, number, courses, trainingMode } = useSelector(
    (state) => state.forms
  );
  const [registrationUser, { isLoading, isSuccess, isError }] =
    useRegistrationUserMutation();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch(setFormField({ name, value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      name,
      email,
      number,
      courses,
      trainingMode,
    };

    console.log("Submitting form data:", formData);

    try {
      const response = await registrationUser(formData);
      console.log("Server response:", response);
      dispatch(resetForm());
      handleClose();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleClose = () => {
    setShowPopup(false);
    localStorage.setItem("popupShown", "true");
  };

  useEffect(() => {
    const popupShown = localStorage.getItem("popupShown");

    if (!popupShown) {
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 4000);

      return () => clearTimeout(timer);
    }

    // Remove popupShown from localStorage when the window is closed
    const handleWindowClose = () => {
      localStorage.removeItem("popupShown");
    };
    window.addEventListener("beforeunload", handleWindowClose);

    return () => {
      window.removeEventListener("beforeunload", handleWindowClose);
    };
  }, []);

  return (
    <div className="relative">
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
          <div className="bg-gradient-to-r from-gray-300 to-gray-50 p-8 rounded-lg shadow-lg relative max-w-3xl w-full">
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 text-gray-500 hover:text-red-600"
            >
              <IoClose size={24} />
            </button>
            <div className="flex flex-col md:flex-row">
              <div className="hidden md:flex md:w-1/2 md:pr-4 mb-4 md:mb-0 justify-center items-center flex-col">
                <h2 className="text-2xl font-semibold mb-4">
                  Course Registration
                </h2>
                <p>
                  Register for our IT-related courses and choose your preferred
                  mode of study.
                </p>
              </div>
              <div className="ps-4 py-2 md:w-1/2 md:pl-4 shadow-2xl shadow-gray-500 rounded-xl">
                <form className="pe-2 pt-2" onSubmit={handleSubmit}>
                  <div className="mb-1">
                    <label className="block text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={name}
                      onChange={handleInputChange}
                      required
                      autoFocus
                      placeholder="Full Name"
                      className="w-full px-4 py-1 bg-transparent text-black outline-none rounded-lg border-b-2 border-slate-950 focus:outline-none"
                    />
                  </div>
                  <div className="mb-1">
                    <label className="block text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={email}
                      onChange={handleInputChange}
                      placeholder="Email"
                      className="w-full px-4 py-1 bg-transparent text-black outline-none rounded-lg border-b-2 border-slate-950 focus:outline-none"
                    />
                  </div>
                  <div className="mb-1">
                    <label className="block text-gray-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      name="number"
                      value={number}
                      onChange={handleInputChange}
                      required
                      placeholder="Phone Number"
                      className="w-full px-4 py-1 bg-transparent text-black outline-none rounded-lg border-b-2 border-slate-950 focus:outline-none"
                    />
                  </div>
                  <div className="mb-1">
                    <label className="block text-gray-700 mb-2">Courses</label>
                    <div className="relative sm:max-h-32 sm:overflow-y-auto">
                      <select
                        name="courses"
                        value={courses}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-1 bg-transparent text-black outline-none rounded-lg border-b-2 border-slate-950 focus:outline-none"
                      >
                        <option value="">Courses</option>
                        <option>Full Stack With Python</option>
                        <option>Full Stack With Java</option>
                        <option>Frontend With React</option>
                        <option>MERN Stack</option>
                        <option>Others</option>
                      </select>
                    </div>
                  </div>
                  <div className="mb-1">
                    <label className="block text-gray-700 mb-2">Mode</label>
                    <select
                      name="trainingMode"
                      value={trainingMode}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-1 bg-transparent text-black outline-none rounded-lg border-b-2 border-slate-950 focus:outline-none"
                    >
                      <option value="">Training Mode</option>
                      <option>Offline</option>
                      <option>Online</option>
                      <option>Hybrid</option>
                    </select>
                  </div>
                  <div className="text-center py-2">
                    <button
                      type="submit"
                      className="bg-blue-600 hover:bg-blue-900 text-white font-semibold px-4 py-1 rounded-md"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopupForm;
