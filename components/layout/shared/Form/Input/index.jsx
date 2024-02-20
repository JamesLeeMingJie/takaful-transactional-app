import { useState } from "react";

export default function Input({ id, label, type, name, spanNum }) {
  const [isFocused, setIsFocused] = useState(false);

  function handleInput(e) {
    e.target.value != "" ? setIsFocused(true) : setIsFocused(false);
  };

  return (
    <div className={`form-parent md:col-span-${spanNum}`}>
      <input id={id} type={type} name={name} onChange={handleInput} />
      <label htmlFor={id} className={isFocused ? "focused" : ""}>{label}</label>
    </div>
  )
}