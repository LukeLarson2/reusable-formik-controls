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
    password: Yup.string().required("Required"),
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
            <div className="title-position">
              <label className="title">Login</label>
            </div>
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
            <div className="login-signup">
              <div className="btn-placement">
                <button
                  className="login"
                  type="submit"
                  disabled={!formik.isValid}
                >
                  Login
                </button>
              </div>
              <p className="or">or</p>
              <div className="btn-placement">
                <button className="sign-up" type="button">
                  Sign Up
                </button>
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}

export default LoginForm;
