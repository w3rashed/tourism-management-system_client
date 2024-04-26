import { useEffect } from "react";
import { useState } from "react";
import DestinationCard from "./DestinationCard";

const DestinationsLists = () => {
  const [destinations, setDestinations] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/destinations")
      .then((res) => res.json())
      .then((data) => {
        setDestinations(data);
      });
  }, []);
  console.log(destinations);
  return (
    <div>
      <h1 className="my-6">DestinationsLists:{destinations.length} </h1>
      <div className="">
        {destinations.map((destination) => (
          <DestinationCard
            key={destination._id}
            destination={destination}
          ></DestinationCard>
        ))}
      </div>
    </div>
  );
};

export default DestinationsLists;
