import React from "react";
import { motion } from "framer-motion";
import { FaHistory, FaUserTie, FaCalendarAlt, FaHeart, FaBullseye } from "react-icons/fa";

export default function HistoryPage() {
  return (
    <div className="min-h-screen relative bg-gradient-to-r from-blue-700 via-indigo-900 to-purple-900 p-6 sm:p-10 flex flex-col items-center justify-center font-sans overflow-hidden">
      {/* Background circles */}
      <BackgroundAnimation />

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col sm:flex-row items-center sm:space-x-5 mb-12 sm:mb-16 z-10 relative text-center sm:text-left"
      >
        <FaHistory className="text-white text-4xl sm:text-5xl mb-3 sm:mb-0 drop-shadow-lg" />
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight drop-shadow-lg">
          Our History
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="max-w-4xl sm:max-w-5xl w-full bg-white rounded-3xl shadow-2xl p-6 sm:p-12 space-y-10 z-10 relative"
      >
        <Section
          icon={<FaUserTie className="text-indigo-600" />}
          title="Founder"
          content="Fotini, our inspiring founder, came up with the idea for this dance academy after struggling to improve her billiards skills. Finding joy and passion in dance instead, she transformed her journey into a thriving community that uplifts dancers of all levels."
        />

        <Section
          icon={<FaHistory className="text-indigo-600" />}
          title="About Us"
          content="We are a passionate dance academy dedicated to fostering creativity, expression, and community through movement. Our team consists of professional dancers and instructors committed to sharing their knowledge and love for dance with students of all ages and skill levels."
        />

        <Section
          icon={<FaCalendarAlt className="text-indigo-600" />}
          title="When We Started"
          content="Our journey began in 2015 with a small group of enthusiasts eager to create a welcoming space for dance lovers. From humble beginnings, we've grown into a vibrant academy that welcomes hundreds of students each year."
        />

        <Section
          icon={<FaHeart className="text-indigo-600" />}
          title="Why We Started"
          content="We believe dance is a universal language that empowers individuals, builds confidence, and brings people together. Our goal was to create a community where everyone can discover their unique rhythm and enjoy the transformative power of dance."
        />

        <Section
          icon={<FaBullseye className="text-indigo-600" />}
          title="Our Goal"
          content="Our mission is to provide high-quality dance education in a supportive and inspiring environment. We strive to nurture talent, promote creativity, and encourage lifelong passion for dance among our students."
        />
      </motion.div>
    </div>
  );
}

function Section({ icon, title, content }) {
  return (
    <motion.section
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
      whileHover={{ scale: 1.03, boxShadow: "0 10px 20px rgba(99, 102, 241, 0.3)" }}
      className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 cursor-pointer rounded-lg p-5 transition-colors duration-300 hover:bg-indigo-50"
    >
      <div className="text-5xl sm:text-4xl flex-shrink-0 text-indigo-600">{icon}</div>
      <div className="text-center sm:text-left">
        <h2 className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-3 sm:mb-4 transition-colors duration-300 hover:text-indigo-700">
          {title}
        </h2>
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-xl">{content}</p>
      </div>
    </motion.section>
  );
}

function BackgroundAnimation() {
  return (
    <>
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-10 w-36 h-36 sm:w-40 sm:h-40 bg-purple-600 rounded-full filter blur-3xl opacity-30"
      />
      <motion.div
        animate={{ x: [0, -25, 0], y: [0, 30, 0], opacity: [0.15, 0.35, 0.15] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-16 right-16 w-48 h-48 sm:w-56 sm:h-56 bg-pink-500 rounded-full filter blur-3xl opacity-30"
      />
    </>
  );
}
