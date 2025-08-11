"use client";
import { useCallback } from "react";
import * as Yup from "yup";
import KadoCreator from ".";
import KadoCost from "./KadoCost";
import FormController from "@/containers/modules/FormController";
interface IFields {
  color: string;
  items: Record<string, any>;
  shape: string;
}

const CreateKadoForm = () => {
  // Form Validation
  const validationSchema = () => Yup.object({});
  const submitHandler = useCallback((values: IFields) => {
    const {} = values;
    const payload = {};
  }, []);
  return (
    <FormController
      fields={{
        shape: "",
        items: [],
        color: "",
      }}
      validationSchema={validationSchema}
      handleSubmit={(values) => {
        submitHandler(values);
      }}
      formClassName="container max-w-6xl max-xs:px-1 py-6 lg:bg-secondaryColor 
                      flex flex-col gap-4 rounded-4xl"
    >
      <KadoCreator />
      <KadoCost />
    </FormController>
  );
};
export default CreateKadoForm;
