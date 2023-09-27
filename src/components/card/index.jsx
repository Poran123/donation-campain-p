import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Card = ({ item }) => {
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
  return (
    <Link to={`/donation/${item.id}`}>
      <div className="card h-full rounded-[8px] overflow-hidden" style={cardStyle}>
        <img src={item.img} alt="" />
        <div className="card-body p-[16px]">
            <span style={catStyle} className="py-[4px] px-[10px] rounded-[4px] text-sm font-[500]">
                {item.category}
            </span>
            <p className="text-xl mt-[8px] font-[600]" style={titleStyle}>
                {item.title}
            </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
