import React from "react";
import Input from "./Input";
import TextArea from "./TextArea";
import Select from "./Select";
import RadioButton from "./RadioButton";

function FormikControl(props) {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea": {
      return <TextArea {...rest} />;
    }
    case "select": {
      return <Select {...rest} />;
    }
    case "radio": {
      return <RadioButton {...rest} />;
    }
    case "checkbox":
    case "date":
    default:
      return null;
  }
}

export default FormikControl;
