import PropTypes from "prop-types";
import { Zoom } from "react-awesome-reveal";
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
        <Zoom duration="1000" delay="30">
          <div className="hero-content text-center text-white">
            <div className="max-w-md">
              <div>
                <Zoom duration="1000" delay="40">
                  <h1 className="mb-5 text-5xl font-bold ">{spot_name}</h1>
                </Zoom>
                <Zoom duration="1000" delay="50">
                  <p className="mb-5 font-Comforter_Brush text-2xl ">{country_name}</p>
                </Zoom>
              </div>
              <Zoom duration="1000" delay="60">
                <div className="flex justify-center ">
                  <Link
                    to={`/view_details/${_id}`}
                    className="bg-[#f7931e] text-black px-4 py-2 rounded-lg"
                  >
                    <Zoom duration="1000" delay="0">
                      <button className="flex items-center gap-1">
                        View Details <IoArrowForwardSharp></IoArrowForwardSharp>
                      </button>
                    </Zoom>
                  </Link>
                </div>
              </Zoom>
            </div>
          </div>
        </Zoom>
      </div>
    </div>
  );
};

DestinationCard.propTypes = {
  destination: PropTypes.object,
};
export default DestinationCard;
