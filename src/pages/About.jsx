import React from "react";
import { motion } from "framer-motion";

export default function AboutPage() {
  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/fotini__siaf/", "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-300 to-purple-500 p-6 flex flex-col items-center justify-center">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-extrabold text-white mb-8"
      >
        About the Dance Course
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="max-w-3xl w-full"
      >
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden p-8 space-y-6">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-lg text-gray-700"
          >
            Our dance course is designed to help you express yourself through movement while learning the fundamentals of various dance styles. Whether you're a complete beginner or looking to refine your skills, our course provides a supportive and energetic environment for all.
          </motion.p>

          <motion.ul
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { delayChildren: 0.4, staggerChildren: 0.2 },
              },
            }}
            className="list-disc pl-6 text-gray-700"
          >
            {[
              "Foundations of rhythm and timing",
              "Introduction to multiple dance genres",
              "Confidence-building activities",
              "Weekly practice sessions and feedback",
            ].map((item, index) => (
              <motion.li
                key={index}
                variants={{
                  hidden: { opacity: 0, x: -10 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col items-center"
          >
            {/* Instagram Icon Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleInstagramClick}
              aria-label="Instagram"
              className="text-pink-600 hover:text-pink-800 transition-colors mb-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zm4.25 3.75a4 4 0 110 8 4 4 0 010-8zm0 1.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm3.75-.5a1 1 0 110 2 1 1 0 010-2z" />
              </svg>
            </motion.button>
            <p className="text-gray-600 text-center">
              Follow us on Instagram for dance course updates and administration info!
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
