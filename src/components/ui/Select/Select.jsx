import { Select as MuiSelect, MenuItem, FormControl } from '@mui/material'

export function Select({
  options = [],
  value,
  onChange,
  placeholder = 'Выберите...',
  children,
  ...props
}) {
  return (
    <FormControl fullWidth size="small">
      <MuiSelect
        value={value ?? ''}
        onChange={(e) => onChange?.(e.target.value)}
        displayEmpty
        {...props}
      >
        <MenuItem value="" disabled>
          {placeholder}
        </MenuItem>
        {children}
        {options.map((opt) => (
          <MenuItem key={opt.value} value={opt.value}>
            {opt.label}
          </MenuItem>
        ))}
      </MuiSelect>
    </FormControl>
  )
}
