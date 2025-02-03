import React from "react";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-black text-white p-4 flex justify-between items-center">
      <div className="flex justify-between items-center gap-10">
        <div className="text-xl font-bold">
          <span className="text-purple-400">E</span>commerce
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="hover:underline">
            Shop
          </a>
          <a href="#" className="hover:underline">
            Stories
          </a>
          <a href="#" className="hover:underline">
            About
          </a>
        </nav>
        {/* Search bx */}
        <div className="flex justify-between items-center gap-2">
          <FaSearch className=" text-gray-500" />
          <input
            type="text"
            placeholder="Search"
            className="px-2 py-1 text-white rounded"
          />
        </div>
      </div>

      {/* Icons */}
      <div className="flex gap-8 items-center">
        <FaShoppingCart className="cursor-pointer" />
        <div className="flex gap-2 items-center">
          <FaUser className="cursor-pointer" />
          login
        </div>
      </div>
    </header>
  );
};

export default Header;
