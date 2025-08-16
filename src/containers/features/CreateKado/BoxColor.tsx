import RadioButton from "@/components/RadioButton";
import { KadoColors } from "@/constants/data";
import { Field, FieldProps } from "formik";
const BoxColor = () => {
  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      <Field name="color">
        {({ field }: FieldProps) =>
          KadoColors.map((color, index: number) => (
            <label
              className="bg-white px-3 py-4 rounded-2xl gap-4
             flex flex-col items-center justify-between"
              key={index}
            >
              <img src={color.img} className="w-20" />
              <div className="flex justify-between items-center w-full">
                <span className="text-xs font-bold">{color.title}</span>
                <RadioButton name={field.name} value={color.value} />
              </div>
            </label>
          ))
        }
      </Field>
    </div>
  );
};
export default BoxColor;
