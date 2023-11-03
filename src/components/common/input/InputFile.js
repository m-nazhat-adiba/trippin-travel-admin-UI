import React from "react";

const InputFile = ({ handleFileChange }) => {
  return (
    <input
      className="block w-full text-gray-800 text-base file:mr-4 file:px-6 file:py-2 file:text-base file:border-0 file:rounded-full file:font-semibold file:text-violet-700 file:bg-violet-50 hover:file:bg-amber-100 hover:file:cursor-pointer"
      type="file"
      onChange={handleFileChange}
    />
  );
};

export default InputFile;
