import { Link } from "react-router-dom";
import React from "react";

const ServiceCard = React.memo(
  ({ imageSrc, title, description, features, path }) => (
    <div className="bg-white rounded-3xl overflow-hidden shadow-lg transition-transform duration-300 ease-in-out lg:mx-8">
      <div className="p-7">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-64 object-cover rounded-xl shadow-lg"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 text-black">{title}</h3>
        <p className="text-gray-600">{description}</p>
        <ul className="mt-4 text-gray-700">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center mb-2">
              <svg
                className="w-4 h-4 mr-2 text-custom-blue"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="10" cy="10" r="8" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
        <Link
          to={path}
          className="mt-4 relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-custom-blue rounded-full shadow-md group"
        >
          <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-custom-blue group-hover:translate-x-0 ease">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </span>
          <span className="absolute flex items-center justify-center w-full h-full text-custom-blue transition-all duration-300 transform group-hover:translate-x-full ease">
            Learn More
          </span>
          <span className="relative invisible">Learn More</span>
        </Link>
      </div>
    </div>
  )
);

export default ServiceCard