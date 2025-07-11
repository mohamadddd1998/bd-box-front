'use client'
import Slider from "@/containers/modules/Slider";
import { SwiperSlide } from "swiper/react";
import kado1 from "@/assets/images/kado-1.png";
import { PiHandbag } from "react-icons/pi";
import SectionTitle from "@/components/SectionTitle";
import SectionSubTitle from "@/components/SectionSubTitle";

const UserBoxes = () => {
  return (
    <section id="users-box" className="relative">
      <div className="container max-w-6xl flex flex-col gap-y-4 justify-center items-center py-8">
        <SectionTitle title="کاربران" subtitle="باکس های" dir="ltr" />
        <SectionSubTitle text="آخرین باکس های کاربران" />

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
export default UserBoxes;
