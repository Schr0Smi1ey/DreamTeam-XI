import "./Subscribe.css";

const Subscribe = () => {
  return (
    <div className="container mx-auto md:p-6">
      <div className="relative">
        <div className="w-full absolute -top-40 z-10 border-4 border-white p-8 rounded-2xl">
          <div className="w-full p-6 text-center md:p-24 lg:p-28  rounded-2xl bg-white bg-subscribe flex flex-col gap-5 justify-center items-center">
            <h1 className="font-bold text-xl lg:text-3xl">
              Subscribe to our Newsletter
            </h1>
            <h3 className="font-medium text-lg lg:text-xl text-[#131313B3]">
              Get the latest updates and news right in your inbox!
            </h3>
            <div className="flex justify-center flex-col md:flex-row md:space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="text-[#13131366] border-2 border-[#13131366] mb-3 md:mb-0 mx-auto pl-4 p-2 rounded-lg"
              />
              <button className="font-bold px-4 py-2 bg-gradient-to-r from-sky-400 to bg-yellow-400 rounded-lg">
                Subsribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
