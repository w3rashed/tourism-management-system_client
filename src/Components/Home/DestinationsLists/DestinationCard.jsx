import PropTypes from "prop-types";
import { IoArrowForwardSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const DestinationCard = ({ destination }) => {
  const { spot_name, photo_url, country_name, _id } = destination;
  return (
    <div className="">
      <div
        className="hero min-h-[300px] rounded-lg"
        style={{
          backgroundImage: `url(${photo_url})`,
        }}
      >
        <div className="hero-overlay bg-opacity-50 rounded-lg"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <div>
              <h1 className="mb-5 text-5xl font-bold">{spot_name}</h1>
              <p className="mb-5">{country_name}</p>
            </div>
            <div className="flex justify-center ">
              <Link
                to={`/view_details/${_id}`}
                className="bg-[#f7931e] text-black px-4 py-2 rounded-lg"
              >
                <button className="flex items-center gap-1">
                  View Details <IoArrowForwardSharp></IoArrowForwardSharp>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

DestinationCard.propTypes = {
  destination: PropTypes.object,
};
export default DestinationCard;
