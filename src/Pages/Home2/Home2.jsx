import React, { useState, useEffect } from "react";
import bat from "../../assets/images/bat.png";
import hulk from "../../assets/images/hulk.png";
import iron from "../../assets/images/iron.png";
import spider from "../../assets/images/spider.png";
import adam from "../../assets/images/adam.png";
import captain from "../../assets/images/captain.png";
import Navbar from "./Navbar/Navbar";

const Home2 = () => {
  const items = [
    {
      img: bat,
      name: "Batman",
      part: "“You wanna get nuts? Come on! Let’s get nuts!”",
      desc: "“We are  here to fight for truth, and justice!   We find the solution  at our own  way.”",
    },
    {
      img: hulk,
      name: "Hulk",
      part: "“Hulk is not sorry, Hulk is Hulk.” “I’m always angry.”",
      desc: "“We are  here to fight for truth, and justice!   We find the solution  at our own  way.”",
    },
    {
      img: iron,
      name: "Iron Man",
      part: "“Give me a scotch. I’m starving.”",
      desc: "“We are  here to fight for truth, and justice! We find the solution  at our own  way.” ",
    },
    {
      img: spider,
      name: "Spider-Man",
      part: "Friendly neighborhood hero.",
      desc: "“We are  here to fight for truth, and justice! We find the solution  at our own  way.”",
    },
    {
      img: adam,
      name: "Adam",
      part: "“ Always remember, with great power comes great responsibility.”",
      desc: "“We are  here to fight for truth, and justice!   We find the solution  at our own  way.”",
    },
    {
      img: captain,
      name: "Captain America",
      part: "The super soldier.",
      desc: "“We are  here to fight for truth, and justice! We find the solution  at our own  way.”",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const total = items.length;

  const circleSize = 600;
  const orbitRadius = circleSize;
  const imageSize = 140;

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % total);
        setIsAnimating(false);
      }, 100);
    }, 3000);
    return () => clearInterval(timer);
  }, [total]);

  // Get 3 visible items: prev, active, next
  const getVisibleItems = () => {
    const prevIndex = (activeIndex - 1 + total) % total;
    const nextIndex = (activeIndex + 1) % total;

    return [
      { ...items[prevIndex], index: prevIndex, position: "prev" },
      { ...items[activeIndex], index: activeIndex, position: "active" },
      { ...items[nextIndex], index: nextIndex, position: "next" },
    ];
  };

  const visibleItems = getVisibleItems();

  const positions = {
    prev: 180, // Bottom (like 9 o'clock)
    active: 225, // Middle (like 7:30)
    next: 270, // Top (like 6 o'clock)
  };

  return (
    <div>
      <Navbar />
      <div className="relative w-full h-[calc(100vh-100px)] overflow-hidden bg-white">
        <div
          className="absolute right-0 bottom-0 bg-gray-300 rounded-tl-full z-0"
          style={{
            width: circleSize,
            height: circleSize,
          }}
        />
        <div className="absolute left-8 md:left-24 top-1/2 -translate-y-1/2 z-20 max-w-xl h-2/3">
          <div
            key={activeIndex}
            className="flex flex-col justify-evenly h-full"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              Our Super Heroes
            </h2>

            <div className="flex flex-col gap-5">
              <p className="text-black font-semibold text-lg md:text-2xl mb-4">
                {items[activeIndex].part}
              </p>

              <p className="text-black font-semibold text-lg md:text-2xl mb-6">
                {items[activeIndex].desc}
              </p>
            </div>
          </div>
        </div>

        <div
          className="absolute z-10"
          style={{
            width: circleSize,
            height: circleSize,
            right: 0,
            bottom: 0,
          }}
        >
          {visibleItems.map((item) => {
            const angle = positions[item.position];
            const rad = (angle * Math.PI) / 180;

            // Center point at bottom-right corner
            const centerX = circleSize;
            const centerY = circleSize;

            // Position on edge of circle
            const x = centerX + orbitRadius * Math.cos(rad);
            const y = centerY + orbitRadius * Math.sin(rad);

            const isActive = item.position === "active";

            // Size based on position
            const size = isActive ? imageSize * 1.5 : imageSize;
            const zIndex = isActive ? 30 : 10;
            const opacity = isActive ? 1 : 0.6;

            return (
              <div
                key={item.index}
                onClick={() => !isAnimating && setActiveIndex(item.index)}
                className="absolute cursor-pointer carousel-item"
                style={{
                  width: size,
                  height: size,
                  left: x - size / 2,
                  top: y - size / 2,
                  zIndex: zIndex,
                  opacity: opacity,
                  transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >
                <div className={`w-full h-full rounded-full overflow-hidden `}>
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Home2;
