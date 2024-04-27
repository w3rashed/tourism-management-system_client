import { Helmet } from "react-helmet";
import { FaUsers } from "react-icons/fa";
import { IoLocationOutline, IoTimeOutline } from "react-icons/io5";
import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
  const spots = useLoaderData();
  console.log(spots);
  const {
    photo_url,
    spot_name,
    country_name,
    description,
    spot_location,
    average_cost,
    visitors_per_year,
    travel_time,
    seasonality,
  } = spots;

  return (
    <div className="px-5">
      <Helmet>
        <title>View_details-Discover Haven</title>
      </Helmet>
      <div className="lg:w-[1140px] md:w-[760px] mx-auto">
        <div className=" ">
          <div>
            <figure>
              <img className="h-[400px] w-full" src={photo_url} alt="" />
            </figure>
          </div>
          <div className="card-body">
            <h2 className="text-3xl">
              <span>Spot Name:</span>{" "}
              <span className="font-medium">{spot_name}</span>
            </h2>
            <h2 className="">
              <span>Country Name: </span>
              <span className="font-medium">{country_name}</span>
            </h2>
            <p>{description}</p>
            <p>
              Season: <span className="text-[#f7931e]">{seasonality}</span>
            </p>
            <p>
              Form: <span className="text-[#f7931e]">${average_cost}</span>
            </p>
            <div className=" tex  ">
              <h6 className="flex items-center  gap-1">
                <IoLocationOutline className="text-[#f7931e]"></IoLocationOutline>
                {spot_location} days
              </h6>
              <h6 className="flex items-center  gap-1">
                <IoTimeOutline className="text-[#f7931e]"></IoTimeOutline>
                {travel_time} days
              </h6>
              <h6 className="flex items-center gap-3">
                <FaUsers className="text-[#f7931e]"></FaUsers>
                {visitors_per_year}
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
