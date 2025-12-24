import { useEffect, useState } from "react";
import banner_1 from "../../assets/images/BANNER-1.jpg";
import banner_2 from "../../assets/images/BANNER-2.jpg";
import banner_3 from "../../assets/images/BANNER-3.png";
import banner_4 from "../../assets/images/BANNER-4.jpg";
import banner_5 from "../../assets/images/BANNER-5.png";
import banner_6 from "../../assets/images/BANNER-6.png";

const HeroSlider = () => {
  const slides = [banner_2, banner_4, banner_5, banner_6];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative w-full h-[30vh] border border-lime-300 sm:h-[35vh] lg:h-[65vh] overflow-hidden">
      {slides.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            current === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={img}
            alt={`Banner ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </section>
  );
};

export default HeroSlider;
