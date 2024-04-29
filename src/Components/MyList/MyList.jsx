import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AutProvider";

import { FaEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const MyList = () => {
  const { user } = useContext(AuthContext) || {};
  const [lodedData, setLodedData] = useState([]);

  console.log(user);
  useEffect(() => {
    fetch(`https://discover-haven-server.vercel.app/user/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setLodedData(data);
      });
  }, [user]);
  console.log(lodedData);

  //   delete a card
  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://discover-haven-server.vercel.app/destinations/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data, "form client site");
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your collections has been deleted.",
                icon: "success",
              });
              const remaining = lodedData.filter((coff) => coff._id !== _id);
              setLodedData(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="px-5 container mx-auto">
      <Helmet>
        <title>My_list-Discover Haven</title>
      </Helmet>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Sopts Name</th>
              <th>Country</th>
              <th> Avarege Cost</th>
              <th> Action</th>
            </tr>
          </thead>
          <tbody>
            {lodedData.map((data, idx) => (
              <tr key={data._id} className="hover font-medium">
                <th>{idx + 1}</th>
                <td>{data.spot_name}</td>
                <td>{data.country_name}</td>
                <td>$ {data.average_cost}</td>
                <td className="flex text-xl gap-4">
                  <Link to={`/update/${data._id}`}>
                    <button>
                      <FaEdit></FaEdit>
                    </button>
                  </Link>
                  <button onClick={() => handleDelete(data._id)}>
                    <MdOutlineDelete className="text-2xl"></MdOutlineDelete>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyList;
