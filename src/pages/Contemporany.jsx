import React from 'react';
import { Link } from 'react-router-dom';

export default function Contemporary() {
  const heroImage =
    'https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80'; // dancer contemporary style

  const timeline = [
    {
      year: 'Early 20th Century',
      title: 'Roots in Modern Dance',
      description:
        'Contemporary dance emerged as a rebellion against classical ballet, emphasizing natural movement and expression.',
    },
    {
      year: 'Mid 1900s',
      title: 'Innovators Like Martha Graham',
      description:
        'Choreographers broke traditional forms, introducing contraction-release techniques and emotional storytelling.',
    },
    {
      year: 'Late 20th Century',
      title: 'Fusion & Global Influence',
      description:
        'Contemporary dance absorbed styles like jazz, hip-hop, and world dance, making it diverse and ever-evolving.',
    },
    {
      year: 'Today',
      title: 'A Platform for Innovation',
      description:
        'It blends technique and freedom, constantly pushing boundaries in theaters and on street stages worldwide.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-white font-sans text-gray-900">
      {/* Hero */}
      <div
        className="relative h-[70vh] bg-center bg-cover flex items-center justify-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/50 z-0" />
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h1 className="text-white text-5xl md:text-6xl font-serif font-bold drop-shadow-lg">
            Contemporary Dance
          </h1>
          <p className="mt-4 text-white/90 text-lg md:text-xl leading-relaxed">
            Movement that breaks free — blending emotion, innovation, and raw expression.
          </p>
        </div>
      </div>

      {/* Intro */}
      <section className="max-w-4xl mx-auto py-12 px-6 text-center">
        <h2 className="text-3xl font-serif font-bold mb-6 text-purple-700">What is Contemporary Dance?</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Contemporary dance is a fluid, versatile art form that thrives on freedom, emotion, and breaking
          conventions. It draws from many styles and emphasizes personal expression and innovation.
        </p>
      </section>

      {/* Timeline */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 py-12 grid gap-10 md:grid-cols-2">
        {timeline.map((item, i) => (
          <div
            key={i}
            className="bg-white/80 backdrop-blur-md rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-[1.03]"
            style={{ animation: `fadeInUp 0.5s ease forwards`, animationDelay: `${i * 0.15}s`, opacity: 0 }}
            onAnimationEnd={e => (e.currentTarget.style.opacity = 1)}
          >
            <h3 className="text-purple-700 font-semibold text-lg mb-2">{item.year}</h3>
            <h4 className="font-serif font-bold text-xl mb-3">{item.title}</h4>
            <p className="text-gray-700 leading-relaxed">{item.description}</p>
          </div>
        ))}
      </section>

      {/* Call to action */}
      <div className="text-center py-16 bg-purple-50 px-6">
        <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4 text-purple-800">
          Ready to move with the times?
        </h3>
        <button className="bg-purple-700 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-purple-800 transition duration-300 font-semibold">
         <Link to="/">  Back to home →</Link>
        </button>
      </div>

      {/* Animation keyframes */}
      <style>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
