import PropTypes from "prop-types";
const SlideCard = ({ slide }) => {
  const { segment_name, status, price, area, bedrooms, bathrooms, image_url } =
    slide;
  return (
    <div className="">
      <div className="absolute flex mt-[85%] lg:mt-[80%]  md:mt-[80%] z-30 ml-[8%] text-white">
        <div className="grid gap-1  ">
          <h2
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-duration="1000"
            data-aos-anchor="#slider-anchor"
            className="text-2xl font-bold"
          >
            {price}
          </h2>
          <h2
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1000"
            data-aos-anchor="#slider-anchor"
            className=" text-xl font-bold"
          >
            {segment_name}
          </h2>
          <div className="font-bold flex  gap-4">
            <p
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1000"
              data-aos-anchor="#slider-anchor"
              className=""
            >
              Bed: {bedrooms}
            </p>
            <p
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1000"
              data-aos-anchor="#slider-anchor"
            >
              Bath: {bathrooms}
            </p>
            <p
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-anchor="#slider-anchor"
            >
              Area: {area}
            </p>
          </div>
        </div>
      </div>
      <div className=" flex ml-[8%] z-10 absolute mt-6">
        <p
          data-aos="fade-up"
          data-aos-delay="600"
          data-aos-duration="1000"
          className="bg-[#273367d3]  py-1 w-20 text-center text-white rounded-md "
        >
          {status}
        </p>
      </div>
      <div className="relative bg-[#273367d3]">
        <img className="opacity-60 h-[80vh] w-full" src={image_url} alt="" />
      </div>
      <div id="slider-anchor" className=" absolute top-[70%]  "></div>
    </div>
  );
};

SlideCard.propTypes = {
  slide: PropTypes.object,
};
export default SlideCard;
