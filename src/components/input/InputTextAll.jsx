import React from "react";
import "../../style/input.css";

const defaultStyle = {
  NOMAL:
    "outline-none bg-[#FFFFFF] block w-full rounded-md py-2 px-2 border border-[#D9D9D9]",
  ERROR:
    "[border:none] outline-none block w-full rounded-md py-2 px-2 bg-red-500 bg-opacity-10 placeholder-[#D25656] uppercase",
  DISABLED:
    "[border:none] outline-none bg-[#D9D9D9]  block w-full rounded-md py-2 px-2",
};

function InputTextAll({
  value,
  onChange,
  onKeyDown,
  placeholder,
  errorDesc,
  showErrorMessage = true,
  disabled = false,
  maxLength,
  styleInfo = defaultStyle,
}) {
  return (
    <>
      <input
        placeholder={placeholder}
        value={value || ""}
        onKeyDown={onKeyDown}
        onChange={onChange}
        disabled={disabled}
        className={
          disabled
            ? styleInfo.DISABLED
            : errorDesc
            ? styleInfo.ERROR
            : styleInfo.NOMAL
        }
        maxLength={maxLength}
        type="text"
      />
      {showErrorMessage && errorDesc && (
        <p className="text-error">{errorDesc}</p>
      )}
    </>
  );
}

export default InputTextAll;
