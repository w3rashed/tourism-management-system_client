import PropTypes from "prop-types";
const AllSpotsCard = ({ spots }) => {
  const { photo_url } = spots;
  return (
    <div>
      <div className="card  bg-base-100 shadow-xl">
        <div>
          <figure>
            <img src={photo_url} alt="" />
          </figure>
        </div>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

AllSpotsCard.propTypes  = {
  spots: PropTypes.object.isRequired,
};
export default AllSpotsCard;
