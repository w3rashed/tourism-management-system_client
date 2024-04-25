import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <div className="text-center">
        <h2>log in</h2>
      </div>
      <div className="text-center">
        <form onSubmit={handleLogin} className="">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="flex items-center justify-end">
            <div className="form-control w-full relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <p
              onClick={() => setShowPassword(!showPassword)}
              className="absolute  hover:cursor-pointer mr-3"
            >
              {showPassword ? (
                <FaRegEye></FaRegEye>
              ) : (
                <FaRegEyeSlash></FaRegEyeSlash>
              )}
            </p>
          </div>
          <p className="text-[#cf2e2e]">{error}</p>

          <div className="form-control mt-6">
            <button
              className="py-3 rounded-lg bg-[#ff5a5f] text-white hover:bg-transparent hover:text-[#ff5a5f]
           hover:border-2 hover:border-[#ff5a5f] duration-300"
            >
              Login
            </button>
          </div>
          <div>
            <p className="text-center mt-4">
              Dont you have an account?{" "}
              <Link
                to="/register"
                // state={{ from: location.state.from }}
                replace
                className="text-[#cf2e2e] font-semibold hover:border-b-2 border-[#ff5a5f] duration-100"
              >
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
