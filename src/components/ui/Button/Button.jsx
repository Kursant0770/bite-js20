import { Button as MuiButton } from '@mui/material'

export function Button({ children, onClick, variant = 'contained', icon, ...props }) {
  const muiVariant = variant === 'outlined' ? 'outlined' : 'contained'

  return (
    <MuiButton
      variant={muiVariant}
      onClick={onClick}
      startIcon={icon ? <span>{icon}</span> : null}
      color={variant === 'green' ? 'success' : 'primary'}
      {...props}
    >
      {children}
    </MuiButton>
  )
}
