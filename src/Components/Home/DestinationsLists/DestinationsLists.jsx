import { useEffect } from "react";
import { useState } from "react";
import DestinationCard from "./DestinationCard";
import { Zoom } from "react-awesome-reveal";

const DestinationsLists = () => {
  const [destinations, setDestinations] = useState([]);
  useEffect(() => {
    fetch("https://discover-haven-server.vercel.app/destinations")
      .then((res) => res.json())
      .then((data) => {
        setDestinations(data.slice(0, 6));
      });
  }, []);
  console.log(destinations);
  return (
    <div className="px-5 container mx-auto">
      <div className="text-center my-8">
        <Zoom duration="1000">
          <h3 className="text-2xl font-Comforter_Brush text-[#f7931e]">
            Destination lists
          </h3>
          <Zoom duration="1000" delay="20">
            <h2 className=" font-semibold text-5xl">Go Exotic Places</h2>
          </Zoom>
        </Zoom>
      </div>
      <div className=" grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
