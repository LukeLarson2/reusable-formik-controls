import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

function FormikContainer() {
  const dropdownOptions = [
    { key: "Select an option", value: "" },
    { key: "Option1", value: "option1" },
    { key: "Option2", value: "option2" },
    { key: "Option3", value: "option3" },
  ];
  const radioOptions = [
    { key: "Option1", value: "option1" },
    { key: "Option2", value: "option2" },
    { key: "Option3", value: "option3" },
  ];
  const initialValues = {
    name: "",
    email: "",
    description: "",
    selectOption: "",
    radioOption: "",
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid Email Format").required("Required"),
    description: Yup.string().required("Required"),
    selectOption: Yup.string().required("Required"),
    radioOption: Yup.string().required("Required"),
  });
  const onSubmit = (values, onSubmitProps) => {
    console.log("Form data", values);
    console.log("onSubmitProps", onSubmitProps);
    onSubmitProps.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form>
          <FormikControl control="input" type="text" label="Name" name="name" />
          <FormikControl
            control="input"
            type="email"
            label="Email"
            name="email"
          />
          <FormikControl
            control="textarea"
            label="Description"
            name="description"
          />
          <FormikControl
            control="select"
            label="Select a topic"
            name="selectOption"
            options={dropdownOptions}
          />
          <FormikControl
            control="radio"
            label="Radio Topic"
            name="radioOption"
            options={radioOptions}
          />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
}

export default FormikContainer;
