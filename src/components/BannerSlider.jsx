import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../src/slider.css";

const BannerSlider = () => {

  return (
    <section className="max-w-7xl w-full mx-auto my-10 h-[500px] overflow-hidden border-2 border-black flex items-center justify-center">
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
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Keyboard, Pagination, Navigation, Autoplay]}
        className="h-full"
      >
        <SwiperSlide>
          <img
            src="https://i.ibb.co/WFRNY1Q/fitness-club.jpg"
            alt="Fitness Club"
            style={{ width: "100%", height: "auto" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/BfG7R3J/cycle-equipments.png"
            alt="Cycle Equipment"
            style={{ width: "100%", height: "auto" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/6Z6NzXR/fitness-equipment.jpg"
            alt="Fitness Equipment"
            style={{ width: "100%", height: "auto" }}
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default BannerSlider;