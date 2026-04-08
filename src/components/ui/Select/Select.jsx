import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import { Select as MuiSelect } from '@mui/material'
import { forwardRef } from 'react'

export const Select = forwardRef(({ value, onChange, options, label }, ref) => {
  return (
    <FormControl size="small" style={{ minWidth: 200 }}>
      <InputLabel id="sort-label">{label}</InputLabel>
      <MuiSelect
        ref={ref}
        labelId="sort-label"
        id="sort-select"
        value={value}
        label={label}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map(({ value, label }) => (
          <MenuItem key={value} value={value}>
            {label}
          </MenuItem>
        ))}
      </MuiSelect>
    </FormControl>
  )
})

