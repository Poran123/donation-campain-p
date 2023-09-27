import { useEffect, useState } from "react";
import DonationCard from "../../components/donation-card";
import BlankDonation from "../../components/blank";

const Donations = () => {
  const [donations, setDonations] = useState([]);
  const [length, setLength] = useState(0);

  useEffect(() => {
    setDonations(JSON.parse(localStorage.getItem("donation")));
    setLength(4);
  }, []);

  const handleSeeAll = (e) => {
    setLength(donations.length);
    e.target.style.display = "none";
  };
  return (
    <div className="donations py-[50px]">
      <div className="container">
        {donations?.length ? (
          <>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-[24px]">
              {donations.slice(0, length).map((item) => (
                <DonationCard key={item.id} item={item} />
              ))}
            </div>

            {donations.length > 4 && (
              <div className="text-center mt-[40px] ">
                <button
                  onClick={handleSeeAll}
                  className="btn py-[14px] px-[28px] rounded-[8px] text-white font-[600] bg-[#009444]"
                >
                  See All
                </button>
              </div>
            )}
          </>
        ) : (
          <BlankDonation />
        )}
      </div>
    </div>
  );
};

export default Donations;
