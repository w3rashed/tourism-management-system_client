import { Helmet } from "react-helmet";
import Slider from "./Slider/Slider";
import Category from "./Category/Category";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home-Discover Haven</title>
      </Helmet>
      <Slider></Slider>
      <div className="my-5">
        <Category></Category>
      </div>
    </div>
  );
};

export default Home;
