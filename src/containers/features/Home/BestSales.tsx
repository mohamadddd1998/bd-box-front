"use client";
import ellipse5 from "@/assets/images/ellipse-5.png";
import ellipse6 from "@/assets/images/ellipse-6.png";
import box8 from "@/assets/images/box-8.png";
import box9 from "@/assets/images/box-9.png";
import { SwiperSlide } from "swiper/react";
import kado1 from "@/assets/images/kado-1.png";
import { PiHandbag } from "react-icons/pi";
import Slider from "@/containers/modules/Slider";
import SectionTitle from "@/components/SectionTitle";
import SectionSubTitle from "@/components/SectionSubTitle";

const BestSales = () => {
  return (
    <section id="best-sales" className="relative">
      <div className="container max-w-6xl  flex flex-col justify-center items-center gap-y-4 py-8">
        <div className="absolute left-0 top-0">
          <img src={ellipse5.src} />
        </div>
        <div className="absolute right-0 top-0 -z-10">
          <img src={ellipse6.src} />
        </div>
        <div className="absolute left-0 -top-8 blur-[1px] hidden md:block">
          <img src={box8.src} className="w-64" />
        </div>
        <div className="absolute right-0 -bottom-36 blur-[1px] hidden md:block -z-10">
          <img src={box9.src} className="w-48" />
        </div>
        <SectionTitle title="پرفروش ترین" subtitle="باکس ها" dir="ltr" />
        <SectionSubTitle text="  پرفروش‌ترین باکس های آماده موجود در سایت" />
        <Slider sliderClassName="box-swiper">
          {Array.from({ length: 5 }).map(() => (
            <SwiperSlide>
              <div
                className="relative flex flex-col justify-center items-center
               bg-white shadow-rounded rounded-4xl gap-4 p-4 group/items"
              >
                <div className="relative overflow-hidden">
                  <img src={kado1.src} className="w-56 rounded-lg" />
                  <span
                    className="absolute bg-secondaryColor top-0 right-0 rounded-bl-lg
                   rounded-tr-lg px-2 py-1 text-sm text-white"
                  >
                    40%
                  </span>
                </div>
                <span className="font-extrabold text-sm">پک هدیه شب یلدا</span>
                <div className="h-[1px] bg-grayColor/20 w-full"></div>
                <span className="text-sm text-secondaryColor pb-4 group-hover/items:text-darkPrimary">
                  42000 تومانـــ
                </span>
                <div
                  className="absolute -bottom-3 bg-secondaryColor group-hover/items:bg-darkPrimary p-1.5 
                      rounded-md cursor-pointer"
                >
                  <PiHandbag className="text-white" size={20} />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Slider>
      </div>
    </section>
  );
};
export default BestSales;
