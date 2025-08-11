import { FaCheck } from "react-icons/fa";
import { Field } from "formik";

interface RadioButtonProps {
  value: string;
  name: string;
}

const RadioButton: React.FC<RadioButtonProps> = ({ name, value }) => {
  return (
    <div className="relative inline-flex items-center p-1 rounded-md gap-x-2">
      <Field
        type="radio"
        name={name}
        value={value}
        className="peer cursor-pointer appearance-none relative 
                    h-6 w-6 bg-white border border-input-border transition-all
                    checked:border-gray-300 checked:bg-primary rounded-full"
      />

      <div
        className={`flex justify-center right-[10px] 
                         pointer-events-none absolute  opacity-0 transition-opacity 
                         peer-checked:opacity-100`}
      >
        <FaCheck className="text-white text-xs" />
      </div>
    </div>
  );
};

export default RadioButton;
