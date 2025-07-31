import React from 'react';
import { Link } from 'react-router-dom';
export default function Ballet() {
  const heroImage =
    'https://images.unsplash.com/photo-1603428591035-6a5c8f63e5f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80';

  const timeline = [
    {
      year: '15th Century',
      title: 'Origins in the Italian Renaissance',
      description:
        'Ballet began as an elite court dance in Italy, blending poetry, music, and precise movement.',
    },
    {
      year: '17th Century',
      title: 'French Royal Influence',
      description:
        'King Louis XIV established ballet as a formal art, founding the first royal academy in 1661.',
    },
    {
      year: '19th Century',
      title: 'Romanticism',
      description:
        'Ballets like “Giselle” explored emotion and fantasy, highlighting expressive storytelling.',
    },
    {
      year: '20th Century',
      title: 'Modern Expansion',
      description:
        'Visionaries like Balanchine evolved ballet into a neoclassical and global art form.',
    },
  ];

  return (
    <div className="text-gray-900 font-sans">
      {/* Hero Section */}
      <div
        className="relative h-[75vh] bg-center bg-cover flex items-center justify-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/10 z-0" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-white text-5xl md:text-7xl font-serif font-bold leading-tight drop-shadow-lg">
            The Elegance of Ballet
          </h1>
          <p className="text-white mt-4 text-lg md:text-xl max-w-2xl mx-auto opacity-90">
            Discover the history, emotion, and beauty of one of the world's most timeless dance forms.
          </p>
        </div>
      </div>

      {/* Intro Section */}
      <section className="bg-white py-12 px-6 md:px-12 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 font-serif">What is Ballet?</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Ballet is more than movement — it’s a tradition of grace and expression that has inspired generations.
          Combining athleticism with storytelling, ballet bridges cultures, eras, and hearts.
        </p>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-gradient-to-b from-white to-pink-50 px-6 md:px-12">
        <h2 className="text-3xl font-bold text-center mb-12 font-serif">A Journey Through Time</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {timeline.map((item, index) => (
            <div
              key={index}
              className="bg-white/70 backdrop-blur-lg p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 border border-white/30"
            >
              <h3 className="text-xl font-semibold mb-1">{item.year}</h3>
              <h4 className="text-lg font-serif mb-2 text-pink-600">{item.title}</h4>
              <p className="text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="text-center py-16 bg-white px-6">
        <h3 className="text-2xl md:text-3xl font-bold mb-4 font-serif">Curious about famous performances?</h3>
        <p className="text-gray-600 text-lg mb-6">Dive into timeless classics like Swan Lake and The Nutcracker.</p>
        <button className="bg-pink-600 text-white px-6 py-3 rounded-lg shadow hover:bg-pink-700 transition duration-300 font-semibold">
         
         <Link to="/">  Back to home →</Link>
        
        </button>
      </div>
    </div>
  );
}
