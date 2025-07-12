import redBox from "@/assets/images/red-box.png";
import yellowBox from "@/assets/images/yellow-box.png";
import greenBox from "@/assets/images/green-box.png";
import Checkbox from "@/components/CheckBox";
const BoxColor = () => {
  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-4">
      <div className="bg-white px-3 py-4 rounded-2xl gap-4 flex flex-col items-center justify-between">
        <img src={redBox.src} />
        <div className="flex justify-between items-center w-full">
          <span className="text-xs font-bold">باکس قرمز</span>
         <Checkbox />
        </div>
      </div>
      <div className="bg-white px-3 py-4 rounded-2xl gap-4 flex flex-col items-center justify-between">
        <img src={yellowBox.src} />
        <div className="flex justify-between items-center w-full">
          <span className="text-xs font-bold">باکس سبز</span>
          <Checkbox />
        </div>
      </div>
      <div className="bg-white px-3 py-4 rounded-2xl gap-4 flex flex-col items-center justify-between">
        <img src={greenBox.src} />
        <div className="flex justify-between items-center w-full">
          <span className="text-xs font-bold">باکس زرد</span>
          <Checkbox />
        </div>
      </div>
    </div>
  );
};
export default BoxColor;
