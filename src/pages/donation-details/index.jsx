import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../../components/loading";

const DonationDetails = () => {
  const id = useParams().id;

  const [currentData, setCurrentData] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    fetch("../../../data.json")
      .then((res) => res.json())
      .then((data) => {
        setCurrentData(data[id - 1]);
        setLoading(false);
      });
  }, [id]);

  const btnStyle = {
    backgroundColor: currentData.text_color,
  };
 

  const handleDonate = () => {
    

    // store data to local storage and check if data is already there, duplicate data should not be stored
    const data = localStorage.getItem("donation");
    if (data) {
      const parsedData = JSON.parse(data);
      const isExist = parsedData.find((item) => item.id === currentData.id);
      if (!isExist) {
        parsedData.push(currentData);
        localStorage.setItem("donation", JSON.stringify(parsedData));
        toast.success("Donation Successfull!");
        navigate("/donation");
      }
      else{
        toast.error("You already donated to this cause!")
      }
    }
    else{
        localStorage.setItem("donation", JSON.stringify([currentData]));
        toast.success("Donation Successfull!");
        navigate("/donation");
    }
  };

  return (
    <div className="donation">
      <div className="container">
        {loading ? (
          <Loading/>
        ) : (
          <div className="pb-[100px]">
            <div className="holder relative rounded-[8px] overflow-hidden">
              <img src={currentData.img} className="w-full md:h-auto h-[400px] object-cover" alt="" />
              <div className="price-overlay absolute bg-[#0b0b0ba3] md:p-[35px] p-[20px] bottom-0 left-0 w-full">
                <button
                  onClick={handleDonate}
                  className="text-white px-[26px] md:py-[16px] py-[8px] rounded-[4px] md:text-xl"
                  style={btnStyle}
                >
                  Donate ${currentData.price}
                </button>
              </div>
            </div>

            <h1 className="mt-[40px] md:text-[40px] text-[24px] font-bold text-[#0B0B0B]">
              {currentData.title}
            </h1>
            <p className="text-lg">{currentData.description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DonationDetails;
