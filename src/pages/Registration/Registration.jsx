import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRegistrationUserMutation } from "../../redux/api/api.js";
import { setFormField, resetForm } from "../../redux/reducers/formSlice";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";

function Registration() {
  const dispatch = useDispatch();
  const { name, email, number, courses, trainingMode } = useSelector(
    (state) => state.forms
  );
  const [registrationUser, { isLoading, isSuccess, isError, error }] =
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
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <Breadcrumb text="Student Registration" />
      <div className="form-main border-2 lg:w-2/6 md:w-4/5 m-auto px-6 py-10 my-20 md:mx-auto mx-10 rounded-md">
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            name="name"
            value={name}
            onChange={handleInputChange}
            required
            autoFocus
            className="placeholder placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-sm py-3 pl-4 pr-3 shadow-sm focus:outline-none sm:text-sm my-3"
            placeholder="Full Name"
            type="text"
          />

          <label>E-mail</label>
          <input
            name="email"
            value={email}
            onChange={handleInputChange}
            required
            className="placeholder placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-sm py-3 pl-4 pr-3 shadow-sm focus:outline-none sm:text-sm my-3"
            placeholder="E-mail"
            type="text"
          />

          <label>Number</label>
          <input
            name="number"
            value={number}
            onChange={handleInputChange}
            required
            className="placeholder placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-sm py-3 pl-4 pr-3 shadow-sm focus:outline-none sm:text-sm my-3"
            placeholder="Number"
            type="text"
          />

          <label>Courses</label>
          <select
            name="courses"
            value={courses}
            onChange={handleInputChange}
            required
            className="placeholder text-slate-400 block bg-white w-full border border-slate-300 rounded-sm py-3 pl-4 pr-3 shadow-sm focus:outline-none sm:text-sm my-3"
          >
            <option value="">Courses</option>
            <option value="Full Stack With Java">Full Stack With Java </option>
            <option value="Full Stack With Python">
              Full Stack With Python
            </option>
            <option value="Frontend With React">Frontend With React</option>
            <option value="MERN Stack">MERN Stack</option>
            <option value="Digital Marketing">Digital Marketing</option>
          </select>

          <label>Training Mode</label>
          <select
            name="trainingMode"
            value={trainingMode}
            onChange={handleInputChange}
            required
            className="placeholder text-slate-400 block bg-white w-full border border-slate-300 rounded-sm py-3 pl-4 pr-3 shadow-sm focus:outline-none sm:text-sm my-3"
          >
            <option value="">Training Mode</option>
            <option value="Online Mode">Online Mode</option>
            <option value="Offline Mode">Offline Mode</option>
            <option value="Hybrid Mode">Hybrid Mode</option>
          </select>

          <button
            type="submit"
            className="text-[#fff] w-full py-3 mt-2 font-bold rounded-sm bg-[#e27447]"
            disabled={isLoading}
          >
            {isLoading ? "Applying..." : "Apply Now"}
          </button>
          {isSuccess && (
            <p className="text-green-500">Registration successful!</p>
          )}
          {isError && (
            <p className="text-red-500">
              {error?.data?.errors?.[0]?.msg || "An error occurred"}
            </p>
          )}
        </form>
      </div>
    </>
  );
}

export default Registration;
