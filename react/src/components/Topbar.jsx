import { useState } from 'react';

const Topbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
 
  
  return (
    <nav className="w-full  backdrop-blur-lg bg-white-30% p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex space-x-3 aspect-auto">
          <img className="rounded-full h-11 w-11 " src="./Suhanicoverimage.jpeg" />
          <div className="text-black hover:text-blue-800 font-bold text-3xl font-mono ml-3">Portfolio</div>
        </div>

        {/* Hamburger menu for small screens */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            type="button"
            className="text-blue-700  focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M2 6a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1zm0 5a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1zm0 5a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links for larger screens */}
        <div className="hidden md:flex md:space-x-4 font-mono">
          <a href="#" className="text-xl hover:text-blue-700 text-black">Home</a>
          <a href="#" className="text-xl hover:text-blue-700 text-black">About Me</a>
          <a href="#" className="text-xl hover:text-blue-700 text-black">Skills</a>
          <a href="#" className="text-xl hover:text-blue-700 text-black">Projects</a>
          <a href="#" className="text-xl hover:text-blue-700 text-black">Contact</a>
        </div>

       
        {menuOpen && (
          <div className="md:hidden absolute top-16 right-4 bg-slate-200 p-4 shadow-md rounded-lg transition-all duration-300 ease-in-out">
            <button
              onClick={() => setMenuOpen(false)}
              type="button"
              className="text-blue-700 bg-white h-8 w-8 rounded-full hover:text-black focus:outline-none"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 111.414 1.414L11.414 10l2.293 2.293a1 1 0 11-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 01-1.414-1.414L8.586 10 6.293 7.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-xl text-blue-700 hover:text-black">Home</a>
              <a href="#" className="text-xl text-blue-700 hover:text-black">About</a>
              <a href="#" className="text-xl text-blue-700 hover:text-black">Projects</a>
              <a href="#" className="text-xl text-blue-700 hover:text-black">Contact</a>
            </div>
          </div>
        )}
      </div>

     
    </nav>
  );
};

export default Topbar;
