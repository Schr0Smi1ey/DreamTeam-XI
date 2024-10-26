import logo from "../../../public/Assets/logo.png";
import { BsCoin } from "react-icons/bs";

const NavBar = () => {
  const navOptions = (
    <div
      className={`flex flex-col lg:flex-row lg:justify-between items-center lg:pt-5 lg:space-x-10 ${
        scroll ? "text-black" : "lg:text-white text-black"
      }`}
    >
      <li>
        <a
          className={`relative text-base lg:text-xl font-semibold transition-all duration-500 ${
            scroll ? "hover:text-white" : "link-hover"
          }`}
        >
          Home
        </a>
      </li>
      <li>
        <a
          className={`relative text-base lg:text-xl font-semibold transition-all duration-500 ${
            scroll ? "hover:text-white" : "link-hover"
          }`}
        >
          Fixture
        </a>
      </li>
      <li>
        <a
          className={`relative text-base lg:text-xl font-semibold transition-all duration-500 ${
            scroll ? "hover:text-white" : "link-hover"
          }`}
        >
          Teams
        </a>
      </li>
      <li>
        <a
          className={`relative text-base lg:text-xl font-semibold transition-all duration-500 ${
            scroll ? "hover:text-white" : "link-hover"
          }`}
        >
          Schedules
        </a>
      </li>
      <li>
        <p
          className={`flex items-center border-2 border-black p-2 space-x-2 relative text-lg lg:text-2xl shadow-lg rounded-lg font-semibold transition-all duration-500 ${
            scroll ? "hover:text-white" : "link-hover"
          }`}
        >
          <span className="mr-2">0 </span> Coin
          <span className="text-[#e3cb47]">
            <BsCoin />
          </span>
        </p>
      </li>
    </div>
  );

  return (
    <div
      className={`container mx-auto center z-[70] py-2 px-5 flex justify-between items-center my-5 sticky top-0 text-white transition-all duration-500 -translate-y-4 ${
        scroll
          ? "bg-gradient-to-r from-[#dc9c4d] to-[#7653df] mt-4 rounded-b-2xl"
          : "bg-opacity-0"
      }`}
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
          <div tabIndex={0} role="button" className="lg:hidden -translate-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
          <ul
            tabIndex={0}
            className="menu dropdown-content bg-white rounded-box z-[1] mt-3 w-fit p-2"
          >
            {navOptions}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
