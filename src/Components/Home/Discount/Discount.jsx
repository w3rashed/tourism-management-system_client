import { Zoom } from "react-awesome-reveal";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Discount = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 my-20 px-5 items-center">
      <div className="basis-[70%]">
        <div className="relative">
          <div className="absolute flex w-full justify-end mt-10 pr-10">
            <Zoom duration="1000">
              <div>
                <p className="text-[#f7931e] text-[80px] font-Comforter_Brush ">
                  <span>30%</span>
                </p>
                <h4 className="text-5xl font-bold">Discount</h4>
              </div>
            </Zoom>
          </div>
          <img
            src="https://i.ibb.co/s9MrTvY/Untitled-1.png"
            alt=""
            className="rounded-xl "
          />
        </div>
      </div>
      <div className="basis-[50%]">
        <Zoom duration="1000" delay="30">
          <h5 className="text-3xl text-[#f7931e] font-Comforter_Brush">
            Get to know us
          </h5>
        </Zoom>
        <Zoom duration="1000">
          <h2 className="text-5xl font-bold mt-4 mb-10">
            Plan Your Trip with Trevily
          </h2>
        </Zoom>
        <Zoom duration="1000" delay="40">
          <p className="opacity-80">
            There are many variations of passages of available but the majority
            have suffered alteration in some form, by injected hum randomised
            words which don't look even slightly.
          </p>
        </Zoom>
        <ul className="font-bold text-lg grid gap-4 my-8">
          <Zoom duration="1000" delay="50">
            <li className="flex items-center gap-3">
              {" "}
              <FaCheckCircle className="text-[#f7931e]"></FaCheckCircle> Invest
              in your simply neighborhood
            </li>
          </Zoom>
          <Zoom duration="1000" delay="60">
            <li className="flex items-center gap-3">
              <FaCheckCircle className="text-[#f7931e]"></FaCheckCircle>Support
              people in free text extreme
            </li>
          </Zoom>
          <Zoom duration="1000" delay="70">
            <li className="flex items-center gap-3">
              {" "}
              <FaCheckCircle className="text-[#f7931e]"></FaCheckCircle>Largest
              global industrial business
            </li>
          </Zoom>
        </ul>
        <Zoom duration="1000" delay="80">
          <Link to="/all_tourists_spot">
            <button className=" bg-[#f7931e] text-white px-6 py-3 rounded-xl">
              BOOK WITH US NOW
            </button>
          </Link>
        </Zoom>
      </div>
    </div>
  );
};

export default Discount;
