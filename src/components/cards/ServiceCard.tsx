import { TiArrowLeftThick } from "react-icons/ti";

interface ServiceCardProps {
  img: string;
  title: string;
  description: string;
}
const ServiceCard = ({ img, title, description }: ServiceCardProps) => {
  return (
    <div
      className="flex flex-col justify-center items-center gap-4 px-8 py-12
     hover:shadow-rounded hover:bg-white/50 hover:rounded-4xl group/item"
    >
      <img src={img} className="w-16" />
      <span className="font-extrabold text-sm">{title}</span>
      <p className="text-grayColor text-xs mb-8">{description}</p>
      {/* <img src={arrowLeft.src} className="w-6" /> */}
      <div className="group-hover/item:bg-secondaryColor group-hover/item:text-white rounded-2xl px-3 py-1">
        <TiArrowLeftThick />
      </div>
    </div>
  );
};
export default ServiceCard;
