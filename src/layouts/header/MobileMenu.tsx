'use client'
import { IoMenuOutline } from "react-icons/io5";

const MobileMenu = () => {
  return (
    <>
      <div className="bg-secondaryColor p-1 rounded-md md:hidden cursor-pointer">
        <IoMenuOutline className="text-white" size={25} />
      </div>
    </>
  );
};
export default MobileMenu;
