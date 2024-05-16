import React from "react";
import heroImage from "./images/heroImage.jpg";
export default function Hero() {

  const handleBuyNow = () => {
   
    window.open(`https://wa.me/7900040199`, '_blank');
  };

  return (
    <div
      className="w-full bg-cover bg-center bg-gray-100 p-4 md:p-20" // Adjust padding for smaller screens
      style={{ backgroundImage: `url(${heroImage})`, height: "auto", minHeight: "300px" }} // Adjust height for responsive behavior
    >
      <div className="flex flex-col items-center justify-center bg-black bg-opacity-50 py-28 px-6 md:py-30 md:px-20"> 
        <h1 className="text-2xl md:text-4xl font-bold text-white text-center md:text-left"> 
          Elevate Your Senses with Our Attar
        </h1>
        <p className="text-base md:text-lg text-white mt-2 text-center md:text-left"> 
          Our attar captures the essence of refined olfaction
        </p>
        <div className="mt-4 flex justify-center md:justify-start"> 
          <button 
            className="px-4 py-2 text-center text-white bg-indigo-600 rounded-md shadow-md"
            onClick={handleBuyNow} 
          > 
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
