import React from "react";

const TextBox = ({ label, value, onChange, placeholder }) => {
  return (
    <div className="mb-4">
      {label && (
        <label className="block text-gray-700 text-sm font-bold mb-2">
          {label}
        </label>
      )}
      <textarea
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows="4"
      />
    </div>
  );
};

export default TextBox;
