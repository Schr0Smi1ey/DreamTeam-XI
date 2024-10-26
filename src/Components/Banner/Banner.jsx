import banner_img from "../../../public/Assets/banner-main.png";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="bg-banner bg-black container h-fit mx-auto p-8 lg:p-14 border-2 text-white border-red-600">
      <div className="flex flex-col gap-5 lg:gap-8 justify-center items-center">
        <img src={banner_img} alt="" className="w-fit h-fit" />
        <h1 className="font-bold text-2xl lg:text-4xl">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h1>
        <h3 className="font-inter font-medium text-[#FFFFFFB3] text-lg lg:text-2xl">
          Beyond Boundaries Beyond Limits
        </h3>
        <div className="border-2 border-[#E7FE29] p-2 rounded-2xl">
          <button className="bg-[#E7FE29] text-black font-bold px-4 py-3 rounded-lg">
            Claim Free Credit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
