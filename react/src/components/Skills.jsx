const Skills = () => {

  const title = "</Skills>"
  return (
    <div className="px-4  md:px-0">
      <div className="text-4xl text-center font-bold font-mono">{title}</div>
      <div className="flex flex-wrap justify-center mt-10">
        {/* General */}
        <div className="bg-white w-full md:w-72 md:mx-4 shadow-inner rounded-xl mb-8 md:mb-0 transition duration-500 ease-in-out transform hover:scale-105">
          <img className="h-32 w-5/6 items-center m-auto  object-cover mt-4 shadow-2xl rounded-xl" src="./general.jpg" alt="General" />
          <h1 className="font-mono text-center text-blue-700 text-2xl">General</h1>
          <div className="text-xl font-mono text-slate-800 text-center">
            <ul className="list-none">
              <li>C++</li>
              <li>Javascript</li>
              <li>Data Structures</li>
              <li>MongoDB & mySQL</li>
            </ul>
          </div>
        </div>

        {/* Frontend */}
        <div className="bg-white w-full md:w-72 md:mx-4 shadow-inner rounded-xl mb-8 md:mb-0 transition duration-500 ease-in-out transform hover:scale-105">
          <img className="h-32 w-5/6 items-center m-auto  object-cover mt-4 shadow-2xl rounded-xl" src="./frontend.jpg" alt="Frontend" />
          <h1 className="font-mono text-center text-blue-700 text-2xl">Frontend</h1>
          <div className="text-xl font-mono text-slate-800 text-center">
            <ul className="list-none">
              <li>HTML&CSS</li>
              <li>Bootstrap</li>
              <li>ReactJS</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
        </div>

        {/* Backend */}
        <div className="bg-white w-full md:w-72 md:mx-4 shadow-inner rounded-xl transition duration-500 ease-in-out transform hover:scale-105">
          <img className="h-32 w-5/6 items-center m-auto  object-cover mt-4 shadow-2xl rounded-xl" src="./backend.jpeg" alt="Backend" />
          <h1 className="font-mono text-center text-blue-700 text-2xl">Backend</h1>
          <div className="text-xl font-mono text-slate-800 text-center ">
            <ul className="list-none">
              <li>Node JS</li>
              <li>Express JS</li>
              <li>Docker</li>
              <li>Python</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-12 border-t border-gray-800"></div>
    </div>
  );
};

export default Skills;
