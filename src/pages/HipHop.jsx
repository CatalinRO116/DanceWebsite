import React from 'react'
import { Link } from 'react-router-dom';
import HipPhoto from '../../public/images/HipHop.svg'


export default function HipHop() {
  const bgImage =
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1470&q=80";

  const highlights = [
    {
      title: "Roots of Hip Hop",
      description:
        "Born in the 1970s Bronx, Hip Hop emerged as a cultural movement expressing resistance and creativity through music, dance, and art.",
      delay: "0s",
    },
    {
      title: "Breaking & Street Dance",
      description:
        "B-Boys and B-Girls innovated powerful moves like spins, freezes, and footwork, turning streets and parks into stages.",
      delay: "0.2s",
    },
    {
      title: "Music & Style Fusion",
      description:
        "With DJs and MCs, Hip Hop shaped a new sound blending beats, rhymes, and style—making it a global cultural force.",
      delay: "0.4s",
    },
    {
      title: "Evolution & Influence",
      description:
        "Today, Hip Hop influences fashion, film, and social movements worldwide, constantly evolving while staying true to its roots.",
      delay: "0.6s",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-pink-900 text-white font-sans">
      {/* Hero Section */}
      <section
        className="relative h-[70vh] flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1
          className="relative text-white font-extrabold uppercase tracking-widest drop-shadow-[0_0_20px_rgba(255,0,127,0.8)] px-6
          text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl
          max-w-4xl text-center"
        >
          Hip Hop Culture
        </h1>
      </section>

      {/* Intro */}
      <section className="max-w-4xl mx-auto p-8 text-center space-y-6">
        <p className="text-xl md:text-2xl italic text-pink-300">
          “Hip Hop is not just music — it’s a lifestyle, a voice for the unheard,
          and a global movement that breaks all boundaries.”
        </p>
        <p className="text-gray-300 max-w-3xl mx-auto">
          From its roots on the streets of New York to dominating worldwide stages,
          Hip Hop is a culture built on passion, creativity, and resilience. Dive
          into its origins, styles, and evolution that continue to shape the
          modern world.
        </p>
      </section>

      {/* Highlights Cards */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 grid gap-10 md:grid-cols-2 py-12">
        {highlights.map(({ title, description, delay }, idx) => (
          <article
            key={idx}
            className="bg-gradient-to-tr from-purple-900 to-pink-700 rounded-xl p-8 shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl cursor-default"
            style={{
              animation: `fadeUp 0.5s ease forwards`,
              animationDelay: delay,
              opacity: 0,
              transform: "translateY(15px)",
            }}
            onAnimationEnd={(e) => {
              e.currentTarget.style.opacity = 1;
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <h3 className="text-2xl font-bold mb-3 tracking-wide">{title}</h3>
            <p className="text-pink-200 leading-relaxed">{description}</p>
          </article>
        ))}
      </section>

      {/* Call to Action */}
      <section className="bg-pink-900 bg-opacity-90 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
          Ready to step into the beat?
        </h2>
        <button className="bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-700 px-10 py-4 rounded-full text-white font-semibold uppercase tracking-wider shadow-lg hover:shadow-pink-400 hover:scale-105 transition-transform duration-300">
            <Link to="/">  Back to home →</Link>
        </button>
      </section>

      {/* Animations */}
      <style>{`
        @keyframes fadeUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}