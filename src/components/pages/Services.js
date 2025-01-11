import React from "react";
import { Link } from "react-router-dom";
import ServiceCard from "./Service/ServiceCard";

const DownArrow = () => (
  <div className="text-center text-gray-500 mb-10">
    <svg
      className="w-8 h-8 mx-auto animate-bounce"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19 14l-7 7m0 0l-7-7m7 7V3"
      ></path>
    </svg>
  </div>
);



const Services = () => (
  <div className="bg-gradient-to-b from-custom-blue to-white p-6 lg:p-10">
    <section id="services" className="container mx-auto my-12">
      <h1 className="pl-2 text-center text-3xl font-bold border-custom-blue md:text-5xl">
        Our Services
      </h1>
      <p className="text-lg text-gray-500 text-center p-5">
        Elevate your ride with our premium car detailing services...
      </p>
      <DownArrow />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {serviceList.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  </div>
);


const serviceList = [
  {
    imageSrc: "/images/Paint Correction.jpg",
    title: "Premium Interior Detailing",
    description:
      "Restore your car's exterior to its showroom glory with our meticulous detailing services.",
    features: [
      "1 Step & 2 Step Paint Correction",
      "Removal of light & deep swirl marks",
      "Restore showroom shine",
    ],
    path: "/paint-correction",
  }, {
    imageSrc: "/images/Paint Correction.jpg",
    title: "Premium Exterior Detailing",
    description:
      "Description",
    features: [
      "Synthetic Sealant for Gloss Finish and Hydrophobicity",
      "Waxing Premium carnauba",
      "Tire Dressing",
    ],
    path: "/paint-correction",
  }
  ,
  {
    imageSrc: "/images/interior.jpg",
    title: "Premium Full Detailing",
    description:
      "Experience luxury from the inside out. Our interior detailing ensures a pristine and comfortable driving experience.",
    features: ["Deep Cleaning", "Leather Treatment", "Odor Removal"],
    path: "/interior-detailing",
  },
  {
    imageSrc: "/images/ceramic-1.jpg",
    title: "Ceramic Coating",
    description:
      "Protect your investment with our advanced ceramic coating that enhances and preserves your car's finish.",
    features: [
      "Long-lasting Shine",
      "Scratch Resistance",
      "Easy Maintenance",
    ],
    path: "/ceramic",
  },
  {
    imageSrc: "/images/ceramic-1.jpg",
    title: "Paint Correction",
    description:
      "Protect your investment with our advanced ceramic coating that enhances and preserves your car's finish.",
    features: [
      "Long-lasting Shine",
      "Scratch Resistance",
      "Easy Maintenance",
    ],
    path: "/ceramic",
  },

]
export default Services;
