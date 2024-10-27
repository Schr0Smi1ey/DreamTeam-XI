import logo from "../../../public/Assets/logo.png";
import PropType from "prop-types";
import coinLogo from "../../../public/Assets/coin.svg";
import { useState } from "react";

const NavBar = ({ coin }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const navOptions = (
    <div
      className={`flex flex-col lg:flex-row lg:justify-between items-center lg:pt-5 lg:space-x-10`}
    >
      <li>
        <a
          className={`relative text-base lg:text-xl font-semibold transition-all duration-500`}
        >
          Home
        </a>
      </li>
      <li>
        <a
          className={`relative text-base lg:text-xl font-semibold transition-all duration-500`}
        >
          Fixture
        </a>
      </li>
      <li>
        <a
          className={`relative text-base lg:text-xl font-semibold transition-all duration-500`}
        >
          Teams
        </a>
      </li>
      <li>
        <a
          className={`relative text-base lg:text-xl font-semibold transition-all duration-500`}
        >
          Schedules
        </a>
      </li>
      <li className="block">
        <div className="flex flex-col lg:flex-row lg:px-4 lg:py-2 lg:rounded-xl items-center justify-between border-2 border-black">
          <div className="text-center font-bold lg:mr-2 lg:text-xl">{coin}</div>
          <div className="flex items-center justify-between gap-3">
            <h1 className="font-bold lg:text-xl">Coin</h1>
            <img src={coinLogo} alt="" className="w-8 h-8" />
          </div>
        </div>
      </li>
    </div>
  );

  return (
    <div
      className={`container mx-auto mb-10 center z-[70] py-2 px-5 flex justify-between items-center sticky top-0 text-white transition-all duration-500 bg-gradient-to-r from-yellow-400 to-sky-400 rounded-b-xl`}
    >
      <div className="w-2/12">
        <div>
          <a href="/" className="w-full">
            <img src={logo} alt="" />
          </a>
        </div>
      </div>

      <div>
        <ul className="hidden lg:flex px-1">{navOptions}</ul>
        <div className="dropdown dropdown-left">
          <div
            tabIndex={0}
            role="button"
            className="lg:hidden"
            onClick={toggleDropdown}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          {isOpen && (
            <ul
              tabIndex={0}
              className="menu dropdown-content bg-white text-black rounded-box space-y-1 z-[1] mt-3 p-2"
            >
              {navOptions}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

NavBar.propTypes = {
  coin: PropType.number.isRequired,
};

export default NavBar;
