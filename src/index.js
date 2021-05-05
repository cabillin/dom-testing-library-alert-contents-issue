import React from "react";
import { TextField } from "@fluentui/react";

function InputWithAlert() {
  return (
    <TextField
      label="Input with alert on blur"
      errorMessage={"Something went wrong"}
    />
  );
}

export default InputWithAlert;
