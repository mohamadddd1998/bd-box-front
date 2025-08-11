import { FaCheck } from "react-icons/fa";

interface CheckboxProps {
  checked?: boolean;
  name: string;
  [key: string]: any;
}

const Checkbox: React.FC<CheckboxProps> = ({
  checked = false,
  name,
  ...rest
}) => {
  return (
    <div className="relative inline-flex items-center p-1 rounded-md gap-2">
      <input
        type="checkbox"
        className={`peer cursor-pointer appearance-none relative 
           h-6 w-6 bg-white border border-input-border transition-all
         checked:border-gray-300 checked:bg-primary rounded-md`}
        checked={checked}
        name={name}
        {...rest}
      />
      <div
        className="flex justify-center right-[10px] 
           pointer-events-none absolute text-white opacity-0 
              transition-opacity peer-checked:opacity-100"
      >
        <FaCheck className="text-white text-xs" />
      </div>
    </div>
  );
};

export default Checkbox;
