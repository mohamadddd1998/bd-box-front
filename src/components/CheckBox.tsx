import { FaCheck } from "react-icons/fa";

interface CheckboxProps {
  checked?: boolean;
  [key: string]: any;
}

const Checkbox: React.FC<CheckboxProps> = ({ checked = false }) => {
  return (
    <label className="relative">
      <input
        type="checkbox"
        className={`peer cursor-pointer appearance-none relative h-6 w-6
             bg-white border border-main-gray transition-all
             checked:border-gray-300 checked:bg-primary rounded-md`}
      />
      <div
        className={`right-1.5 top-1.5 pointer-events-none absolute text-grayColor 
            opacity-0 transition-opacity peer-checked:opacity-100`}
      >
        <FaCheck className="text-xs text-white" />
      </div>
    </label>
  );
};

export default Checkbox;
