import PropTypes from "prop-types";
import { FaUsers } from "react-icons/fa";
import { IoArrowForwardSharp, IoTimeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
const AllSpotsCard = ({ spots }) => {
  const {
    photo_url,
    spot_name,
    average_cost,
    visitors_per_year,
    travel_time,
    seasonality,
    _id,
  } = spots;

  return (
    <div>
      <div className="card  bg-base-100 shadow-xl">
        <div>
          <div>
            <figure>
              <img
                className="h-[400px] w-full rounded-lg"
                src={photo_url}
                alt=""
              />
            </figure>
          </div>
        </div>
        <div className="card-body">
          <h2 className="card-title">{spot_name}</h2>
          <p>
            Season: <span className="text-[#f7931e]">{seasonality}</span>
          </p>
          <p>
            Form: <span className="text-[#f7931e]">${average_cost}</span>
          </p>
          <div className="flex items-center justify-between bg-[#f7cd711e] px-5 py-2 rounded-lg">
            <h6 className="flex items-center  gap-1">
              <IoTimeOutline className="text-[#f7931e]"></IoTimeOutline>
              {travel_time} days
            </h6>
            <h6 className="flex items-center gap-1">
              <FaUsers className="text-[#f7931e]"></FaUsers>
              {visitors_per_year}
            </h6>
            <Link to={`/view_details/${_id}`}>
              <button className="flex items-center gap-1">
                View Details <IoArrowForwardSharp></IoArrowForwardSharp>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

AllSpotsCard.propTypes = {
  spots: PropTypes.object.isRequired,
};
export default AllSpotsCard;
