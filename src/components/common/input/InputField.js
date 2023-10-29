import React from "react";

const InputField = ({
  label = "Label",
  placeholder = "Placeholder",
  inputHook,
  className,
  type = "text"
}) => {
  const inputProps = inputHook;

  return (
    <div className={`${className}`}>
      <div className="flex flex-col gap-1">
        <label>{label}</label>
        <input
          type={type}
          value={inputProps.data}
          placeholder={placeholder}
          onChange={inputProps.onChange}
          className={`border-2 border-gray-300 rounded-xl px-2 py-3`}
        />
      </div>
    </div>
  );
};

export default InputField;
