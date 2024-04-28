import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import AllSpotsCard from "./AllSpotsCard";
import { useState } from "react";
import { FaSortAlphaDownAlt } from "react-icons/fa";
import { useEffect } from "react";

const AllTouristsSpot = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://discover-haven-server.vercel.app/destinations")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const handlesortByCost = (e) => {
    console.log(e.target.value);
    if (e.target.value == "average_cost") {
      const cost = data.sort((a, b) => b.average_cost - a.average_cost);
      setData(Array.from(cost));
      console.log(data);
    }
  };

  // console.log(allSpots);
  return (
    <div className="px-5">
      <Helmet>
        <title>AllTouristsSpot-Discover Haven</title>
      </Helmet>
      <div className="flex items-center justify-between px-10">
        <h2 className="flex gap-2 my-4">
          <span className="font-semibold">Spots:</span>
          <span>{data.length}</span>
        </h2>
        {/* sort by average cost */}
        <div className="flex items-center gap-3 mb-6">
          <div>
            <h4 className="flex items-center  gap-1">
              <span className="font-semibold">Sort By</span>{" "}
              <FaSortAlphaDownAlt></FaSortAlphaDownAlt>
            </h4>
          </div>
          <div>
            <label className="form-control w-full input input-bordered ">
              <select
                onChange={handlesortByCost}
                name="spot_name"
                className="mt-3  outline-none"
              >
                <option value="">Select</option>
                <option value="average_cost">Average Cost</option>
                <option value="name">name</option>
                <option value="place">place</option>
              </select>
            </label>
          </div>
        </div>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {data.map((spots) => (
          <AllSpotsCard key={spots._id} spots={spots}></AllSpotsCard>
        ))}
      </div>
    </div>
  );
};

export default AllTouristsSpot;
