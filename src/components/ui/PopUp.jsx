import { FormControl, MenuItem, Select as MuiSelect } from '@mui/material'
import { forwardRef, useState } from 'react'
import { Arrow } from '../../assets/icons'
import { sortOptions, SORT_LABEL } from './options'

export const PopUp = forwardRef((props, ref) => {
  const { value, onChange, options = sortOptions, label = SORT_LABEL } = props
  const [selected, setSelected] = useState(value || '')

  const handleChange = (e) => {
    setSelected(e.target.value)
    if (onChange) onChange(e.target.value)
  }

  return (
    <FormControl variant="standard" size="small" style={{ minWidth: 160 }}>
      <MuiSelect
        ref={ref}
        id="sort-select"
        value={selected}
        onChange={handleChange}
        IconComponent={() => <img src={Arrow} alt="arrow" width={18} height={18} />}
        disableUnderline
        displayEmpty
        renderValue={(val) => {
          if (!val) return label
          const found = options.find((o) => o.value === val)
          return found ? found.label : label
        }}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </MuiSelect>
    </FormControl>
  )
})
