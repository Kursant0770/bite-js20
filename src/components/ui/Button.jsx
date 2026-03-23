import { Button as MuiButton, styled } from '@mui/material'
import { forwardRef } from 'react'

export const Button = forwardRef(
  ({ children, variant, type = 'button', disabled, icon, ...rest }, ref) => (
    <MuiButton variant={variant} ref={ref} type={type} disabled={disabled} {...rest}>
      {icon} {children}
    </MuiButton>
  )
)
