import Checkbox from "@/components/CheckBox";
import { FiFilter } from "react-icons/fi";
import product1 from "@/assets/images/product-1.png";
import product2 from "@/assets/images/product-2.png";
import product3 from "@/assets/images/product-3.png";
import Button from "@/components/Button";
import { useRef, useState } from "react";
import { clsx } from "@/helpers/clsx";
import { useOnClickOutside } from "usehooks-ts";

const BoxItems = () => {
  const [openFilter, setOpenFilter] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleClickOutside = () => setOpenFilter(false);

  useOnClickOutside(ref as React.RefObject<HTMLElement>, handleClickOutside);

  return (
    <div className="flex flex-col gap-4  relative">
      {openFilter && (
        <div
          ref={ref}
          className="absolute space-y-6 bg-white px-3 py-4 shadow-2xl rounded-lg w-68 z-50 top-8"
        >
          <div className="flex justify-between text-xs font-bold">
            <span>فیلتر ها</span>
            <span className="text-darkColor">حذف فیلتر ها</span>
          </div>
          <div className="text-xs flex flex-wrap gap-2">
            <span className="bg-extarLightGrayColor text-darkGrayColor py-2 px-3 rounded-full cursor-pointer hover:bg-primary hover:text-white">
              پربازدید ترین ها
            </span>
            <span className="bg-extarLightGrayColor text-darkGrayColor py-2 px-3 rounded-full cursor-pointer hover:bg-primary hover:text-white">
              پرفروش ترین ها
            </span>
            <span className="bg-extarLightGrayColor text-darkGrayColor py-2 px-3 rounded-full cursor-pointer hover:bg-primary hover:text-white">
              گران ترین ها
            </span>
          </div>
          <div className="flex flex-col gap-4">
            <input
              className="border-1 p-2 border-lightGrayColor rounded-md focus:outline-0
             text-darkGrayColor bg-white flex-1 placeholder:text-xs"
              placeholder="فیلتر 1"
            />
            <input
              className="border-1 p-2 border-lightGrayColor rounded-md focus:outline-0
             text-darkGrayColor bg-white flex-1 placeholder:text-xs"
              placeholder="فیلتر 2"
            />
            <input
              className="border-1 p-2 border-lightGrayColor rounded-md focus:outline-0
             text-darkGrayColor bg-white flex-1 placeholder:text-xs"
              placeholder="فیلتر 3"
            />
          </div>
          <Button variant="primary" className="w-full">
            اعمـال فیــلتر
          </Button>
        </div>
      )}
      <div className="flex items-center gap-2 w-full">
        <div
          className="px-2 cursor-pointer"
          onClick={() => setOpenFilter(!openFilter)}
        >
          <FiFilter className="text-2xl text-darkGrayColor" />
        </div>
        <input
          className="border-1 p-2 border-lightGrayColor rounded-md focus:outline-0
             text-darkGrayColor bg-white flex-1 placeholder:text-xs"
          placeholder="نام محصول را وارد کنید ..."
        />
      </div>
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-4">
        <div
          className={clsx(
            "relative bg-white px-3 py-4 rounded-2xl gap-6 flex flex-col items-center justify-between",
            openFilter &&
              "after:absolute after:top-0 after:bottom-0 after:right-0 after:left-0 after:bg-black/10 after:rounded-2xl"
          )}
        >
          <img src={product1.src} />
          <span className="font-bold text-xs">محصول شماره 1</span>
          <div className="flex justify-between items-center w-full">
            <span className="text-xs font-bold text-grayColor">
              42000 تومانـــ
            </span>
            <Checkbox />
          </div>
        </div>
        <div
          className={clsx(
            "relative bg-white px-3 py-4 rounded-2xl gap-6 flex flex-col items-center justify-between",
            openFilter &&
              "after:absolute after:top-0 after:bottom-0 after:right-0 after:left-0 after:bg-black/10 after:rounded-2xl"
          )}
        >
          <img src={product2.src} />
          <span className="font-bold text-xs">محصول شماره 1</span>
          <div className="flex justify-between items-center w-full">
            <span className="text-xs font-bold text-grayColor">
              42000 تومانـــ
            </span>
            <Checkbox />
          </div>
        </div>
        <div
          className={clsx(
            "relative bg-white px-3 py-4 rounded-2xl gap-6 flex flex-col items-center justify-between",
            openFilter &&
              "after:absolute after:top-0 after:bottom-0 after:right-0 after:left-0 after:bg-black/10 after:rounded-2xl"
          )}
        >
          <img src={product3.src} />
          <span className="font-bold text-xs">محصول شماره 1</span>
          <div className="flex justify-between items-center w-full">
            <span className="text-xs font-bold text-grayColor">
              42000 تومانـــ
            </span>
            <Checkbox />
          </div>
        </div>
      </div>
    </div>
  );
};
export default BoxItems;
