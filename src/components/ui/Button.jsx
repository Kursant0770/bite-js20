import React from 'react'
import Button from '@mui/material/Button'

export const UiButton = ({
  variant = 'contained',
  color = 'primary',
  size = 'medium',
  disabled = false,
  fullWidth = false,
  onClick,
  children,
  sx = {},
  ...props
}) => {
  return (
    <Button
      variant={variant}
      color={color}
      size={size}
      disabled={disabled}
      fullWidth={fullWidth}
      onClick={onClick}
      sx={sx}
      {...props}
    >
      {children}
    </Button>
  )
}
