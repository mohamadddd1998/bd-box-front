import RadioButton from "@/components/RadioButton";
import { KadoShapes } from "@/constants/data";
import { Field, FieldProps } from "formik";
const BoxShape = () => {
  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-4">
      <Field name="shape">
        {({ field }: FieldProps) =>
          KadoShapes.map((shape, index: number) => (
            <label
              className="bg-white px-3 py-4 rounded-2xl gap-4
             flex flex-col items-center justify-between"
              key={index}
            >
              <img src={shape.img} className="w-40" />
              <div className="flex justify-between items-center w-full">
                <span className="text-xs font-bold">{shape.title}</span>
                <RadioButton name={field.name} value={shape.name} />
              </div>
            </label>
          ))
        }
      </Field>
    </div>
  );
};
export default BoxShape;
