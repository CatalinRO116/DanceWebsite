import React from "react";
import { motion } from "framer-motion";

export default function DanceCourseSubscription() {
  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/fotini__siaf/", "_blank");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-200 to-purple-300 p-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-6 text-center">Join Our Dance Course</h2>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleInstagramClick}
            aria-label="Instagram"
            className="text-pink-600 hover:text-pink-800 transition-colors"
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
          <p className="mt-4 text-gray-600 text-3xl">Message us on Instagram to buy the full course from the best teacher!(Tap the icon)</p>
        </div>
      </motion.div>
    </div>
  );
}
