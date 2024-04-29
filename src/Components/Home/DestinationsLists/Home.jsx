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
      <div className="mt-20">
        <DestinationsLists></DestinationsLists>
      </div>
      <Discount></Discount>
      <Category></Category>
      <Gallery></Gallery>
    </div>
  );
};

export default Home;
