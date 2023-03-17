import React from 'react'
import Typography from '@mui/material/Typography'
import { Divider } from '@mui/material'

function Heading(props) {
  return (
    <>
        <Typography variant="h1" color="initial" align='center' sx={{ fontWeight: 'bold' , mt:'50px', }}>
        {props.title}
      </Typography>
      <Divider sx={{ width: '9%', margin: 'auto', borderTop: '2px solid #f14d54', mt: '25px', mb: '50px' }} />
    </>
  )
}

export default Heading