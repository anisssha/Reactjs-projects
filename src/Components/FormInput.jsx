import { useState } from "react";

import "./forminput.css";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, onChange, errorMessage, id, ...inputProps } = props;

  const handelFocused = (e) => {
    setFocused(true);
  };
  return (
    <div className="forminput">
      <label>{label}</label>

      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handelFocused}
        onFocus={()=>inputProps.name==="confirmPassword" && setFocused(true)}
        focused={focused.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
