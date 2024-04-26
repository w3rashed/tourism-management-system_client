import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AutProvider";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut();
    console.log("log out succed");
    toast.success("Successfully loged out!", {
      position: "top-center",
    });
    navigate(location?.state ? location.state : "/");
  };

  const links = (
    <>
      <li>
        <NavLink
          style={({ isActive, isTransitioning }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              backgroundColor: isActive ? "transparent" : "",
              // border: isActive ? "1px solid #23BE0A" : "",
              color: isActive ? "#ff5a5f" : "black",
              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          style={({ isActive, isTransitioning }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              backgroundColor: isActive ? "transparent" : "",
              // border: isActive ? "1px solid #23BE0A" : "",
              color: isActive ? "#ff5a5f" : "black",
              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
          to="/tourists-spot"
        >
          All Tourists Spot
        </NavLink>
      </li>
      <li>
        <NavLink
          style={({ isActive, isTransitioning }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              backgroundColor: isActive ? "transparent" : "",
              // border: isActive ? "1px solid #23BE0A" : "",
              color: isActive ? "#ff5a5f" : "black",
              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
          to="/add-tourists-spot"
        >
          Add Tourists Spot
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="my-6">
      <div className="  flex lg:justify-around  justify-evenly md:justify-evenly items-center  bg-base-100 ">
        <div className=" flex items-center">
          <div className="dropdown z-100 relative">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <a className="font-bold text-xl">
            Discover<span className="text-[#ff5a5f]">Haven</span>
          </a>
        </div>
        <div className=" hidden lg:flex ">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        <div className="flex">
          <div className="">
            {/* user profile */}
            {user && (
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar dropdown dropdown-hover mr-2"
              >
                {/* dropdown user */}
                <div className=" rounded-full">
                  <Link to="/update">
                    <div className=" rounded-full ">
                      <img
                        alt="Tailwind CSS Navbar component "
                        src={user.photoURL}
                      />
                    </div>
                  </Link>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 "
                  >
                    <li>
                      <a>{user.displayName}</a>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
          <div>
            {user ? (
              <button onClick={handleLogOut} className="btn">
                Sign Out
              </button>
            ) : (
              <Link
                to="/login"
                state={{ from: location?.state?.from }}
                replace
                className="btn"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
