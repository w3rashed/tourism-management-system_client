import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AutProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const AddTouristsSpot = () => {
  const { user } = useContext(AuthContext);
  const [lodedData, setLodedData] = useState();
  const [spotdata, setSpotdata] = useState();
  console.log(spotdata);

  useEffect(() => {
    fetch("http://localhost:5000/countries")
      .then((res) => res.json())
      .then((data) => setLodedData(data));
  }, []);
  console.log(lodedData);

  const handleSelectCountry = (e) => {
    e.preventDefault();
    const country = e.target.value;
    console.log(country);
    const filter = lodedData.find((data) => country == data.country_name);
    setSpotdata(filter.places);
  };

  const handleAddTouristsSpot = (e) => {
    e.preventDefault();
    const form = e.target;
    const user_name = form.user_name.value;
    const user_email = form.user_email.value;
    const spot_name = form.spot_name.value;
    const country_name = form.country_name.value;
    const spot_location = form.spot_location.value;
    const description = form.description.value;
    const average_cost = form.average_cost.value;
    const seasonality = form.seasonality.value;
    const travel_time = form.travel_time.value;
    const visitors_per_year = form.visitors_per_year.value;
    const photo_url = form.photo_url.value;

    const spots = {
      user_name,
      user_email,
      spot_name,
      country_name,
      spot_location,
      description,
      average_cost,
      seasonality,
      travel_time,
      visitors_per_year,
      photo_url,
    };
    console.log(spots);

    fetch("http://localhost:5000/destinations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(spots),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "form client site");
        if (data.insertedId) {
          Swal.fire({
            title: "success!",
            text: "New Spot added successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  console.log(user, "hiiiiiiiiiiiiiiiii");
  return (
    <div className="px-5">
      <Helmet>
        <title>AddTouristsSpot-Discover Haven</title>
      </Helmet>
      <div className="text-center">
        <h1>AddTouristsSpot</h1>
      </div>
      <form onSubmit={handleAddTouristsSpot}>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          <div className="">
            <label className="form-control  ">
              <div className="label">
                <span className="label-text ">User Name</span>
              </div>
              <input
                disabled
                type="text"
                name="user_name"
                defaultValue={user?.displayName}
                placeholder="Enter user name"
                className="input input-bordered w-full "
              />
            </label>
            <label className="form-control  ">
              <div className="label">
                <span className="label-text ">User Email</span>
              </div>

              <input
                disabled
                type="text"
                name="user_email"
                defaultValue={user?.email}
                placeholder="Enter user email"
                className="input input-bordered w-full "
              />
            </label>

            <label className="form-control w-full  ">
              <div className="label">
                <span className="label-text">Country Name</span>
              </div>

              <select
                onChange={handleSelectCountry}
                name="country_name"
                className="input input-bordered w-full  "
              >
                {lodedData?.map((data) => (
                  <option key={data._id} value={data.country_name}>
                    {data.country_name}
                  </option>
                ))}
              </select>
            </label>
            <label className="form-control w-full  ">
              <div className="label">
                <span className="label-text">Tourists Spot Name</span>
              </div>

              <select
                name="spot_name"
                className="input input-bordered w-full  "
              >
                {spotdata?.map((data, idx) => (
                  <option key={idx} value={data}>
                    {data}
                  </option>
                ))}
              </select>
            </label>

            <label className="form-control w-full  ">
              <div className="label">
                <span className="label-text">Spot Location</span>
              </div>
              <input
                type="text"
                name="spot_location"
                placeholder="Enter spot location"
                className="input input-bordered w-full  "
              />
            </label>
          </div>

          <div>
            <label className="form-control w-full  ">
              <div className="label">
                <span className="label-text">Short Description</span>
              </div>
              <input
                type="text"
                name="description"
                placeholder="Enter a shotr description"
                className="input input-bordered w-full  "
              />
            </label>
            <label className="form-control w-full  ">
              <div className="label">
                <span className="label-text">Average Cost</span>
              </div>
              <input
                type="text"
                name="average_cost"
                placeholder="Enter average cost"
                className="input input-bordered w-full  "
              />
            </label>
            <label className="form-control w-full  ">
              <div className="label">
                <span className="label-text">Seasonality</span>
              </div>
              <input
                type="text"
                name="seasonality"
                placeholder="summer/ winter...."
                className="input input-bordered w-full  "
              />
            </label>
            <label className="form-control w-full  ">
              <div className="label">
                <span className="label-text">Travel Time</span>
              </div>
              <input
                type="number"
                name="travel_time"
                placeholder="like- 7 days
                "
                className="input input-bordered w-full  "
              />
            </label>
            <label className="form-control w-full  ">
              <div className="label">
                <span className="label-text">Tota Visitors Per Year</span>
              </div>
              <input
                type="number"
                name="visitors_per_year"
                placeholder="like- 10000
                "
                className="input input-bordered w-full  "
              />
            </label>
          </div>
        </div>
        <label className="form-control w-full  ">
          <div className="label">
            <span className="label-text ">Photo</span>
          </div>
          <input
            type="text"
            name="photo_url"
            placeholder="Enter photo URL"
            className="input input-bordered w-full  "
          />
        </label>
        <input
          className="btn bg-[#D2B48C] text-[#331A15] w-full mt-4"
          type="submit"
          value="Add Spot"
        />
      </form>
    </div>
  );
};

export default AddTouristsSpot;
