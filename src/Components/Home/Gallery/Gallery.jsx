import { Zoom } from "react-awesome-reveal";

const Gallery = () => {
  return (
    <div className="mt-20 px-5 ">
      <div>
        <div className="text-center w-[70%] mx-auto">
          <Zoom duration="1000" delay="80">
            <h2 className="text-5xl font-bold">Our Recent Snaps</h2>
          </Zoom>
          <Zoom duration="1000" delay="90">
            <p className="mt-4 mb-10 opacity-80">
              Experience the essence of our adventures through 'Our Recent
              Snaps.' Dive into a visual journey capturing breathtaking
              landscapes, heartwarming moments, and unforgettable experiences.
              From sun-kissed beaches to vibrant cityscapes, let our snapshots
              inspire your wanderlust and transport you to new horizons
            </p>
          </Zoom>
        </div>
        <div className="flex gap-4 flex-col lg:flex-row  ">
          <div className="grid gap-4 lg:basis-[33%]">
            <img
              className="w-full"
              src="https://i.ibb.co/723VMsb/image.png"
              alt=""
            />
            <img
              className="w-full"
              src="https://i.ibb.co/FmNDNnm/image.png"
              alt=""
            />
            <img
              className="w-full"
              src="https://i.ibb.co/vDvmzqL/image.png"
              alt=""
            />
          </div>
          <div className="grid gap-4 row-span-5 ">
            <img
              className="row-span-2 w-full"
              src="https://i.ibb.co/yh4pHQ5/image.png"
              alt=""
            />
            <img
              className="row-span-3 w-full md:h-[98%] lg:h-[98%]"
              src="https://i.ibb.co/PDxtZ9h/image.png"
              alt=""
            />
          </div>
          <div className="">
            <img
              className="w-full h-[65%] "
              src="https://i.ibb.co/4WSB0MQ/image.png"
              alt=""
            />
            <img
              className="w-full mt-4"
              src="https://i.ibb.co/QHLpC96/image.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
