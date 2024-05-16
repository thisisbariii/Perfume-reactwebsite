import React from "react";
import { Link } from "react-router-dom";
import logo from './images/logo.png'
import {
  FaInstagram,
  FaDribbble,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    { label: "YouTube", icon: FaYoutube },
    { label: "Instagram", icon: FaInstagram },
   
  ];

  const links = [
    [
      { label: "Company", key: "header-1" },
      { label: "About us", key: "item-1-1" },
      { label: "Blog", key: "item-1-2" },
      { label: "Contact us", key: "item-1-3" },
      { label: "Pricing", key: "item-1-4" },
      { label: "Testimonials", key: "item-1-5" },
    ],
    [
      { label: "Support", key: "header-2" },
      { label: "Help center", key: "item-2-1" },
      { label: "Terms of service", key: "item-2-2" },
      { label: "Legal", key: "item-2-3" },
      { label: "Privacy policy", key: "item-2-4" },
      { label: "Status", key: "item-2-5" },
    ],
  ];

  return (
    <div className="w-full bg-black text-[#00df9a] font-poppins">
      <div className="py-16 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 p-4">
        <div className="mx-4 lg:mx-0 mb-8 lg:mb-0">
          <div className="footer-img flex items-center">
            <img
              src={logo}
              alt=""
              className="w-16 h-auto"
            />
            <span className="text-3xl font-bold pl-2 text-[#00df9a]">
            𝔄𝔦𝔪𝔢𝔫𝔄𝔱𝔱𝔞𝔯
            </span>
          </div>
          <div className="infos text-gray-400 mt-4">
            <span>Copyright © 2020 Nexcent ltd.</span>
            <span>All rights reserved</span>
          </div>
          <div className="footer-icons flex items-center mt-4">
            {socialLinks.map((socialLink, index) => {
              const Icon = socialLink.icon;
              return (
                <Icon
                  key={`social-${index}`}
                  className="w-10 h-10 p-2 rounded-full bg-green-700 hover:bg-white hover:text-[#00df9a] cursor-pointer mx-1"
                />
              );
            })}
          </div>
        </div>
        <div className="mx-2 grid w-full py-5 sm:py-0 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 ">
          {links.map((col, colIndex) => (
            <ul key={`col-${colIndex}`} className={`mb-4 lg:mb-0`}>
              {col.map((link, linkIndex) => (
                <li
                  key={`link-${colIndex}-${linkIndex}`}
                  className={`text-gray-400 cursor-pointer ${
                    link.key === "header-1" || link.key === "header-2"
                      ? "text-2xl text-white mb-2"
                      : "mb-1"
                  }`}
                >
                  {link.label}
                </li>
              ))}
            </ul>
          ))}
        </div>
        <div className="footer-form flex flex-col mx-4 lg:mx-0 mt-4 lg:mt-0">
          <label className="text-lg font-semibold text-[#00df9a]">
            Stay up to date
          </label>
          <input
            type="email"
            placeholder="Subscribe to our email"
            className="mt-2 w-full border-none rounded-lg py-3 px-6"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
