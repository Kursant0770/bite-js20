import { Button as MuiButton, styled } from '@mui/material'
import { forwardRef } from 'react'

export const Button = forwardRef(
  ({ children, variant, type = 'button', disabled, icon, ...rest }, ref) => (
    <StyledButton variant={variant} ref={ref} type={type} disabled={disabled} {...rest}>
      {icon && '+'} {children}
    </StyledButton>
  )
)

const StyledButton = styled(MuiButton)(() => ({
  backgroundColor: '#FFD519',
  color: '#000000',
  padding: '8px 20px',
  borderRadius: '10px',

  '&:hover': {
    backgroundColor: '#FFD519',
  },

  '&:active': {
    backgroundColor: '#FFD519',
  },

  '&.Mui-disabled': {
    backgroundColor: '#cfcfcf',
    color: '#888',
  },
}))
