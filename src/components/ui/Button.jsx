import { Button as MuiButton, styled } from '@mui/material'
import { forwardRef } from 'react'

export const Button = forwardRef(
  ({ children, variant, type = 'button', disabled, icon, ...rest }, ref) => (
    <StyledButton variant={variant} ref={ref} type={type} disabled={disabled} {...rest}>
      {icon && '+'} {children}
    </StyledButton>
  )
)

const StyledButton = styled(MuiButton)(({ variant }) => ({
  padding: '8px 20px',
  borderRadius: '10px',
  textTransform: 'none',

  ...(variant === 'contained' && {
    backgroundColor: '#FFD519',
    color: '#000000',

    '&:hover': {
      backgroundColor: '#FFD519',
    },
  }),

  ...(variant === 'outlined' && {
    border: '2px solid #FFD519',
    color: '#FFD519',

    '&:hover': {
      backgroundColor: 'rgba(255, 213, 25, 0.1)',
    },
  }),

  ...(variant === 'text' && {
    color: '#FFD519',

    '&:hover': {
      backgroundColor: 'rgba(255, 213, 25, 0.1)',
    },
  }),

  '&:active': {
    transform: 'scale(0.97)',
  },

  '&.Mui-disabled': {
    backgroundColor: '#cfcfcf',
    color: '#888',
  },
}))
