import "./LoadingAnimation.css";
import loadingText from "../../assets/images/LOADING.png";
import bus from "../../assets/images/bus.png";
import line1 from "../../assets/images/Line 1.png";
import line6 from "../../assets/images/Line 6.png";
import line7 from "../../assets/images/Line 7.png";
import line8 from "../../assets/images/Line 8.png";

const LoadingAnimation = () => {
  return (
    <div className="flex items-center justify-center gap-10 min-h-[calc(100vh-100px)]">
      <div className="space-y-8 p-8">
        {/* LOADING Text */}
        <div className="flex items-end gap-3">
          <div className="space-y-2 relative h-10">
            <img src={line6} alt="" className="mini-line-animate delay-1" />
            <img src={line7} alt="" className="mini-line-animate delay-2" />
            <img src={line8} alt="" className="mini-line-animate delay-3" />
          </div>
          <img src={loadingText} alt="Loading" className="loading-text-pulse" />
        </div>

        {/* Road/Path with Lines */}
        <div className="">
          {/* Bus Animation */}
          <div className="flex flex-col">
            <img src={bus} alt="Bus" className="bus-bounce-run" />
            <img src={line1} alt="" className="road-line" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingAnimation;
