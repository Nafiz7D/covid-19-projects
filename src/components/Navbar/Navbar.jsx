import React from "react";
import Logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <header>
      <div className="containner flex items-center justify-between py-3">
        {/* Logo section */}
        <div>
          <a href="#">
            {" "}
            <img className="w-40" src={Logo} alt="" />
          </a>
        </div>
        {/* Navlinks section */}
        <ul className="hidden md:flex items-center gap-5 font-poppins">
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">Custome Stories</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Blogs</a>
          </li>
        </ul>
        {/* Button section */}
        <div>
          <button className="border border-gray-400 px-4 py-2 rounded-lg font-poppins hover:bg-primary hover:text-white transform duration-300">
            Get in touch
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
