import React from "react";

type DropdownProps = {
  label: string,
  name: string,
  options: {label: string, value: string}[],
  className?: string
}

const DropDown = ({label, name, options, className}: DropdownProps) => {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2">
        <select
          id={name}
          name={name}
          autoComplete={name}
          className="block w-full rounded-md border-0 py-2 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600  sm:text-sm sm:leading-6"
        >
           {/* <option value=''>Selectionne</option> */}
          {options.map(option => (
            <option key={option.value}>{option.label}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default DropDown;
