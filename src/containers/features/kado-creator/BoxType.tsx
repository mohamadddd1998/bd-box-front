import giftBox1 from "@/assets/images/gift-box-1.png";
import giftBox2 from "@/assets/images/gift-box-2.png";
import giftBox3 from "@/assets/images/gift-box-3.png";
import giftBox4 from "@/assets/images/gift-box-4.png";
import giftBox5 from "@/assets/images/gift-box-5.png";
import Checkbox from "@/components/CheckBox";
const BoxType = () => {
  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-4">
      <div className="bg-white px-3 py-4 rounded-2xl gap-4 flex flex-col items-center justify-between">
        <img src={giftBox1.src} className="w-40" />
        <div className="flex justify-between items-center w-full">
          <span className="text-xs font-bold">باکس قلبی</span>
          <Checkbox />
        </div>
      </div>
      <div className="bg-white px-3 py-4 rounded-2xl gap-4 flex flex-col items-center justify-between">
        <img src={giftBox2.src} className="w-40" />
        <div className="flex justify-between items-center w-full">
          <span className="text-xs font-bold">باکس قلبی</span>
          <Checkbox />
        </div>
      </div>
      <div className="bg-white px-3 py-4 rounded-2xl gap-4 flex flex-col items-center justify-between">
        <img src={giftBox3.src} />
        <div className="flex justify-between items-center w-full">
          <span className="text-xs font-bold">باکس قلبی</span>
          <Checkbox />
        </div>
      </div>
      <div className="bg-white px-3 py-4 rounded-2xl gap-4 flex flex-col items-center justify-between">
        <img src={giftBox4.src} className="w-40" />
        <div className="flex justify-between items-center w-full">
          <span className="text-xs font-bold">باکس قلبی</span>
          <Checkbox />
        </div>
      </div>
      <div className="bg-white px-3 py-4 rounded-2xl gap-4 flex flex-col items-center justify-between">
        <img src={giftBox5.src} className="w-40" />
        <div className="flex justify-between items-center w-full">
          <span className="text-xs font-bold">باکس قلبی</span>
          <Checkbox />
        </div>
      </div>
    </div>
  );
};
export default BoxType;
