'use client'
import { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import Link from "next/link";
import { images } from "./images"; // Correct named import for images
import Slideshow from "./slideshow"; // Ensure Slideshow import is correct

const Project = ({ title, aboutText, id }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Prevents SSR rendering
  }

  const projectImages = images[id]; // Access the images for the project

  return (
    <motion.div
      id={id}
      className="mb-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="min-h-screen">
        <motion.h1
          className="text-4xl font-bold mb-10 text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ opacity: { duration: 0.1 } }}
        >
          {title}
        </motion.h1>

        <p className="text-center text-white text-2xl p-6 max-w-4xl mx-auto mb-10">
          {aboutText}
        </p>

        <Slideshow images={projectImages} /> {/* Show images based on project */}

        <div className="mt-10 text-center">
          <Link
            href={`/portofoliu/galerie/${id}`}
            className="text-white bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-lg font-semibold transition duration-300"
          >
            Vezi Galerie
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default function Portfoliu() {
  useEffect(() => {
    // Check if there's a hash in the URL after the page has mounted
    const hash = window.location.hash;
    if (hash) {
      // Reduce the delay time to make it quicker
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          // Scroll to the element with the matching id
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start', // Align to the top of the viewport
          });
        }
      }, 100); // Reduced delay to make the scroll faster (100ms)
    }
  }, []); // Empty dependency array ensures this only runs once after the page loads

  return (
    <div className="container mx-auto px-4 py-16 mt-64 text-white">
      <div className="h-screen text-center">
        <h1 className="text-white lg:text-6xl text-4xl font-bold mb-10">
          Proiectele Noastre
        </h1>
        <div className="grid grid-flow-col gap-36 justify-center pt-10 font-semibold text-2xl">
          {/* Links that navigate to sections within the page */}
          <Link href="#fan-stefanesti">FAN COURIER - STEFANESTI</Link>
          <Link href="#eurial">EURIAL</Link>
        </div>
      </div>

      {/* Project Components */}
      <Project
        title="Fan Courier - Stefanesti"
        id="fan-stefanesti"
        aboutText="Fan Courier - Stefanesti is a significant project focused on the logistics and courier industry. The gallery showcases images that highlight the infrastructure, operations, and technological innovations used to improve service delivery in Stefanesti."
      />

      <Project
        title="Eurial"
        id="eurial"
        aboutText="Eurial is a prominent name in the food industry. This gallery represents the company's commitment to quality, sustainability, and innovation in food production and distribution."
      />
    </div>
  );
}
