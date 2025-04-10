import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { FaRegBell } from "react-icons/fa6";

const Navbar = ({ notifications, setActivePage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = (page) => {
    setActivePage(page);
    setIsMenuOpen(false);
  };

  return (
    <nav className="flex lg:px-16 px-2 justify-between items-center lg:py-3 py-2 border-b bg-white border-gray-200">
      <Logo />

      {/* Desktop Menu */}
      <div className="space-x-6 hidden md:flex">
        {[
          { name: "Grievances", page: "grievances" },
          { name: "Community", page: "community" },
          { name: "Job Portal", page: "jobPortal" },
        ].map((item, index) => (
          <button
            key={index}
            onClick={() => handleMenuClick(item.page)}
            className="text-[#2E91E2] hover:text-blue-600 border-[1.5px] border-white rounded-2xl py-1 px-2 hover:border-blue-400 transition-transform font-medium text-lg"
          >
            {item.name}
          </button>
        ))}
      </div>

      {/* Mobile Menu Button */}
     

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", stiffness: 120 }}
          className="fixed inset-0 bg-white shadow-lg flex flex-col items-center justify-center gap-6 z-50"
        >
          {/* Close Button */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-5 right-5 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition"
          >
            <X className="w-6 h-6 text-gray-700" />
          </button>

          {/* Links */}
          <nav className="flex flex-col items-center gap-4">
            {[
              { name: "Grievances", page: "grievances" },
              { name: "Community", page: "community" },
              { name: "Job Portal", page: "jobPortal" },
            ].map((item, index) => (
              <button
                key={index}
                onClick={() => handleMenuClick(item.page)}
                className="text-[#2E91E2] text-xl font-medium hover:text-blue-600 transition duration-200"
              >
                {item.name}
              </button>
            ))}
          </nav>
        </motion.div>
      )}

      {/* Notifications & Profile */}
      <div className="flex">
      <div className="flex items-center space-x-2">
        <div className="flex bg-[#E5E7EB] px-3 py-2 items-center space-x-1 rounded-xl">
          <FaRegBell className="hover:text-blue-500" />
          <span className="bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
            {notifications}
          </span>
        </div>
        <img
          src="https://play-lh.googleusercontent.com/LeX880ebGwSM8Ai_zukSE83vLsyUEUePcPVsMJr2p8H3TUYwNg-2J_dVMdaVhfv1cHg=w240-h480-rw"
          alt="Profile"
          className="lg:w-12 lg:h-12 h-10 w-10 rounded-full"
        />
      </div>
      <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen(true)}
          className="text-[#113756] text-2xl font-semibold text-right hover:text-blue-600 border-[1.5px] border-white rounded-2xl py-1 px-2 hover:cursor-pointer transition-transform "
        >
           {isMenuOpen ? "×" : "☰"}
        </button>
      </div>
      </div>
     
    </nav>
  );
};

export default Navbar;
