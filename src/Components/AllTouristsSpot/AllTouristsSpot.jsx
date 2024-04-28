import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import AllSpotsCard from "./AllSpotsCard";
import { useState } from "react";

const AllTouristsSpot = () => {
  const allSpots = useLoaderData();
  const [data,setData]=useState(allSpots)
 

  console.log(allSpots);
  return (
    <div>
      <Helmet>
        <title>AllTouristsSpot-Discover Haven</title>
      </Helmet>
      <h2>AllTouristsSpot:{allSpots.length}</h2>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {allSpots.map((spots) => (
          <AllSpotsCard key={spots._id} spots={spots}></AllSpotsCard>
        ))}
      </div>
    </div>
  );
};

export default AllTouristsSpot;
