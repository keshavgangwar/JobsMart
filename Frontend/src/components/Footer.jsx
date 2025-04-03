import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { useState } from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-5">
          <div>
            <h2 className="text-2xl font-bold mb-3">JobSmart</h2>
            <p className="text-gray-400">
              Your gateway to endless career opportunities. Find your dream job
              with us!
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <FaFacebook size={28} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaTwitter size={28} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaLinkedin size={28} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaInstagram size={28} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Jobs</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-300">
                  Latest Jobs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Top Jobs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  IT Jobs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Frontend Developer Jobs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Backend Developer Jobs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Full Stack Developer Jobs
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Press
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3 cursor-pointer">
              Contact Us
            </h3>
            <ul className="space-y-1">
              <li>
                <span className="text-white">
                  123, ABC Street, XYZ City, India-244713
                </span>
              </li>
              <li>
                <span className="text-white">+91-8449169377</span>
              </li>
              <li>
                <span className="text-white">gangwarkeshav3@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-700" />
        <div className="text-center text-gray-500 text-sm mt-5 h-1">
          © {new Date().getFullYear()} JobSmart. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
