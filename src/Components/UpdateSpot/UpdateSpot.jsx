import { useContext } from "react";
import { AuthContext } from "../../Provider/AutProvider";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateSpot = () => {
  const { user } = useContext(AuthContext);
  const spot = useLoaderData();
  const {
    spot_name,
    country_name,
    spot_location,
    description,
    average_cost,
    seasonality,
    travel_time,
    visitors_per_year,
    photo_url,
    _id,
  } = spot;
  console.log(spot);
  const handleUpdateSpot = (e) => {
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

    const updateSpotData = {
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
    console.log(updateSpotData);
    // send data to the server
    fetch(`https://discover-haven-server.vercel.app/destinations/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateSpotData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "form client site");
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "success!",
            text: "Collections Updated successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div className="px-5">
      <div className="text-center">
        <h1>Update Tourist Spot</h1>
      </div>
      <form onSubmit={handleUpdateSpot}>
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
                name="country_name"
                defaultChecked={country_name}
                className="input input-bordered w-full  "
              >
                <option defaultValue={country_name}>{country_name}</option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="Thailand">Thailand</option>
                <option value="Indonesia">Indonesia</option>
                <option value="Malaysia">Malaysia</option>
                <option value="Vietnam">Vietnam</option>
                <option value="Cambodia">Cambodia</option>
              </select>
            </label>
            <label className="form-control  ">
              <div className="label">
                <span className="label-text ">Tourists Spot Name</span>
              </div>
              <input
                type="text"
                name="spot_name"
                defaultValue={spot_name}
                placeholder="Enter tourists spot name"
                className="input input-bordered w-full "
              />
            </label>

            <label className="form-control w-full  ">
              <div className="label">
                <span className="label-text">Spot Location</span>
              </div>
              <input
                type="text"
                name="spot_location"
                defaultValue={spot_location}
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
                defaultValue={description}
                placeholder="Enter a shotr description"
                className="input input-bordered w-full  "
              />
            </label>
            <label className="form-control w-full  ">
              <div className="label">
                <span className="label-text">Average Cost</span>
              </div>
              <input
                type="number"
                name="average_cost"
                defaultValue={average_cost}
                placeholder="Enter average cost"
                className="input input-bordered w-full  "
              />
            </label>

            <label className="form-control w-full  ">
              <div className="label">
                <span className="label-text">Seasonality</span>
              </div>

              <select
                name="seasonality"
                defaultChecked={seasonality}
                className="input input-bordered w-full  "
              >
                <option defaultValue={seasonality}>{seasonality}</option>
                <option value="Spring">Spring</option>
                <option value="Summer">Summer</option>
                <option value="Fall">Fall</option>
                <option value="Winter">Winter</option>
              </select>
            </label>

            <label className="form-control w-full  ">
              <div className="label">
                <span className="label-text">Travel Time</span>
              </div>
              <input
                type="number"
                name="travel_time"
                defaultValue={travel_time}
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
                defaultValue={visitors_per_year}
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
            defaultValue={photo_url}
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

export default UpdateSpot;
