import { forwardRef } from 'react'
import { Radio as MuiRadio } from '@mui/material'
import { styled } from '@mui/material/styles'

export const Radio = forwardRef(function Radio(
  { checked, onChange, disabled = false, icon, ...rest },
  ref
) {
    <MuiLabel>
      <MuiStyledRadio
        ref={ref}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        {...rest}
      />
      <MuiSpan checked={checked}>{checked && icon}</MuiSpan>
    </MuiLabel>
})

const MuiLabel = styled('label')({
  position: 'relative',
  display: 'inline-block',
  width: 24,
  height: 24,
})

const MuiStyledRadio = styled(MuiRadio)({
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
  borderRadius: '50%',
  border: '1px solid #ccc',
})
