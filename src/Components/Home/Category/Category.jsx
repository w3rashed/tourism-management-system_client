import { useEffect, useState } from "react";
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
    <div className="px-5">
      <div className="grid grid-cols-3 gap-6">
        {data.map((item) => (
          <Link key={item._id} to={`/all_tourists_spot/${item.country_name}`}>
            <div
              className="hero rounded-lg  "
              style={{
                backgroundImage: `url(${item.photo_url})`,
              }}
            >
              <div className="hero-overlay bg-opacity-60 rounded-lg"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                  <h1 className="mb-5 text-5xl font-bold">
                    {item.country_name}
                  </h1>
                  <p className="mb-5">{item.spot_name}.</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;
