import logo from "../../../public//Assets//banner-main.png";

const Footer = () => {
  return (
    <div className="bg-[#06091A] pt-60">
      <div className="container mx-auto p-20">
        <div className="w-fit mx-auto">
          <img src={logo} alt="" className="w-fit h-fit mb-14" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 text-white pb-10 border-b-2 border-[#9f969666]">
          <div className="lg:w-3/4 space-y-2">
            <h2 className="font-semibold text-lg">About Us</h2>
            <p className="text-[#FFFFFF99]">
              We are a passionate team dedicated to providing the best services
              to our customers.
            </p>
          </div>
          <div className="space-y-3">
            <h2 className="font-semibold text-lg">Quick Links</h2>
            <ul className="text-[#FFFFFF99] list-disc ml-5 space-y-2">
              <li>Home</li>
              <li>Services</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="space-y-3">
            <h2 className="font-semibold text-lg">Subscribe</h2>
            <p className="text-[#FFFFFF99] lg:w-3/4">
              Subscribe to our newsletter for the latest updates.
            </p>
            <div>
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 pl-4 text-[#13131366] rounded-l-xl"
              />
              <button className="px-3 py-2 rounded-r-xl font-bold bg-gradient-to-r from-sky-400 to bg-yellow-400 text-black">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <h2 className="text-center text-[#FFFFFF99] my-10">
          @2024 Your Company All Rights Reserved.
        </h2>
      </div>
    </div>
  );
};

export default Footer;
