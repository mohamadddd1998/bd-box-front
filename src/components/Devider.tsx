import hr from "@/assets/images/hr-1.png";
import stars from "@/assets/images/stars.png";
const Devider = () => {
  return (
    <div>
      <img src={hr.src} />
      <div className="flex justify-center">
        <img src={stars.src} className="w-24" />
      </div>
    </div>
  );
};
export default Devider;
