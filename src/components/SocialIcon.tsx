import { JSX } from "react";
import { IoLogoInstagram } from "react-icons/io";
import { PiTelegramLogo } from "react-icons/pi";
import { MdOutlineWhatsapp } from "react-icons/md";

interface SocialIconProps {
  icon: "instagram" | "telegram" | "whatsUp";
}
const SocialIcon = ({ icon }: SocialIconProps) => {
  const iconMap: Record<SocialIconProps["icon"], JSX.Element> = {
    instagram: <IoLogoInstagram className="text-darkGrayColor" size={20} />,
    telegram: <PiTelegramLogo className="text-darkGrayColor" size={20} />,
    whatsUp: <MdOutlineWhatsapp className="text-darkGrayColor" size={20} />,
  };
  return (
    <span
      className="bg-extarLightGrayColor p-2 leading-10  
      rounded-lg cursor-pointer hover:bg-gray-200 "
    >
      {iconMap[icon]}
    </span>
  );
};
export default SocialIcon;
