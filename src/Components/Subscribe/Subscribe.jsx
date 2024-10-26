import "./Subscribe.css";

const Subscribe = () => {
  return (
    <div className="container mx-auto">
      <div className="relative">
        <div className="mx-auto p-20 absolute z-10 bg-white bg-subscribe flex flex-col gap-5 justify-center items-center">
          <h1 className="font-bold text-xl lg:text-3xl">
            Subscribe to our Newsletter
          </h1>
          <h3 className="font-medium text-lg lg:text-xl text-[#131313B3]">
            Get the latest updates and news right in your inbox!
          </h3>
          <div className="mx-auto space-x-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="text-[#13131366] border-2 border-[#13131366] pl-4 p-2 rounded-lg"
            />
            <button className="font-bold px-4 py-2 bg-gradient-to-r from-sky-400 to bg-yellow-400 rounded-lg">
              Subsribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
