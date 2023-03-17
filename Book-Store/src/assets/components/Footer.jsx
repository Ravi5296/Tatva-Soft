import { Box } from '@mui/system'
import React from 'react'
import Typography from '@mui/material/Typography'
import logo from '../TatvaSoftLogo.png'


function Footer() {
    return (
        <Box sx={{py:'25px', backgroundColor: 'rgb(243,243,243)'}}>
            <Typography variant="body2" color="secondary.light" align='center'>
                <Box
                    component="img"
                    sx={{
                        width: 250
                    }}
                    alt="The house from the offer."
                    src={logo}/>
                <Typography sx={{mt:'10px'}}>
                &#169; 2023 Tatvasoft.com. All rights reserved.
                </Typography>
            </Typography>
        </Box>
    )
}

export default Footer