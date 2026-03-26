import { useState } from 'react'
import { Select } from './components/ui/select/Select'
import { options } from './options'

export const App = () => {
  const [selected, setSelected] = useState(null)

  return (
    <div>
      <h1>Bite</h1>
      <Select options={options} value={selected} onChange={setSelected} placeholder="Выберите..." />
    </div>
  )
}
