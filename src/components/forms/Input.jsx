import React from "react";

const Input = ({ name, label, onChange, onBlur, value, errors }) => {
  return (
    <div className="w-full mb-6 md:mb-0">
      <label
        htmlFor={name}
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type="text"
        className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
      <span className="text-red-500 text-sm	 block mb-2">{errors}</span>
    </div>
  );
};

export default Input;
