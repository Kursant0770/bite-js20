import { forwardRef } from "react";

const Checkbox = forwardRef(({
  checked,
  onChange,
  disabled = false,
  icon,
  ...rest
}, ref) => {
  return (
    <label style={{ position: "relative", display: "inline-block", width: 24, height: 24 }}>
      <input
        ref={ref}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        style={{ position: "absolute", opacity: 0, width: 0, height: 0 }}
        {...rest}
      />
      <span style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 24,
        height: 24,
        border: "0.5px solid black",
        borderRadius: 4,
        background: checked ? "green" : "white",
      }}>
        {checked && icon}
      </span>
    </label>
  );
});

Checkbox.displayName = "Checkbox";

export default Checkbox;