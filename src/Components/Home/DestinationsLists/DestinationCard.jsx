import PropTypes from "prop-types";

const DestinationCard = ({ destination }) => {
  const { spot_name, photo_url, country_name } = destination;
  return (
    <div className="bg-[url('{photo_url}')] h-28 bg-no-repeat bg-cover">
      <h1>{spot_name}</h1>
      <h1>{country_name}</h1>
    </div>
  );
};

DestinationCard.propTypes = {
  destination: PropTypes.object,
};
export default DestinationCard;
