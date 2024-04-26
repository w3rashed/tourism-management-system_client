import { Helmet } from "react-helmet";
import Slider from "./Slider/Slider";
import Category from "./Category/Category";
import DestinationsLists from "./DestinationsLists/DestinationsLists";

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
    </div>
  );
};

export default Home;
