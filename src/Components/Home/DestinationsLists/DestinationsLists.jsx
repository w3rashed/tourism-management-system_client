import { useEffect } from "react";
import { useState } from "react";
import DestinationCard from "./DestinationCard";

const DestinationsLists = () => {
  const [destinations, setDestinations] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/destinations")
      .then((res) => res.json())
      .then((data) => {
        setDestinations(data.slice(0, 6));
      });
  }, []);
  console.log(destinations);
  return (
    <div>
      <div>
        <h3>Destination lists</h3>
        <h2>Go Exotic Places</h2>
      </div>
      <div className=" grid gap-6 grid-cols-3">
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
