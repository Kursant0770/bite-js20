import { TextField as MuiTextField } from '@mui/material'

export function Input({ placeholder, value, onChange, children, ...props }) {
  return (
    <MuiTextField
      fullWidth
      size="small"
      placeholder={placeholder}
      value={value ?? ''}
      onChange={(e) => onChange?.(e.target.value)}
      {...props}
    >
      {children}
    </MuiTextField>
  )
}
