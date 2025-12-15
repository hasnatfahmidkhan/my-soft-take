// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/effect-fade";

// import required modules
import {
  FreeMode,
  Navigation,
  Thumbs,
  EffectFade,
  Autoplay,
} from "swiper/modules";
import banner1 from "../../assets/frame-1.jpg";
import banner2 from "../../assets/frame2.jpg";
import banner3 from "../../assets/frame3.jpg";
import banner4 from "../../assets/frame4.jpg";
import banner5 from "../../assets/frame5.jpg";
import { useState } from "react";
import { Facebook, Github, Linkedin } from "lucide-react";
import leftArrow from "../../assets/leftArrow.svg";
import rightArrow from "../../assets/rightArrow.svg";
const slides = [
  {
    id: 1,
    bgImage: banner1,
    titleLine1: "Take Your Snow Days",
    titleLine2: "to the Next Level",
  },
  {
    id: 2,
    bgImage: banner2,
    titleLine1: "Discover New Peaks",
    titleLine2: "With Every Ride",
  },
  {
    id: 3,
    bgImage: banner3,
    titleLine1: "Feel the Winter Rush",
    titleLine2: "In Every Turn",
  },
  {
    id: 4,
    bgImage: banner4,
    titleLine1: "Own the Mountain",
    titleLine2: "Like Never Before",
  },
  {
    id: 5,
    bgImage: banner5,
    titleLine1: "Chase Fresh Powder",
    titleLine2: "All Season Long",
  },
];

const Home1 = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const currentSlide = slides[activeIndex] || slides[0];
  const [mainSwiper, setMainSwiper] = useState(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="relative w-full h-screen overflow-hidden text-white">
      <Swiper
        onSwiper={setMainSwiper}
        thumbs={{ swiper: thumbsSwiper }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        modules={[Autoplay, Thumbs, EffectFade]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
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
            <div className="absolute inset-0 bg-black/20"></div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Left Content */}
      <h1 className="text-4xl md:text-5xl absolute top-0 left-1/10 translate-y-full lg:translate-y-[150%] z-20 leading-tight">
        {currentSlide.titleLine1}
        <br />
        {currentSlide.titleLine2}
      </h1>
      <div className="absolute left-1/10 -top-16 lg:top-10 z-20 max-w-xl flex flex-col justify-evenly h-full">
        <button className="w-fit mt-8 px-8 py-3 border-2 border-blue-500 rounded-full text-sm font-medium cursor-pointer hover:bg-white/30">
          GET STARTED
        </button>
      </div>
      {/* social  */}
      <div className="absolute bottom-14 left-1/10 z-20 flex gap-5">
        <a className="bg-white/20 p-3 rounded-full hover:bg-white/10 cursor-pointer">
          <Facebook className="w-5 h-5 opacity-80 hover:opacity-100 cursor-pointer" />
        </a>
        <a className="bg-white/20 p-3 rounded-full hover:bg-white/10 cursor-pointer">
          <Github className="w-5 h-5 opacity-80 hover:opacity-100 cursor-pointer" />
        </a>
        <a className="bg-white/20 p-3 rounded-full hover:bg-white/10 cursor-pointer">
          <Linkedin className="w-5 h-5 opacity-80 hover:opacity-100 cursor-pointer" />
        </a>
      </div>

      {/* Right content  */}
      <div className="absolute right-1/10 bottom-0 -translate-y-[80%] md:-translate-y-2/3 lg:-translate-y-1/3 z-20">
        <div className="w-80 md:w-100 2xl:w-180 mt-4">
          <Swiper
            onSwiper={setThumbsSwiper}
            modules={[FreeMode, Thumbs]}
            slidesPerView={2}
            spaceBetween={16}
            freeMode
            watchSlidesProgress
            loop
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <img
                  src={slide.bgImage}
                  alt=""
                  className="w-full h-full rounded-md"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex items-center gap-5 mt-8">
          <button
            onClick={() => {
              mainSwiper?.slidePrev();
              thumbsSwiper?.slidePrev();
            }}
            className="border cursor-pointer active:translate-y-0.5 transition-all flex items-center justify-center w-12 h-12 rounded-full"
          >
            <img src={leftArrow} alt="" className="w-5" />
          </button>
          <button
            onClick={() => {
              mainSwiper?.slideNext();
              thumbsSwiper?.slideNext();
            }}
            className="border cursor-pointer active:translate-y-0.5 transition-all flex items-center justify-center w-12 h-12 rounded-full"
          >
            <img src={rightArrow} alt="" className="w-5" />
          </button>

          {/* progress  */}
          <div className="flex-1 flex items-center gap-3">
            <div className="w-full h-1 bg-white/60">
              <div
                className="h-full bg-yellow-500 transition-all"
                style={{
                  width: `${((activeIndex + 1) / slides.length) * 100}%`,
                }}
              ></div>
            </div>
            <span className="text-sm">
              {String(activeIndex + 1).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home1;
