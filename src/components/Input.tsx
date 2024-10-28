type InputProps = {
  label: string,
  type: string,
  name: string,
  className?: string
}

const Input = ({label, type, name, className}: InputProps) => {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          id={name}
          name={name}
          type={type}
          autoComplete={name}
          className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:text-start focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          // placeholder={label}
        />
      </div>
    </div>
  );
};

export default Input;
