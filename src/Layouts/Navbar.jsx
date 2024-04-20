import { useState } from "react";
import { content } from "../Content";
import { HiMenuAlt2 } from "react-icons/hi";
import { createElement } from "react";

const Navbar = () => {
  const { nav } = content;
  const [showMenu, setShowMenu] = useState(false);
  const [active, setActive] = useState(0);

  return (
    <div className="w-full flex justify-center">
      <div
        className="sm:cursor-pointer fixed top-5 left-10 z-[999] rounded-lg bg-white/40 p-2"
        onClick={() => setShowMenu(!showMenu)}
      >
        <HiMenuAlt2 size={34} />
      </div>
      <nav
        className={`fixed z-[999] flex items-center justify-center gap-5 bg-slate-200/60 px-6 py-3 backdrop-blur-md rounded-full text-dark_primary duration-300 ${
          showMenu ? "top-20" : "-top-full"
        }`}
        style={{ width: "35%", maxWidth: "1200px" }} // Centering and sizing the navigation bar
      >
        {nav.map((item, i) => (
          <a
            key={i}
            href={item.link}
            onClick={() => setActive(i)}
            className={`text-xl p-3 rounded-full sm:cursor-pointer ${
              i === active && "bg-dark_primary text-white"
            }`}
            style={{ marginRight: "20px" }} // Adding margin between each navigation item
          >
            {createElement(item.icon)}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
