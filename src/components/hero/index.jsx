/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import Search from "../search";

const Hero = ({ setOutletData }) => {
  const location = useLocation();
  const { pathname } = location;

  const handleSearch = (e) => {
    e.preventDefault();

    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        const filteredData = data.filter((item) =>
          item.category
            .toLowerCase()
            .includes(e.target.search.value.toLowerCase())
        );
        setOutletData(filteredData);
      });
  };

  const handleChange = (e) => {
    e.preventDefault();
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        const filteredData = data.filter((item) =>
          item.category.toLowerCase().includes(e.target.value.toLowerCase())
        );
        setOutletData(filteredData);
      });
  };
  return (
    <div className={pathname === "/" ? "hero" : "bg-white py-[30px]"}>
      <div className="container">
        <div className="flex md:flex-row flex-col md:justify-between justify-center items-center gap-3">
          <NavLink to="/" className="text-2xl font-bold text-black">
            <img src={logo} className="logo w-[160px]" alt="" />
          </NavLink>
          <div className="flex justify-end items-center gap-[50px] menu">
            <NavLink to="/" className="text-lg text-[#0B0B0B]">
              Home
            </NavLink>
            <NavLink to="/donation" className="text-lg text-[#0B0B0B]">
              Donation
            </NavLink>
            <NavLink to="/statistics" className="text-lg text-[#0B0B0B]">
              Statistics
            </NavLink>
          </div>
        </div>

        {pathname === "/" && (
          <Search handleSearch={handleSearch} handleChange={handleChange} />
        )}
      </div>
    </div>
  );
};

export default Hero;
