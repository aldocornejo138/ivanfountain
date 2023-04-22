import React, { useState } from "react";
import { navLinksdata } from "../../constants";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { Link } from "react-scroll";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div
      className="max-w-screen-2x1 mx-auto px-16 w-full h-20 top-0 z-50 sticky flex justify-between items-center 
    font-titleFont  "
    >
      <h1 className="text-bodyColor font-bold">IVAN'S FOUNTAIN SERVICE</h1>
      <div>
        <ul className=" hidden mdl:inline-flex items-center gap-20 ">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-base font-normal text-bodyColor tracking-wide cursor-pointer hover:text-bodyColor duration-300"
              key={_id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl mdl:hidden w-10 h-10 inline-flex items-center justify-center rounded-full text-bodyColor cursor-pointer"
        >
          <h2 className="flex justify-between items-center gap-2 text-bodyColor">
            MENU <FiMenu />
          </h2>
        </span>
        {showMenu && (
          <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide">
            <div className="flex flex-col gap-8 py-2 relative">
              <ul className="flex flex-col gap-4">
                {navLinksdata.map((item) => (
                  <li
                    key={item._id}
                    className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-bodyColor duration-300"
                  >
                    <Link
                      onClick={() => setShowMenu(false)}
                      activeClass="active"
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <span
              onClick={() => setShowMenu(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-bodyColor duration-300 text-2xl cursor-pointer"
            >
              <MdClose />
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
