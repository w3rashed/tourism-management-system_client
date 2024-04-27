import { Helmet } from "react-helmet";
import Slider from "../Slider/Slider";
import DestinationsLists from "./DestinationsLists";
import Discount from "../Discount/Discount";
import Category from "../Category/Category";

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
      {/* <Discount></Discount> */}
      <Category></Category>
    </div>
  );
};

export default Home;
