import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  const [professionIndex, setProfessionIndex] = useState(0);
  const professions = ["A Software Engineer.", "A Competitive Programmer.", "A Full-Stack Developer."];
  const [typedProfession, setTypedProfession] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      if (typedProfession === professions[professionIndex]) {
        // If fully typed, move to the next profession
        setProfessionIndex((prevIndex) => (prevIndex + 1) % professions.length);
        setTypedProfession("");
      } else {
        // If not fully typed, type the next letter
        const nextLetter = professions[professionIndex].charAt(typedProfession.length);
        setTypedProfession((prevTypedProfession) => prevTypedProfession + nextLetter);
      }
    }, 100); // Type a new letter every 100 milliseconds

    return () => clearInterval(interval);
  }, [typedProfession, professionIndex, professions]);

  return (
    <div className=' mt-32 font-mono'>
    <motion.div
      className="mt-8 md:mt-16 lg:mt-24 px-4 md:px-8 lg:px-12"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="text-center font-bold">
        <div className="text-4xl md:text-5xl font-bold">
          <p>Hello 👋, I'm</p>
        </div>
        <span className="text-purple-800 mt-6 md:mt-8 text-5xl md:text-6xl">
          Suhani Sahu 👩🏻‍💻
        </span>
        <div className="text-gray-600 mt-6 md:mt-8 text-3xl md:text-4xl">
          {typedProfession}
        </div>
      </div>

      <div className="mt-12 md:mt-16 lg:mt-20">
        <h1 className="text-xl md:text-2xl font-bold text-center text-slate-500 mb-6">Find Me On</h1>
        <div className="flex justify-center items-center flex-wrap gap-6 md:gap-8">
          <div className="bg-white p-3 md:p-4 rounded-full shadow-lg hover:bg-blue-200">
          <i className="fab fa-github text-black text-2xl md:text-3xl"></i>
          </div> 
          <div className="bg-white p-3 md:p-4 rounded-full shadow-lg hover:bg-blue-200">
            <img className="h-8 md:h-10" src="./leetcode.png" alt="LeetCode" />
          </div>
          <div className="bg-white p-3 md:p-4 rounded-full shadow-lg hover:bg-blue-200">
            <i className="fab fa-linkedin-in text-blue-800 text-2xl md:text-3xl"></i>
          </div>
          <div className="bg-white p-3 md:p-4 rounded-full shadow-lg hover:bg-blue-200">
            <i className="fab fa-medium-m text-black text-2xl md:text-3xl"></i>
          </div>
          <div className="bg-white p-3 md:p-4 rounded-full shadow-lg hover:bg-blue-200">
            <img className="h-8 md:h-10 rounded-full" src="./codechef.jpg" alt="CodeChef" />
          </div>
          <div className="bg-white p-3 md:p-4 rounded-full shadow-lg hover:bg-blue-200">
            <img className="h-8 md:h-10 " src="./codeforces.png" alt="Codeforces" />
          </div>
        </div>
      </div>
    </motion.div>
    <div className="mt-6 border-t border-gray-400"></div>
    </div>
  );
};

export default Home;
