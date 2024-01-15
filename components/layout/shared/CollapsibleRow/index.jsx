// Experimental components; not in used!

export default function CollapsibleRow({ parentClass, childClass, children }) {
  return (
    <div className={parentClass}>
      <p className={childClass}>
        {children}
      </p>
    </div>
  )
}

