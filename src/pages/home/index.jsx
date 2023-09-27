import { useEffect, useState } from "react";
import Card from "../../components/card";
import { useOutletContext } from "react-router-dom";
import Failed from "../../components/failed";
import Loading from "../../components/loading";

const Home = () => {
  //   const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [outletData, setOutletData] = useOutletContext();
  //   console.log(loaderData);

  useEffect(() => {
    setLoading(true);
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        // setData(data);
        setOutletData(data);
        setLoading(false);
      });
    setLoading(false);
  }, [setOutletData]);

  return (
    <div className="home pb-[40px]">
      {outletData.length > 0 ? (
        <div className="container">
          <p className="mb-4">
            <span className="text-[#0B0B0B] font-bold text-2xl">
              {outletData.length}
            </span>{" "}
            Items are available
          </p>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-col-1 gap-6">
            {loading
              ? <Loading/>
              : outletData.map((item) => <Card key={item.id} item={item} />)}
          </div>
        </div>
      ) : (
        <Failed />
      )}
    </div>
  );
};

export default Home;
