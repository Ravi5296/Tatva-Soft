import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/system'
import logo from '../images/TatvaSoftLogo.png'
import { Button } from '@mui/material'
import { NavLink } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchBar from './SearchBar'
import { styled } from "@mui/material/styles";
import Theme from '../Theme'

const NavLinkWithSx = styled(NavLink)();


function Header() {
  return (
    <>
      <AppBar position='static' color="transparent" sx={{ height: '92px', boxShadow: 'none', borderTop: '10px solid #f14d54' }}>
        <Toolbar sx={{ height: '92px', justifyContent: 'space-between', width: '80%', m: 'auto' }}>
          <Box
            component="img"
            sx={{
              width: 250
            }}
            alt="The house from the offer."
            src={logo}
          />
          <Typography variant="body1" color="initial" sx={{ fontSize: '14px' }}>
            <NavLinkWithSx
              to={"/Login"}
              sx={{
                color: "primary.main", // Use primary color from theme
                textDecoration: "none", // Remove underline
                borderRight: 2,
                borderColor: Theme.palette.secondary.light,
                px : 2
                
              }}
            >
              Login
            </NavLinkWithSx>
            <NavLinkWithSx
              to={"/Register"}
              sx={{
                color: "primary.main", // Use primary color from theme
                textDecoration: "none", // Remove underline
                px : 2

              }}
            >
              Register
            </NavLinkWithSx>
            <Button variant='outlined' sx={{ borderColor: '#bbbbbb' }} >
              <ShoppingCartIcon /> &nbsp; 0
              <Typography variant="body1" color="initial"> &nbsp; Cart </Typography>
            </Button>
          </Typography>
        </Toolbar>
      </AppBar>
      <SearchBar />
    </>
  )
}

export default Header