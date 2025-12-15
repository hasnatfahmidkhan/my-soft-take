// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/effect-fade";

// import required modules
import { FreeMode, Navigation, Thumbs, EffectFade } from "swiper/modules";
import banner1 from "../../assets/frame-1.jpg";
import banner2 from "../../assets/frame2.jpg";
const slides = [
  {
    id: 1,
    bgImage: banner1,
  },
  {
    id: 2,
    bgImage: banner2,
  },
  {
    id: 3,
    bgImage: banner1,
  },
  {
    id: 4,
    bgImage: banner2,
  },
];

const Home1 = () => {
  return (
    <div className="w-full h-screen">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        navigation={true}
        // thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs, EffectFade]}
        effect={"fade"}
        className="w-full h-full"
        loop={true}
      >
        {slides.map((slide) => (
          <SwiperSlide
            key={slide.id}
            className="w-full h-full flex items-center justify-center"
          >
            <img
              src={slide.bgImage}
              alt="banner"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/10"></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Home1;
