import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { useEffect, useState } from "react";
import SlideCard from "./SlideCard";
// import SlideCard from "./SlideCard";

const Slider = () => {
  const [slides, setSlides] = useState();
  useEffect(() => {
    fetch("https://discover-haven-server.vercel.app/destinations")
      .then((res) => res.json())
      .then((data) => {
        setSlides(data);
      });
  }, []);
  return (
    <div className=" ">
      <div className="">
        <Swiper
          // install Swiper modules
          modules={[Autoplay, Navigation, Pagination, A11y]}
          slidesPerView={1}
          navigation={true}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          style={{ zIndex: 0 }}
        >
          <div>
            {slides?.map((slide) => (
              <div key={slide._id}>
                <SwiperSlide>
                  <SlideCard slide={slide}></SlideCard>
                </SwiperSlide>
              </div>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
