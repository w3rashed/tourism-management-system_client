import PropTypes from "prop-types";
const SlideCard = ({ slide }) => {
  const { photo_url } = slide;
  return (
    <div className="">
      <div className=" left-[30vh] z-10 absolute top-[30%] text-white">
        <h1 className="text-4xl">Discover Haven</h1>
        <h2 className="text-6xl">Your Journey Begins Here</h2>
        <p className="text-lg">6540 TOURS ARE AVAILABLE, BOOK NOW</p>
      </div>
      <div className="relative bg-[#273367d3]">
        <img className="opacity-60 h-[80vh] w-full" src={photo_url} alt="" />
      </div>
    </div>
  );
};

SlideCard.propTypes = {
  slide: PropTypes.object,
};
export default SlideCard;
