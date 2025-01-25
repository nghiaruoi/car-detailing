import React, { useCallback } from "react";
import About from "./About";
import Gallery from "./Gallery";
import Services from "./Services";
import Booking from "./Booking/Booking";
import Slideshow from "./Slideshow/Slideshow"

const Home = () => {
  // Function to scroll to the contact section
  const scrollToContact = useCallback(() => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative flex justify-center h-screen text-black ">
        {/* Background Image */}
        <div
          className="absolute inset-0 overflow-hidden flex items-center lg:translate-x-1/4 w-1/2 h-1/2 top-1/4 left-1/4 "
          style={{
            backgroundImage: 'url("/images/g-wagon-hd-resized.png")',
            backgroundSize: "cover",
            backgroundPosition: "left",
          }}
        ></div>

        {/* Hero Content */}
        <div className="text-left z-10 text-black p-4">
          <h1 className="text-4xl lg:text-6xl font-bold mb-4 mt-16 ">
            <span className="text-custom-blue">Elevate</span> Your Ride with
            Professional Detailing
          </h1>
          <p className="text-lg lg:text-xl mb-4">
            Transform your car into a masterpiece.
          </p>

          {/* Schedule Now Button */}
          <a href="/booking">
          <button
            onClick={scrollToContact}
            className="bg-custom-blue hover:bg-blue-700 text-white font-bold py-2 px-4 lg:text-xl rounded-full"

          >
            Schedule Now
          </button>
          </a>
        </div>
      </section>

      <Slideshow />

      {/* About Section */}
      <About />

      {/* Services Section */}
      <Services />

      {/* Gallery Section */}
      <Gallery />

      {/* Contact Section */}
      {/* <section id="contact">
        <Booking />
      </section> */}
    </>
  );
};

export default Home;
