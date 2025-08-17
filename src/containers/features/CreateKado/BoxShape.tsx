import RadioButton from "@/components/RadioButton";
import { KadoShapes } from "@/constants/data";
import { Field, FieldProps } from "formik";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useMediaQuery } from "usehooks-ts";

const BoxShape = () => {
  const isDesktop = useMediaQuery("(min-width:1024px)");
  return (
    <>
      {isDesktop ? (
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          <Field name="shape">
            {({ field }: FieldProps) =>
              KadoShapes.map((shape, index: number) => (
                <label
                  className="relative bg-white px-3 py-4 rounded-2xl gap-2 flex justify-center items-center"
                  key={index}
                >
                  <img src={shape.img} className="w-20" />
                  <div className="absolute left-0 top-0">
                    <RadioButton name={field.name} value={shape.name} />
                  </div>
                </label>
              ))
            }
          </Field>
        </div>
      ) : (
        <Field name="shape">
          {({ field }: FieldProps) => (
            <div className="space-y-4">
              <Swiper
                className="w-full shop-swiper"
                spaceBetween={10}
                loop
                slidesPerView={2}
                navigation={{
                  nextEl: ".custom-next",
                  prevEl: ".custom-prev",
                }}
                modules={[Navigation]}
                breakpoints={{
                  640: {
                    slidesPerView: 3,
                  },
                  768: {
                    slidesPerView: 5,
                  },
                }}
              >
                {KadoShapes.map((shape, index: number) => (
                  <SwiperSlide className="h-32!">
                    <label
                      className="bg-white px-3 py-4 rounded-2xl gap-2 h-full flex justify-center items-center"
                      key={index}
                    >
                      <img src={shape.img} className="w-20" />
                      <div className="absolute left-0 top-0">
                        <RadioButton name={field.name} value={shape.name} />
                      </div>
                    </label>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="custom-navigation flex justify-center gap-4">
                <button className="custom-prev border-2 p-1 border-darkGrayColor rounded-full cursor-pointer">
                  <FaAngleRight className="font-bold" />
                </button>
                <button className="custom-next border-2 p-1 border-darkGrayColor rounded-full cursor-pointer">
                  <FaAngleLeft className="font-bold" />
                </button>
              </div>
            </div>
          )}
        </Field>
      )}
    </>
  );
};
export default BoxShape;
