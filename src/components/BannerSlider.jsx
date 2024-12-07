import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../src/slider.css";

const BannerSlider = () => {

  return (
    <section className="w-full mx-auto mb-10 overflow-hidden">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        modules={[Keyboard, Pagination, Navigation, Autoplay]}
        className="max-h-[500px] h-full overflow-hidden"
      >
        <SwiperSlide className="relative">
          <div className="w-full h-1/2 bg-gradient-to-b from-gray-900 to-transparent top-0 left-0 absolute"></div>
          <img
            src="https://i.ibb.co/WFRNY1Q/fitness-club.jpg"
            alt="Fitness Club"
            style={{ width: "100%", height: "auto", aspectRatio: "22/9", objectFit: "cover"}}
          />
        </SwiperSlide>
        <SwiperSlide className="relative">
          <div className="w-full h-1/2 bg-gradient-to-b from-gray-900 to-transparent top-0 left-0 absolute"></div>
          <img
            src="https://i.ibb.co/BfG7R3J/cycle-equipments.png"
            alt="Cycle Equipment"
            style={{ width: "100%", height: "auto", aspectRatio: "22/9", objectFit: "cover"}}
          />
        </SwiperSlide>
        <SwiperSlide className="relative">
          <div className="w-full h-1/2 bg-gradient-to-b from-gray-900 to-transparent top-0 left-0 absolute"></div>
          <img
            src="https://i.ibb.co/6Z6NzXR/fitness-equipment.jpg"
            alt="Fitness Equipment"
            style={{ width: "100%", height: "auto", aspectRatio: "22/9", objectFit: "cover"}}
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default BannerSlider;