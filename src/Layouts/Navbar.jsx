import { useState } from "react";
import { content } from "../Content";
import { HiMenuAlt2 } from "react-icons/hi";
import { createElement } from "react";
import './Navbar.css'

const Navbar = () => {
  const { nav } = content;
  const [showMenu, setShowMenu] = useState(false);
  const [active, setActive] = useState(0);

  return (
    <div className="wrapper w-full flex justify-center">
      <div
        className="sm:cursor-pointer fixed top-5 left-1 z-[999] rounded-lg bg-white/40 p-3 top-2 "
        onClick={() => setShowMenu(!showMenu)}
      >
        <HiMenuAlt2 size={34} />
      </div>
      <nav
        className={`fixed  z-[999] flex items-center  gap-30 bg-slate-200/60 px-63 py-5 backdrop-blur-md rounded-full   ${
          showMenu ? "top-14" : "-top-20"
        }`}
      >
        {nav.map((item, index) => (
          <a
            key={index}
            href={item.link} // Added href attribute here
            className={`icon  ${item.tooltip.toLowerCase()} ${active === index ? 'active' : ''}`}
            onClick={() => setActive(index)}
          >

            <div className="tooltip ">{item.tooltip}</div>
             
                {createElement(item.icon, {size: 24})} {/* Render the icon using createElement */}
              
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
