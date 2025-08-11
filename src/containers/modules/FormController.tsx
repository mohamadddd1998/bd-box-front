import { Form, Formik } from "formik";
import React from "react";

interface FormContainerProps {
  handleSubmit?: (values: any, helpers: any) => void;
  fields: Record<string, any>;
  validationSchema?: object;
  validateOnBlur?: boolean;
  validateOnChange?: boolean;
  children: React.ReactNode;
  formClassName?: string;
  [key: string]: any;
}

const FormContainer: React.FC<FormContainerProps> = (props) => {
  const {
    handleSubmit = () => {},
    fields = {},
    validationSchema,
    validateOnBlur = false,
    validateOnChange = false,
    children,
    formClassName = "",
    ...rest
  } = props;

  return (
    <Formik
      enableReinitialize
      validateOnBlur={validateOnBlur}
      validateOnChange={validateOnChange}
      validationSchema={validationSchema}
      initialValues={fields}
      onSubmit={(values, helpers) => {
        handleSubmit(values, helpers);
      }}
      {...rest}
    >
      {() => <Form className={formClassName}>{children}</Form>}
    </Formik>
  );
};

export default FormContainer;
