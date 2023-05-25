import React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";

import FormikControl from "./FormikControl";

function EnrollmentForm() {
  const courses = [
    { key: "Select a course", value: "" },
    { key: "Javascript Basics", value: "jsbasic" },
    { key: "React Basics", value: "reactbasic" },
    { key: "React Advanced", value: "reactadv" },
  ];
  const skills = [
    { key: "Javascript", value: "js" },
    { key: "HTML", value: "html" },
    { key: "CSS", value: "css" },
  ];
  const initialValues = {
    email: "",
    bio: "",
    course: "",
    skillset: "",
    courseDate: null,
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid format").required("Required"),
    bio: Yup.string().required("Required"),
    course: Yup.string().required("Required"),
    courseDate: Yup.date().required("Required").nullable(),
  });
  const onSubmit = (values) => {
    console.log("Field Values: ", values);
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
            <FormikControl
              control="input"
              type="email"
              label="Email"
              name="email"
            />
            <FormikControl control="textarea" label="Bio" name="bio" />
            <FormikControl
              control="select"
              label="Select a course"
              name="course"
              options={courses}
            />
            <FormikControl
              control="checkbox"
              label="Select skillsets"
              name="skillset"
              options={skills}
            />
            <FormikControl
              control="date"
              label="Select course start date"
              name="courseDate"
            />
            <button type="submit">Submit</button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default EnrollmentForm;
