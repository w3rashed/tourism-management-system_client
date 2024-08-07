import { Helmet } from "react-helmet";
import Slider from "../Slider/Slider";
import DestinationsLists from "./DestinationsLists";
import Discount from "../Discount/Discount";
import Category from "../Category/Category";
import Gallery from "../Gallery/Gallery";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home-Discover Haven</title>
      </Helmet>
      <Slider></Slider>
      <div className="my-5">
        <DestinationsLists></DestinationsLists>
      </div>
      <Discount></Discount>
      <Category></Category>
      <div className="container mx-auto">
        <Gallery></Gallery>
      </div>
    </div>
  );
};

export default Home;
