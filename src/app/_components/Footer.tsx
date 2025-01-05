import React from "react";
// import { SiInstagram } from "react-icons/si";
// import { FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-8">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="text-center mb-4">
          <p className="text-sm text-gray-300">
            <span className="font-bold text-white">Advitiya</span> – Built with{" "}
            <span className="text-pink-500">❤️</span> by{" "}
            <span className="font-bold text-blue-400">CSEDS RGMCET</span> &{" "}
            <span className="font-bold text-green-400">Advitiyans</span>.
          </p>
        </div>

        {/* Divider */}
        <div className="h-0.5 bg-gray-700 mx-auto mb-2 w-3/4"></div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row items-center justify-center text-center lg:text-left space-y-2 lg:space-y-0">
          {/* Copyright Text */}
          <p className="text-xs text-gray-500 lg:order-none">
            &copy; {new Date().getFullYear()}{" "}
            <span className="text-gray-300 font-semibold">Advitiya</span>. All
            rights reserved.
          </p>

          {/* Social Media Icons */}
          {/* <div className="flex space-x-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 text-xl hover:scale-110 hover:text-pink-400 transition-transform duration-300"
              aria-label="Instagram"
            >
              <SiInstagram />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-500 text-xl hover:scale-110 hover:text-red-400 transition-transform duration-300"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 text-xl hover:scale-110 hover:text-blue-400 transition-transform duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
