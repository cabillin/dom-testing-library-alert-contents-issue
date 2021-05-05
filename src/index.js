import React from "react";
import { TextField } from '@fluentui/react';

function InputWithAlert() {
  const [lostFocus, setLostFocus] = React.useState(false);
  return (
        <TextField label="Input with alert on blur" errorMessage={lostFocus ? "Something went wrong" : undefined} onBlur={() => setLostFocus(true)}/>
  );
}

export default InputWithAlert;
