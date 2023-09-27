import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const DonationCard = ({ item }) => {
  const cardStyle = {
    backgroundColor: item.bgColor,
  };
  const catStyle = {
    backgroundColor: item.category_color,
    color: item.text_color,
  };
  const titleStyle = {
    color: item.text_color,
  };
  const btnStyle = {
    backgroundColor: item.text_color,
  };
  return (
    <div
      className="card h-full rounded-[8px] overflow-hidden flex md:flex-row flex-col justify-between items-center"
      style={cardStyle}
    >
      <img src={item.img} className="md:w-1/3 w-full h-full object-cover" alt="" />
      <div className="card-body p-[16px] md:w-2/3 w-full">
        <span
          style={catStyle}
          className="py-[4px] px-[10px] rounded-[4px] text-sm font-[500]"
        >
          {item.category}
        </span>
        <p className="md:text-2xl text-lg mt-[8px] font-[600] text-[#0B0B0B]">
          {item.title}
        </p>
        <p className="font-[600]" style={titleStyle}>${item.price}</p>

        <Link to={`/donation/${item.id}`}>
          <button
            className="text-white px-[16px] py-[9px] rounded-[4px] md:text-lg mt-[16px]"
            style={btnStyle}
          >
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DonationCard;
