import { Typography, Button, Box } from '@mui/material'

export const App = () => {
  return (
    <Box sx={{ padding: '40px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Button variant="contained" color="primary">
        primary
      </Button>
      <Button variant="contained" color="error">
        error
      </Button>
      <Button variant="contained" color="warning">
        warning
      </Button>

      <Box sx={{ backgroundColor: 'green.main', padding: '10px' }}>
        <Typography>green.main</Typography>
      </Box>
      <Box sx={{ backgroundColor: 'yellow.main', padding: '10px' }}>
        <Typography>yellow.main</Typography>
      </Box>
    </Box>
  )
}
