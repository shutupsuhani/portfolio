import { useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Contact = () => {
  
  const title= "</Contact Me>";
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      name: '',
      email: '',
      message: ''
    };

    if (formData.name.trim() === '') {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      newErrors.email = 'Invalid email address';
      isValid = false;
    }

    if (formData.message.trim() === '') {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission, e.g., send data to server
      console.log('Form submitted:', formData);
      toast.success('Thanks for Contact Me');
      

      setFormData({
        name: '',
        email: '',
        message: ''
      });

    }
  };

  return (
    <div className="container mx-auto px-4 md:px-0">
      <h1 className="text-xl text-slate-900 mt-6 text-center sm:text-3xl font-mono font-bold">{title}</h1>  
    
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        {/* Contact Form */}
        <div className="bg-white w-full md:w-3/4 h-full ml-0 md:ml-5 rounded-xl shadow-2xl">
        
          <form className="p-4 md:p-0" onSubmit={handleSubmit}>
            <div className="mt-12  h-6 w-full md:w-3/4 items-center m-auto">
              <label className="block text-lg font-mono font-bold mb-2" htmlFor="name">YOUR NAME</label>
              <input className="w-full px-3 py-2  rounded-md focus:outline-none  border-4 border-blue-200" type="text" value={formData.name} onChange={handleChange} id="name" name="name" placeholder="Your Name"  required />
              <span className="error">{errors.name}</span>
            </div>
            <div className="mt-20 h-6 w-full md:w-3/4 items-center m-auto">
              <label className="block text-lg font-mono font-bold mb-2" htmlFor="email">EMAIL</label>
              <input className="w-full px-3 py-2  rounded-md focus:outline-none border-4 border-blue-200" type="email" id="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
              <span className="error">{errors.email}</span>
            </div>
            <div className="mt-20  h-12 w-full md:w-3/4 items-center m-auto">
              <label className="block text-lg font-mono font-bold mb-2" htmlFor="message">MESSAGE</label>
              <textarea className="w-full px-3 py-2  rounded-md focus:outline-none border-4 border-blue-200" id="message" name="message" rows="4" placeholder="Your Message" value={formData.message} onChange={handleChange} required></textarea>
              <span className="error">{errors.message}</span>
            </div>
            <button type="submit" className="bg-blue-200 mb-10 flex justify-evenly text-black mt-32 hover:text-white h-12 w-32 md:w-28 ml-0 md:ml-16 py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"><img className="h-6 w-6 rounded-full" src="./arrow.png"/><span className="text-lg font-mono font-semibold">Send</span></button>
          </form>
        </div>
        
        {/* Contact Information */}
        <div className="bg-white w-full md:w-4/6 rounded-2xl shadow-inner">
            <img src="./touch.jpg" className="w-72 h-56 mt-8 items-center m-auto rounded-xl shadow-2xl "/>
          <h2 className="text-3xl text-slate-800 text-center font-mono font-bold mb-2">Get in Touch!</h2>
          
          <p className="text-md text-slate-600 p-4 mt-4 font-mono">
            I am available for full-time roles in Software Engineering or Full-Stack Development. If you think you have any project/work that matches my skill set, or if you just want to say hi, you can contact me with the following details.
          </p>
          
          <ul className="p-5 text-slate-500 font-mono">
            <li className="mb-2">
              <span className="font-bold text-slate-700">Email:</span> sahusuhani14@gmail.com
            </li>
            <li className="mb-2">
              <span className="font-bold text-slate-700">Phone:</span> +91 9910820433
            </li>
            <li className="mb-2">
              <span className="font-bold text-slate-700">Address:</span>Shalimar Garden,Sahibabd,Ghaziabad
            </li>
          </ul>

          <div className="flex flex-col md:flex-row justify-center md:justify-evenly mb-16">             
              <button className="h-16 w-32 place-content-center mt-6 bg-slate-100 rounded-xl text-md shadow-2xl font-mono flex text-black hover:text-white hover:bg-slate-300 transition duration-700 ease-in-out">
                  <span className="mt-5 space-x-3">Chat</span>
                  <img src="./chat.png" className="h-7 rounded-full  space-x-4 mt-6 w-7"/>
              </button>

              <button className="h-16 w-32 place-content-center mt-6 bg-slate-100 rounded-xl text-md shadow-2xl font-mono flex text-black hover:text-white hover:bg-slate-300 transition duration-700 ease-in-out">
                    <span className="mt-5 space-x-3">Mail</span>
                    <img src="./mail.png" className="h-5 rounded-full space-x-4 mt-6 w-5"/>
              </button>


          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-400"></div>
      <ToastContainer/>
    </div>
  );
};

export default Contact;
