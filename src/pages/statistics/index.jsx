import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
const Statistics = () => {
  const [totalLength, setTotalLength] = useState(0);
  const [donatedLength, setDonatedLength] = useState(0);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        setTotalLength(data.length);
      });
  }, []);
  useEffect(() => {
    const data = localStorage.getItem("donation");
    if (data) {
      const parsedData = JSON.parse(data);
      setDonatedLength(parsedData.length);
    }
  }, []);
  var options = {
    series: [donatedLength, totalLength],
    legend: {
      position: "bottom",
      fontSize: 18,
      inverseOrder: false,
      itemMargin: {
        horizontal: 20,
        vertical: 10,
      },
      markers: {
        width: 100,
        height: 12,
        radius: 0,
        offsetX: -5,
      },
    },
    chart: {
      width: 380,
      type: "pie",
    },
    labels: ["Your Donation", "Total Donation"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 300,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };
  return (
    <div className="statistics py-[50px]">
      <div className="container">
        <div className="flex justify-center items-center">
          <Chart
            options={options}
            series={options.series}
            type="pie"
            width={700}
            height={620}
          />
        </div>
      </div>
    </div>
  );
};

export default Statistics;
