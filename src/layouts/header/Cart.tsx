import { PiHandbag } from "react-icons/pi";

const Cart = () => {
  return (
    <div className="relative bg-secondaryColor p-1.5 rounded-md cursor-pointer">
      <PiHandbag className="text-white" size={20} />
      <span
        className="absolute -top-2 -right-1 flex justify-center items-center
       text-white bg-darkPrimary h-4.5 text-xs w-4.5 rounded-full"
      >
        0
      </span>
    </div>
  );
};
export default Cart;
