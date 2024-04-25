const AddTouristsSpot = () => {
  return (
    <div className="px-5">
      <div className="text-center">
        <h1>AddTouristsSpot</h1>
      </div>
      <form>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          <div className="">
            <label className="form-control  ">
              <div className="label">
                <span className="label-text ">Name</span>
              </div>
              <input
                type="text"
                name="name"
                placeholder="Enter tourists spot name"
                className="input input-bordered w-full "
              />
            </label>
            <label className="form-control w-full  ">
              <div className="label">
                <span className="label-text">Country Name</span>
              </div>
              <input
                type="text"
                name="suplier"
                placeholder="Enter country name"
                className="input input-bordered w-full  "
              />
            </label>
            <label className="form-control w-full  ">
              <div className="label">
                <span className="label-text">Location</span>
              </div>
              <input
                type="text"
                name="category"
                placeholder="Enter spot location"
                className="input input-bordered w-full  "
              />
            </label>
            <label className="form-control w-full  ">
              <div className="label">
                <span className="label-text">Short Description</span>
              </div>
              <input
                type="text"
                name="quantity"
                placeholder="Enter a shotr description"
                className="input input-bordered w-full  "
              />
            </label>
          </div>

          <div>
            <label className="form-control w-full  ">
              <div className="label">
                <span className="label-text">Average Cost</span>
              </div>
              <input
                type="text"
                name="taste"
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
                name="details"
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
                name="details"
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
                name="details"
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
            name="photo"
            placeholder="Enter photo URL"
            className="input input-bordered w-full  "
          />
        </label>
        <input
          className="btn bg-[#D2B48C] text-[#331A15] w-full mt-4"
          type="submit"
          value="Add coffe"
        />
      </form>
    </div>
  );
};

export default AddTouristsSpot;
