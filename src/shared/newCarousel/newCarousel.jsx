import React, { useState, useRef, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const testimonials = [
  {
    id: 1,
    image: "images/img1.jpg",
    name: "Manitosh Poul",
    rating: 5,
    role: "Full Stack Development With Java",
    feedback:
      ' "It was a wonderful experience with MTA India. I have learned Java so precisely and the training helped me a lot. Thanks to the experienced trainers out there. They are really the gems."',
  },
  {
    id: 2,
    image: "images/img2.jpg",
    name: "Vaishnavi Pathak",
    rating: 5,
    role: "Full Stack Devlopment With Python",
    feedback:
      '" I was initially nervous about the training, but the trainer’s support and encouragement boosted my confidence. I can now code with confidence. Thanks to MTA India for this career-changing experience. I look forward to joining again."',
  },
  {
    id: 3,
    image: "images/img3.jpg",
    name: "Vikram Verma",
    rating: 3,
    role: "MERN Developer",
    feedback:
      '" I’m honored to be admitted to MTA India. The friendly and helpful trainers and staff supported me in developing a Java app. Special thanks to my trainer for his constant motivation. Hats off!"',
  },
  {
    id: 4,
    image: "images/img4.jpg",
    name: "Manvi Roy",
    rating: 5,
    role: "Frontend With React",
    feedback:
      "I’m honored to be part of MTA India. The trainers and staff are supportive and knowledgeable. Thanks to my trainer’s encouragement, I developed a website. His motivation was invaluable. Hats off to the entire team!",
  },
  {
    id: 5,
    image: "images/img5.jpg",
    name: "Janvi Singh",
    rating: 4,
    role: "Tester",
    feedback:
      "Being accepted into MTA India has been fantastic. The trainers and staff are incredibly supportive, and their guidance helped me build a real-time chat web app. Special thanks to my trainer for the constant motivation and encouragement.",
  },
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1440 },
    items: 5,
  },
  largestDesktop: {
    breakpoint: { max: 1440, min: 1024 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 768, min: 425 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 425, min: 0 },
    items: 3,
  },
};

const NewCarousel = ({ bgColor }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(5);
  const carouselRef = useRef(null);

  const updateItemsToShow = () => {
    const width = window.innerWidth;
    if (width > 768) {
      setItemsToShow(5);
    } else if (width <= 768 || width > 425) {
      setItemsToShow(3);
    } else {
      setItemsToShow(3);
    }
  };

  useEffect(() => {
    updateItemsToShow();
    window.addEventListener("resize", updateItemsToShow);
    return () => {
      window.removeEventListener("resize", updateItemsToShow);
    };
  }, []);

  const handleSlideChange = (nextSlide) => {
    setCurrentSlide(nextSlide);
  };

  const handleImageClick = (index) => {
    if (carouselRef.current) {
      const nextSlide =
        (index + testimonials.length - Math.floor(itemsToShow / 2)) %
        testimonials.length;
      carouselRef.current.goToSlide(nextSlide);
      setCurrentSlide(nextSlide);
    }
  };

  return (
    <section className={`${bgColor} w-full h-full`}>
      <div className={` py-12 mt-32 mb-80`}>
        <div className="text-center">
          <h2 className="text-3xl font-semibold">What Clients Are Saying</h2>
        </div>

        <div className="mt-10 mx-auto lg:w-[90%] xl:w-[70%]">
          <div className="relative">
            {/* Image Carousel */}
            <Carousel
              ref={carouselRef}
              responsive={responsive}
              swipeable={true}
              draggable={true}
              showDots={false}
              infinite={true}
              autoPlay={false}
              autoPlaySpeed={3000}
              keyBoardControl={true}
              customTransition="all 0.8s ease"
              transitionDuration={500}
              containerClass="carousel-container"
              removeArrowOnDeviceType={[
                "superLargeDesktop",
                "largestDesktop",
                "desktop",
                "tablet",
                "mobile",
              ]}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
              beforeChange={handleSlideChange}
            >
              {testimonials.map((testimonial, index) => {
                const centerIndex =
                  (currentSlide + Math.floor(itemsToShow / 2)) %
                  testimonials.length;
                const isCenter = index === centerIndex;

                return (
                  <div
                    key={testimonial.id}
                    className={`text-center sm:px-0 md:px-4  transition-transform duration-500 ${
                      isCenter
                        ? "transform scale-110 opacity-100 mx-4 sm:mx-0"
                        : "transform scale-90 opacity-50 mx-4 sm:mx-0"
                    }`}
                    style={{ cursor: "pointer" }}
                    onClick={() => handleImageClick(index)}
                  >
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className={`mx-auto mt-10 rounded-full border-4 border-gray-200 ${
                        isCenter
                          ? "sm:w-24 sm:h-24 md:w-32 md:h-32 w-16 h-16"
                          : "sm:w-20 sm:h-20 md:w-28 md:h-28 w-14 h-14"
                      } mb-4`}
                    />
                  </div>
                );
              })}
            </Carousel>

            {/* Content Display */}
            <div className={`absolute inset-0 mt-[200px]`}>
              <div className="text-center transition-opacity duration-500">
                {testimonials
                  .filter((_, index) => {
                    const centerIndex =
                      (currentSlide + Math.floor(itemsToShow / 2)) %
                      testimonials.length;
                    return index === centerIndex;
                  })
                  .map((testimonial) => (
                    <div key={testimonial.id}>
                      <h3 className="text-xl font-semibold">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {testimonial.role}
                      </p>
                      <div className="flex justify-center mt-2 items-center">
                        {[...Array(testimonial.rating)].map((_, index) => (
                          <svg
                            key={index}
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-yellow-500"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.287 3.982a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.392 2.464a1 1 0 00-.364 1.118l1.287 3.982c.3.921-.755 1.688-1.54 1.118l-3.392-2.464a1 1 0 00-1.176 0l-3.392 2.464c-.784.57-1.84-.197-1.54-1.118l1.287-3.982a1 1 0 00-.364-1.118L2.884 9.41c-.784-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.287-3.982z" />
                          </svg>
                        ))}
                      </div>
                      <div>
                        <p className="mt-4 text-gray-800 px-4 italic sm:text-base font-medium md:text-xl">
                          {testimonial.feedback}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewCarousel;
