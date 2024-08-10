import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSendContactFormMutation } from "../../redux/api/api";
import { setFormField, resetForm } from "../../redux/reducers/formSlice";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { IoMdStopwatch } from "react-icons/io";
import contactimg from "/images/contact.jpg";

function Contact() {
  const dispatch = useDispatch();
  const { name, email, number, message } = useSelector((state) => state.forms);
  const [sendContactForm, { isLoading, isSuccess, isError, error }] =
    useSendContactFormMutation();

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
      message,
    };
    console.log("before submit data", formData);

    try {
      await sendContactForm(formData).unwrap(); // Use unwrap() to handle errors properly
      dispatch(resetForm());
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Breadcrumb text="Contact" />

      <div className="contact-info">
        <div className="container w-4/5 m-auto md:flex">
          <div className="lg:w-1/3 w-full p-4 text-center my-24">
            <div className="icon p-5 rounded-full bg-red-100 inline-block relative">
              <CiLocationOn className="text-4xl absolute start-0 -top-2 text-slate-800" />
            </div>
            <h4 className="text-2xl mb-2">Our Location</h4>
            <p>
              B-4, First Floor, Sector 63 <br /> Noida, Uttar Pradesh 201306
            </p>
          </div>

          <div className="lg:w-1/3 w-full p-4 text-center my-24">
            <div className="icon p-5 rounded-full bg-red-100 inline-block relative">
              <IoCallOutline className="text-4xl absolute start-0 -top-2 text-slate-800" />
            </div>
            <h4 className="text-2xl mb-2">Contact Info</h4>
            <p>
              +91-8375998840 <br /> +91-9315636357
            </p>
          </div>

          <div className="lg:w-1/3 w-full p-4 text-center my-24">
            <div className="icon p-5 rounded-full bg-red-100 inline-block relative">
              <IoMdStopwatch className="text-4xl absolute start-0 -top-2 text-slate-800" />
            </div>
            <h4 className="text-2xl mb-2">Work Time</h4>
            <p>Monday - Saturday: 10:00 - 18:00</p>
          </div>
        </div>
      </div>

      <div className="contact-form w-4/5 m-auto mt-6 mb-20 lg:flex">
        <div className="contact-img lg:w-1/2 md:flex">
          <img
            src={contactimg}
            className="lg:rounded-l-lg w-full"
            alt="Contact"
          />
        </div>

        <div className="contact-form lg:w-1/2 w-full h-fit pt-12 sm:pl-8 pl-4 sm:pr-8 pr-4 sm:pb-24 pb-10 bg-[#ffefea] lg:rounded-r-lg wrap flex flex-col">
          <h1 className="text-3xl my-4">How Can We Help?</h1>
          <p>
            Have a question or feedback? Fill out the form below, and we’ll get
            back to you as soon as possible.
          </p>

          <form className="mt-6 h-fit" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleInputChange}
              required
              className="border-b-2 py-4 pl-2 w-full outline-0 mb-2 bg-transparent placeholder-black"
              placeholder="Full Name"
            />

            <input
              type="email"
              name="email"
              value={email}
              onChange={handleInputChange}
              required
              className="border-b-2 py-4 pl-2 w-full outline-0 mb-2 bg-transparent placeholder-black"
              placeholder="Email"
            />
            <input
              type="text"
              name="number"
              value={number}
              onChange={handleInputChange}
              required
              className="border-b-2 py-4 pl-2 w-full outline-0 mb-2 bg-transparent placeholder-black"
              placeholder="Phone Number"
            />
            <textarea
              name="message"
              value={message}
              onChange={handleInputChange}
              className="border-b-2 py-4 pl-2 w-full outline-0 mb-2 h-36 bg-transparent placeholder-black"
              placeholder="Message"
            ></textarea>

            <button
              type="submit"
              className="w-full text-center py-3 rounded-md my-4 bg-[#131836] text-white"
              disabled={isLoading}
            >
              {isLoading ? "Submitting..." : "Submit Now"}
            </button>

            {isError && (
              <p className="text-red-500">
                {error?.data?.errors?.[0]?.msg || "An error occurred"}
              </p>
            )}
            {isSuccess && (
              <p className="text-green-500">Message sent successfully!</p>
            )}
          </form>
        </div>
      </div>

      <div className="map w-full h-96">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28022.275414119133!2d77.32938675368418!3d28.606243270643148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceff90f3a0d8d%3A0xa5f0321e764cbd0e!2sMTAIND%20-%20Microsoft%20Summer%20training%20Internship!5e0!3m2!1sen!2sin!4v1721908875308!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        ></iframe>
      </div>

      <div className="experts my-10">
        <p className="text-md text-center">
          Learn From The World's Leading Experts
        </p>
        {/* Uncomment and update as needed */}
        {/* <div className="grid md:grid-cols-6 sm:grid-cols-4 grid-cols-2">
          <Expertsbrands img="../../../public/images/accenture.png" />
          <Expertsbrands img="../../../public/images/accenture.png" />
          <Expertsbrands img="../../../public/images/accenture.png" />
          <Expertsbrands img="../../../public/images/accenture.png" />
          <Expertsbrands img="../../../public/images/accenture.png" />
          <Expertsbrands img="../../../public/images/accenture.png" />
        </div> */}
      </div>
    </>
  );
}

export default Contact;
