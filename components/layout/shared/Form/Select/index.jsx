import { useState } from "react";

export default function Select({ id, label, name, spanNum, children }) {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div className={`form-parent h-full col-span-${spanNum}`}>
      {/* To fix chevron another time */}
      <select id={id} className={isSelected != "" ? "ring-1 ring-primary" : ""} name={name} value={isSelected} onChange={(e) => setIsSelected(e.target.value)}>
        {children}
      </select>
      <label className={isSelected != "" ? "focused" : ""} htmlFor={id}>{label}</label>
    </div>
  )
}