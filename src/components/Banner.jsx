const Banner = () => {
  return (
    <div className="bg-gray-100">
      <div className="mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="mb-8 md:mb-0 md:w-1/2">
          <h1 className="text-4xl p-10 font-bold mb-4">
            Unlock a World of Stories – Find Your Next Favorite Book at React
            Book Shop
          </h1>
          <button className="bg-blue-500 mx-10 hover:bg-blue-600 text-white px-6 py-3 rounded">
            Buy Book
          </button>
        </div>
        <img
          src="./banner-library.jpg"
          alt="Book Banner"
          className="w-full md:w-1/2 h-auto md:h-96  p-[2px]"
        />
      </div>
    </div>
  );
};

export default Banner;
