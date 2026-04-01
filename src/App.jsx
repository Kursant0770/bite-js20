import { useState } from 'react'
import { Radio } from './components/ui/Radio.jsx'
import CheckIcon from '@mui/icons-material/Check'
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked'
import { Checkbox } from './components/ui/CheckBox.jsx'

export default function App() {
  const [checked, setChecked] = useState(false)
  const [selected, setSelected] = useState(false)

  return (
    <div>
      <Checkbox
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        icon={<CheckIcon fontSize="small" />}
      />

      <Radio
        checked={selected}
        onChange={(e) => setSelected(e.target.checked)}
        icon={<RadioButtonCheckedIcon fontSize="small" />}
      />
    </div>
  )
}
