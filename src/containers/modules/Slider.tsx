"use client";
import { Swiper } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { clsx } from "@/helpers/clsx";
interface SliderProps {
  sliderClassName: string;
  spaceBetween?: number;
  breakpoints?: Record<
    number,
    {
      slidesPerView: number;
      spaceBetween: number;
    }
  >;
  children: React.ReactNode;
}
const Slider = (props: SliderProps) => {
  const {
    children,
    sliderClassName,
    spaceBetween = 30,
    breakpoints = {
      480: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1280: {
        slidesPerView: 4,
      },
    },
  } = props;
  return (
    <>
      <Swiper
        className={clsx("swiper", sliderClassName)}
        spaceBetween={spaceBetween}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        modules={[Pagination, Navigation]}
        breakpoints={breakpoints}
      >
        {children}
      </Swiper>
      {/* Custom Navigation Buttons */}
      <div className="custom-navigation flex -translate-y-12 z-10">
        <button
          className="custom-prev flex justify-center items-center
             border-2 border-darkGrayColor  py-1.5 px-2  mx-[100px] 
             xs:mx-[75px] lg:mx-[50px] rounded-sm cursor-pointer"
        >
          <FaAngleRight className="text-darkGrayColor text-[10px] font-bold" />
        </button>
        <button
          className="custom-next flex justify-center items-center
             border-2 border-darkGrayColor py-1.5 px-2 mx-[100px]
              xs:mx-[75px] lg:mx-[50px] rounded-sm cursor-pointer"
        >
          <FaAngleLeft className="text-darkGrayColor text-[10px] font-bold" />
        </button>
      </div>
    </>
  );
};
export default Slider;
