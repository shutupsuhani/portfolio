

const About = () => {
  const title = "</About Me>"
  return (
    <div className="mt-8 md:mt-16 lg:mt-24 px-4 md:px-8 lg:px-12 flex flex-col md:flex-row items-center">
     
     
      <div className="md:mr-8 mb-4 md:mb-0 relative ">
      <div className="absolute inset-0 rounded-full border-8 border-gray-200"></div>
        <img className="rounded-full h-48 w-48 md:h-48 md:w-48" src="./Suhanicoverimage.jpeg" alt="Profile" />
      </div>
      {/* About Text */}
      <div className="max-w-xl">
      <h2 className="text-3xl md:text-5xl font-mono text-center font-bold text-gray-800 mb-4">{title}</h2>
        <p className="text-2xl font-mono text-gray-700 mb-4 t ">
          Hey there! I'm Suhani Sahu, a full stack developer with a keen eye for detail and a passion for crafting elegant solutions.
          <span className='text-blue-800 font-semibold'> Functionality is my forte, and I thrive on building seamless experiences from front to back.</span>
        </p>
        <p className="text-2xl font-mono text-gray-700 ">
          When I'm not coding, you can find me exploring new technologies, refining my skills, or enjoying some downtime with a good book.
        </p>
      </div>

      <div className="mt-4 border-t border-gray-800"></div>
    </div>
  );
};

export default About;