import React from "react";
import about from "./images/about.jpg";

export default function About() {
  return (
    <div className="py-16 bg-black">
      <div className="container m-auto px-6 text-white md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img src={about} alt="image" />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-[#00df9a] font-bold md:text-4xl">
            Crafting Exquisite Fragrances, Capturing Timeless Elegance
            </h2>
            <p className="mt-6 text-[#d8e4e0]">
              At Attar Agency, our mission is to create perfumes that embody
              elegance, sophistication, and individuality. We meticulously
              select the finest ingredients to blend into our signature scents,
              ensuring each fragrance tells its own unique story. 
            </p>
            <p className="mt-4 text-[#e0e7e5]">
            Our expert
              perfumers are committed to excellence, innovation, and quality,
              making every drop a masterpiece. Whether you're seeking a
              signature scent or a bespoke creation, A Attar Agency offers an
              unparalleled olfactory experience that delights and inspires.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
