import React from "react";

const About = () => (
  <section
    id="about"
    className="flex items-center bg-gradient-to-b from-white to-custom-blue xl:h-screen"
  >
    <div className="flex-1 m-6 py-4 lg:py-10 lg:m-40">
      <div className="relative py-10 bg-center bg-no-repeat bg-cover rounded-3xl overflow-hidden"
        style={{ backgroundImage: 'url("images/about-us.jpg")' }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-90"></div>
        <div className="relative z-10 flex flex-col items-center justify-center px-2 py-2 mx-auto max-w-7xl lg:py-28 md:px-7 text-center">
          <h2 className="mb-6 text-4xl font-bold text-gray-100 md:text-5xl dark:text-gray-300">
            Why Choose Us?
          </h2>
          <p className="mb-8 leading-7 text-sm lg:text-lg lg:leading-loose text-gray-400">
            Forget those pesky swirl marks and scratches, sweetie. At Cosmopolitan Auto Spa, 
            we're not just detailing, we're transforming your ride into a dazzling, head-turning masterpiece. 
            Our expert artisans, armed with the latest techniques and the most luxurious products, will erase every imperfection, 
            leaving your car with a showroom-worthy glow that's pure glamour.
            We're all about meticulous craftsmanship and a commitment to flawless results, honey. 
            Trust us to rejuvenate your car's paintwork, ensuring it shines brighter than your favorite diamonds.
            Ready to elevate your automotive style? Choose Cosmopolitan Auto Spa for an impeccable transformation. You deserve it!
          </p>
          <button className="px-6 py-2 font-semibold text-gray-100 transition-all duration-300 bg-custom-blue rounded-full hover:bg-sky-600">
            Start Today
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default React.memo(About);