import React from "react";

const InputFeild = ({
  id,
  defaultValue,
  placeholder,
  type,
  className = "",
}) => {
  return (
    <div>
      <input
        id={id}
        placeholder={placeholder}
        defaultValue={defaultValue}
        type={type}
        className={`${className}`}
      />
    </div>
  );
};

export default InputFeild;
