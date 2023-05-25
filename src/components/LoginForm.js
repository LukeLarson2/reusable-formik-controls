import React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

function LoginForm() {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid Format").required("Required"),
    password: Yup.string()
      .min(6, "Must be at least 6 characters")
      .required("Required"),
  });

  const onSubmit = (values, onSubmitProps) => {
    console.log("Form data", values);
    onSubmitProps.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form>
            <label className="title">User Login</label>
            <FormikControl
              control="input"
              type="email"
              label="Email"
              name="email"
            />
            <FormikControl
              control="input"
              type="password"
              label="Password"
              name="password"
            />
            <div className="btn-placement">
              <button type="submit" disabled={!formik.isValid}>
                Login
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}

export default LoginForm;
