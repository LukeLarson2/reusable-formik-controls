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
    { key: "Option1", value: "rOption1" },
    { key: "Option2", value: "rOption2" },
    { key: "Option3", value: "rOption3" },
  ];
  const checkBoxOptions = [
    { key: "Option1", value: "cOption1" },
    { key: "Option2", value: "cOption2" },
    { key: "Option3", value: "cOption3" },
  ];
  const initialValues = {
    name: "",
    email: "",
    description: "",
    selectOption: "",
    radioOption: "",
    checkBoxOption: [],
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid Email Format").required("Required"),
    description: Yup.string().required("Required"),
    selectOption: Yup.string().required("Required"),
    radioOption: Yup.string().required("Required"),
    checkBoxOption: Yup.array().required("Required"),
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
          <FormikControl
            control="input"
            type="text"
            label="Name"
            name="name"
            placeholder="Name"
          />
          <FormikControl
            control="input"
            type="email"
            label="Email"
            name="email"
            placeholder="E-mail"
          />
          <FormikControl
            control="textarea"
            label="Description"
            name="description"
            placeholder="Enter a description..."
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
          <FormikControl
            control="checkbox"
            label="Check Box Topics"
            name="checkBoxOption"
            options={checkBoxOptions}
          />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
}

export default FormikContainer;
