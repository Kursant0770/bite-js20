import { forwardRef } from 'react'
import { Checkbox as MuiCheckbox } from '@mui/material'
import { styled } from '@mui/material/styles'

export const Checkbox = forwardRef(function Checkbox(
  { checked, onChange, disabled = false, icon, ...rest },
  ref
) {
    <MuiLabel>
      <MuiStyledCheckbox
        ref={ref}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        {...rest}
      />
      <MuiSpan>{checked && icon}</MuiSpan>
    </MuiLabel>
})

const MuiLabel = styled('label')({
  position: 'relative',
  display: 'inline-block',
  width: 24,
  height: 24,
})

const MuiStyledCheckbox = styled(MuiCheckbox)({
  position: 'absolute',
  opacity: 0,
  width: 0,
  height: 0,
})

const MuiSpan = styled('span')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 24,
  height: 24,
})
