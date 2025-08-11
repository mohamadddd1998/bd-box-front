import { useFormikContext } from "formik";

const KadoCost = () => {
  const { values } = useFormikContext<any>();

  return (
    <div
      className="lg:self-end self-center flex items-center gap-4 lg:py-2 
              max-lg:bg-secondaryColor max-lg:rounded-4xl max-lg:p-4"
    >
      <span className="text-white">
        {values["items"]
          ?.reduce((sum: number, product: any) => sum + product.price, 0)
          ?.toLocaleString()}{" "}
        تومان
      </span>
      <span className="text-xs">: قیــمت تا ایـن لحظه </span>
    </div>
  );
};
export default KadoCost;
