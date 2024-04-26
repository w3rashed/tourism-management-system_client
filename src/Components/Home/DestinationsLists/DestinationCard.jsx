import PropTypes from "prop-types";

const DestinationCard = ({ destination }) => {
  const { spot_name, photo_url, country_name } = destination;
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
            <h1 className="mb-5 text-5xl font-bold">{spot_name}</h1>
            <p className="mb-5">{country_name}</p>
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
