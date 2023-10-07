import React from "react";

const InputField = ({ label = "Label", placeholder = "Placeholder" }) => {
  return (
    <div className="flex flex-col gap-1">
      <label>{label}</label>
      <input
        placeholder={placeholder}
        className="border-2 border-gray-200 rounded-xl px-2 py-3"
      />
    </div>
  );
};

export default InputField;