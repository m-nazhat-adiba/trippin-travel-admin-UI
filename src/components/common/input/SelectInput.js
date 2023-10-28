import React from "react";

const SelectInput = ({ data, className, inputHook }) => {
  return (
    <div className={`${className}`}>
      <div className="flex flex-col gap-1">
        <label className=" text-gray-900">Select Category</label>
        <select
          value={inputHook.data}
          onChange={inputHook.onChange}
          className="border-2 border-gray-300 rounded-xl px-2 py-3"
        >
          <option selected>Choose option</option>
          {data.map((item, key) => (
            <option key={key} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SelectInput;
