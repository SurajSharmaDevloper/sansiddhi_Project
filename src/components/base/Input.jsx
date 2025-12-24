import React, { useState, useRef, useEffect } from "react";

const Input = ({
  label,
  options = [],
  placeholder = "Select option",
  value,
  onChange,
}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="w-full" ref={ref}>
      {label && (
        <label className="block mb-1 text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      {/* Select Box */}
      <div
        onClick={() => setOpen(!open)}
        className="relative cursor-pointer rounded-xl border border-gray-300 bg-white px-4 py-3
                   text-sm text-gray-700 flex justify-between items-center
                   hover:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-500"
      >
        <span className={value ? "text-gray-800" : "text-gray-400"}>
          {value || placeholder}
        </span>

        <svg
          className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>

        {/* Dropdown */}
        {open && (
          <ul
            className="absolute z-20 top-full left-0 mt-2 w-full rounded-xl
                         bg-white shadow-lg border border-gray-200 overflow-hidden"
          >
            {options.map((opt, index) => (
              <li
                key={index}
                onClick={() => {
                  onChange(opt);
                  setOpen(false);
                }}
                className="px-4 py-3 text-sm hover:bg-indigo-50 cursor-pointer"
              >
                {opt}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Input;
