/* eslint-disable react/prop-types */
const Search = ({handleSearch, handleChange}) => {
  return (
    <div className="search md:py-[120px] py-[60px]">
      <div className="text-center">
        <h1 className="lg:text-5xl md:text-3xl text-xl font-bold text-[#0B0B0B] md:mb-[40px] mb-[20px]">
          I Grow By Helping People In Need
        </h1>

        <form onSubmit={handleSearch} action="" className="flex justify-center items-center search">
          <input
            type="text"
            name="search"
            onChange={handleChange}
            required
            placeholder="Search here..."
            className="border text-sm border-[#FF444A] rounded-l-[10px] py-[16px] px-[16px] w-[400px] max-w-full focus:outline-none"
          />
          <input
            type="submit"
            value="Search"
            className="bg-[#FF444A] border text-sm border-[#FF444A] text-white rounded-r-[10px] py-[16px] px-[30px] cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
};

export default Search;
