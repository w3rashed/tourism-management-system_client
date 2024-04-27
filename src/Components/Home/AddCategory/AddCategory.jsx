import Swal from "sweetalert2";

const AddCategory = () => {
  const handleAddCategory = (e) => {
    e.preventDefault();
    const form = e.target;
    const spot_name = form.spot_name.value;
    const country_name = form.country_name.value;
    const photo_url = form.photo_url.value;

    const categorys = {
      spot_name,
      country_name,
      photo_url,
    };
    console.log(categorys);

    fetch("http://localhost:5000/countries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(categorys),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "form client site");
        if (data.insertedId) {
          Swal.fire({
            title: "success!",
            text: "New Category added successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div>
      <form onSubmit={handleAddCategory}>
        <div className=" md:w-[70%] lg:w-[50%]  mx-auto px-5">
          <div className="">
            <label className="form-control  ">
              <div className="label">
                <span className="label-text ">Tourists Spot Name</span>
              </div>
              <input
                type="text"
                name="spot_name"
                placeholder="Enter tourists spot name"
                className="input input-bordered w-full "
              />
            </label>
            <label className="form-control w-full  ">
              <div className="label">
                <span className="label-text">Country Name</span>
              </div>

              <select
                name="country_name"
                className="input input-bordered w-full  "
              >
                <option value="Bangladesh">Bangladesh</option>
                <option value="Thailand">Thailand</option>
                <option value="Indonesia">Indonesia</option>
                <option value="Malaysia">Malaysia</option>
                <option value="Vietnam">Vietnam</option>
                <option value="Cambodia">Cambodia</option>
              </select>
            </label>
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
          </div>
          <input
            className="btn bg-[#D2B48C] text-[#331A15] w-full mt-4"
            type="submit"
            value="Add Category"
          />
        </div>
      </form>
    </div>
  );
};

export default AddCategory;
