
import { Link } from 'react-router-dom';

import React, { useState } from "react";

export default function Jazz() {
  const [activeIndex, setActiveIndex] = useState(null);

  const bgImage =
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1470&q=80"; // classy jazz club photo

  const highlights = [
    {
      title: "Origins of Jazz",
      description:
        "Born in New Orleans, Jazz is a rich blend of African rhythms and European harmonies that revolutionized music.",
    },
    {
      title: "Improvisation",
      description:
        "Jazz thrives on spontaneity, where musicians create magic on the spot, making every performance unique.",
    },
    {
      title: "Legendary Icons",
      description:
        "From Louis Armstrong to Miles Davis, Jazz legends shaped the genre’s soul with groundbreaking innovation.",
    },
    {
      title: "Jazz Today",
      description:
        "Modern jazz blends styles worldwide, pushing boundaries while honoring tradition and passion.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white font-serif">
      {/* Hero Section */}
      <section
        className="relative h-[70vh] flex flex-col items-center justify-center text-center px-6"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(20,20,20,0.85), rgba(20,20,20,0.85)), url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1
          className="text-5xl md:text-7xl font-extrabold mb-4 tracking-wide"
          style={{
            textShadow:
              "0 0 12px rgba(255,255,255,0.9), 0 0 24px rgba(255,255,255,0.6)",
          }}
        >
          Jazz Culture
        </h1>
        <p className="max-w-2xl text-lg md:text-xl italic text-gray-300 drop-shadow-md">
          “Feel the rhythm, breathe the soul — Jazz is life in motion.”
        </p>
      </section>

      {/* Highlights Section */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-2 gap-10">
        {highlights.map(({ title, description }, idx) => (
          <div
            key={idx}
            onMouseEnter={() => setActiveIndex(idx)}
            onMouseLeave={() => setActiveIndex(null)}
            className={`relative cursor-pointer rounded-3xl p-8 bg-gradient-to-br from-gray-700 to-gray-900 shadow-xl transition-transform duration-500 ${
              activeIndex === idx
                ? "scale-105 shadow-2xl bg-gradient-to-tr from-indigo-600 via-purple-700 to-pink-700"
                : "hover:scale-105 hover:shadow-2xl"
            }`}
            style={{
              transformOrigin: "center",
            }}
          >
            <h3
              className={`text-3xl font-semibold mb-3 transition-colors duration-300 ${
                activeIndex === idx ? "text-pink-400" : "text-white"
              }`}
            >
              {title}
            </h3>
            <p
              className={`text-gray-300 leading-relaxed transition-opacity duration-300 ${
                activeIndex === idx ? "opacity-100" : "opacity-80"
              }`}
            >
              {description}
            </p>

            {/* Animated floating note icon */}
            {activeIndex === idx && (
              <svg
                className="absolute top-6 right-6 w-10 h-10 text-pink-400 animate-bounce"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 19V6l12-2v13"
                />
                <circle cx={6} cy={18} r={3} stroke="none" fill="currentColor" />
              </svg>
            )}
          </div>
        ))}
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-purple-800 via-pink-700 to-red-600 py-16 text-center rounded-t-3xl shadow-lg mx-6 md:mx-20">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-wide text-white drop-shadow-lg">
          Dive into the Jazz Experience
        </h2>
        <button className="bg-white text-purple-900 font-semibold px-12 py-4 rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300">
             <Link to="/">  Back to home →</Link>
        </button>
      </section>
    </div>
  );
}
