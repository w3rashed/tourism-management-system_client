import { useEffect, useState } from "react";
import { Zoom } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const Category = () => {
  const [data, setDate] = useState([]);
  useEffect(() => {
    fetch("https://discover-haven-server.vercel.app/countries")
      .then((res) => res.json())
      .then((data) => {
        setDate(data.slice(0, 6));
      });
  }, []);
  console.log(data);
  return (
    <div className="px-5 container mx-auto">
      <div className="text-center lg:w-[70%] mx-auto">
        <Zoom duration="1000" delay="20">
          <h2 className="text-5xl font-bold">Our Region</h2>
        </Zoom>
        <Zoom duration="1000" delay="40">
          <p className="mb-10 mt-4 opacity-80">
            Your ultimate holiday destination. Dive into relaxation or embark on
            thrilling adventures. With us, every moment is a treasure waiting to
            be explored. Unwind, discover, and make memories that last a
            lifetime. Enjoy Your Holidays with Discover Haven!
          </p>
        </Zoom>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item, idx) => (
          <Link key={item._id} to={`/all_tourists_spot/${item.country_name}`}>
            <div
              className="hero rounded-lg  "
              style={{
                backgroundImage: `url(${item.photo_url})`,
              }}
            >
              <div className="hero-overlay bg-opacity-60 rounded-lg"></div>
              <div className="hero-content text-center text-white">
                <Zoom duration="1000" delay={`${idx + 20}`}>
                  <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">
                      {item.country_name}
                    </h1>
                    <p className="mb-5">{item.spot_name}.</p>
                  </div>
                </Zoom>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;
