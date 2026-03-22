import { Typography } from '@mui/material'
import { textStyles } from '../../../utils/textStyles'
import { colors } from '../../../utils/colors'

export const H1Bold40 = ({ children, color = colors.black, sx = {}, ...props }) => (
  <Typography sx={{ ...textStyles.H1_Bold_40, color, ...sx }} {...props}>
    {children}
  </Typography>
)

export const H1Regular32 = ({ children, color = colors.black, sx = {}, ...props }) => (
  <Typography sx={{ ...textStyles.H1_Regular_32, color, ...sx }} {...props}>
    {children}
  </Typography>
)

export const H1Bold32 = ({ children, color = colors.black, sx = {}, ...props }) => (
  <Typography sx={{ ...textStyles.H1_Bold_32, color, ...sx }} {...props}>
    {children}
  </Typography>
)

export const H2Bold24 = ({ children, color = colors.black, sx = {}, ...props }) => (
  <Typography sx={{ ...textStyles.H2_Bold_24, color, ...sx }} {...props}>
    {children}
  </Typography>
)

export const H2Regular24 = ({ children, color = colors.black, sx = {}, ...props }) => (
  <Typography sx={{ ...textStyles.H2_Regular_24, color, ...sx }} {...props}>
    {children}
  </Typography>
)

export const H2Raleway24 = ({ children, color = colors.black, sx = {}, ...props }) => (
  <Typography sx={{ ...textStyles.H2_Raleway_24, color, ...sx }} {...props}>
    {children}
  </Typography>
)

export const BodyBold20 = ({ children, color = colors.black, sx = {}, ...props }) => (
  <Typography sx={{ ...textStyles.Body_Bold_20, color, ...sx }} {...props}>
    {children}
  </Typography>
)

export const BodyRegular20 = ({ children, color = colors.black, sx = {}, ...props }) => (
  <Typography sx={{ ...textStyles.Body_Regular_20, color, ...sx }} {...props}>
    {children}
  </Typography>
)

export const BodyBold16 = ({ children, color = colors.black, sx = {}, ...props }) => (
  <Typography sx={{ ...textStyles.Body_Bold_16, color, ...sx }} {...props}>
    {children}
  </Typography>
)

export const BodyRegular16 = ({ children, color = colors.black, sx = {}, ...props }) => (
  <Typography sx={{ ...textStyles.Body_Regular_16, color, ...sx }} {...props}>
    {children}
  </Typography>
)

export const BodyRegular13 = ({ children, color = colors.black, sx = {}, ...props }) => (
  <Typography sx={{ ...textStyles.Body_Regular_13, color, ...sx }} {...props}>
    {children}
  </Typography>
)

export const BodyRegular10 = ({ children, color = colors.black, sx = {}, ...props }) => (
  <Typography sx={{ ...textStyles.Body_Regular_10, color, ...sx }} {...props}>
    {children}
  </Typography>
)
