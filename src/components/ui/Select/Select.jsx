import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import { Select as MuiSelect } from '@mui/material'
import { options } from '../../../options'

export const Select = ({ value, onChange }) => {
  return (
    <FormControl size="small" style={{ minWidth: 200 }}>
      <InputLabel id="sort-label">Сортировать по</InputLabel>
      <MuiSelect
        labelId="sort-label"
        id="sort-select"
        value={value}
        label="Сортировать по"
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </MuiSelect>
    </FormControl>
  )
}
