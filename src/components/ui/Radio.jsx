import { forwardRef } from "react";

const Radio = forwardRef(({
  checked,
  onChange,
  disabled = false,
  icon,
  ...rest
}, ref) => {
  return (
    <label style={{ display: "inline-block", width: 24, height: 24 }}>
      <input
        ref={ref}
        type="radio"
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
        borderRadius: "50%",
        border: "1px solid #ccc",
        background: checked ? "yellow" : "#ccc",
      }}>
        {checked && icon}
      </span>
    </label>
  );
});

Radio.displayName = "Radio";

export default Radio;