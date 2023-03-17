import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { Box} from '@mui/system'
import logo from '../TatvaSoftLogo.png'
import { Button, Link } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchBar from './SearchBar'


function Header() {
  return (
    <>
      <AppBar position='static' color="transparent" sx={{ height: '92px', boxShadow: 'none', borderTop: '10px solid #f14d54'}}>
        <Toolbar sx={{height: '92px', justifyContent: 'space-between', width:'80%', m:'auto' }}>
        <Box
        component="img"
        sx={{
          width: 250
        }}
        alt="The house from the offer."
        src={logo}
      />
          <Typography variant="body1" color="initial" sx={{ fontSize: '14px', }}>
            <Link href='#' underline='none' sx={{ px: 2, borderRight: 1 }} >
              {'Login'}
            </Link>
            <Link href='#' underline='none' sx={{ px: 2 }} >
              {'Register'}
            </Link>
            <Button variant='outlined' sx={{borderColor: '#bbbbbb' }} >
              <ShoppingCartIcon /> &nbsp; 0
              <Typography variant="body1" color="initial"> &nbsp; Cart </Typography>
            </Button>
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header