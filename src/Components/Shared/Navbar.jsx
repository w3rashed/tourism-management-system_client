import { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AutProvider";
import { toast } from "react-toastify";
import { Zoom } from "react-awesome-reveal";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [theme, setTheme] = useState("light");
  const navigate = useNavigate();

  // theme change

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const toggleTheme = (e) => {
    if (e.target.checked) {
      localStorage.setItem("theme", "luxury");
      setTheme("luxury");
      document.querySelector("html").setAttribute("data-theme", "luxury");
    } else {
      localStorage.setItem("theme", "light");
      setTheme("light");
      document.querySelector("html").setAttribute("data-theme", "light");
    }
  };
  console.log(theme);

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
              color: isActive ? "#f7931e" : "",
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
              color: isActive ? "#f7931e" : "",
              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
          to="/all_tourists_spot"
        >
          All Tourists Spots
        </NavLink>
      </li>
      <li>
        <NavLink
          style={({ isActive, isTransitioning }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              backgroundColor: isActive ? "transparent" : "",
              // border: isActive ? "1px solid #23BE0A" : "",
              color: isActive ? "#f7931e" : "",
              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
          to="/add_tourists_spot"
        >
          Add Tourists Spots
        </NavLink>
      </li>
      <li>
        <NavLink
          style={({ isActive, isTransitioning }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              backgroundColor: isActive ? "transparent" : "",
              // border: isActive ? "1px solid #23BE0A" : "",
              color: isActive ? "#f7931e" : "",
              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
          to="/my_list"
        >
          My List
        </NavLink>
      </li>
      <li>
        <NavLink
          style={({ isActive, isTransitioning }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              backgroundColor: isActive ? "transparent" : "",
              // border: isActive ? "1px solid #23BE0A" : "",
              color: isActive ? "#f7931e" : "",
              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
          to="/add_cetegory"
        >
          Add Category
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="my-6 ">
      <div className="flex   justify-evenly md:justify-evenly items-center  bg-base-100 ">
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
          <Link to="/">
            <button className="font-bold text-xl">
              Discover<span className="text-[#f7931e]">Haven</span>
            </button>
          </Link>
        </div>
        <div className=" hidden lg:flex ">
          <ul className="menu menu-horizontal px-1">
            <Zoom className="flex">{links}</Zoom>
          </ul>
        </div>
        <div className="flex ">
          <div className="">
            {/* user profile */}
            {user && (
              <div
                tabIndex={0}
                role="button"
                className=" w-12 h-12 rounded-full dropdown dropdown-hover "
              >
                {/* dropdown user */}
                <div className=" rounded-full ">
                  <div className=" rounded-full ">
                    <img
                      className="rounded-full w-12 h-12"
                      alt="Tailwind CSS Navbar component "
                      src={user.photoURL}
                    />
                  </div>

                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[500] menu p-2 shadow bg-base-100 rounded-box w-52 "
                  >
                    <li>
                      <a>{user.displayName}</a>
                    </li>
                    <li>
                      <button onClick={handleLogOut} className="btn">
                        Sign Out
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
          <div>
            {!user && (
              // <button onClick={handleLogOut} className="btn">
              //   Sign Out
              // </button>
              <div className="">
                <Link
                  to="/login"
                  state={{ from: location?.state?.from }}
                  replace
                  className="btn ml-2 bg-[#f7931e] text-white hover:text-[#f7931e] hover:bg-transparent hover:border-[#f7931e] duration-1000"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  state={{ from: location?.state?.from }}
                  replace
                  className="btn ml-2 bg-[#f7931e] text-white hover:text-[#f7931e] hover:bg-transparent hover:border-[#f7931e] duration-1000"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
          {/* theme controler */}
          <div>
            <label className="swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input
                onChange={toggleTheme}
                type="checkbox"
                checked={theme === "luxury"}
                className="theme-controller"
              />

              {/* sun icon */}
              <svg
                className="swap-off fill-current w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-on fill-current w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
