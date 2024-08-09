import React from "react";

const InputField = ({
  type,
  val,
  Name,
  handleChange,
  className,
  Placeholder,
  maxLen,
  maxDate
}) => {
  return (
    <input
      className={className}
      name={Name}
      value={val}
      type={type}
      onChange={handleChange}
      placeholder={Placeholder}
      maxLength={maxLen}
      max={maxDate}
    />
  );
};

export default InputField;
