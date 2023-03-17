import React from 'react'
import Typography from '@mui/material/Typography'
import { Box, Button, Divider, List, ListItem, ListItemText, InputLabel, TextField } from '@mui/material'
import { useFormik } from "formik";
import { basicSchema } from '../../assets/Schema'
import Theme from '../../assets/Theme'
import Heading from '../../assets/components/Heading'



function Login() {

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: basicSchema,
    onSUbmit: (values) => {
      console.log(values);
    }
  })

  return (
    <Box sx={{width:'80%', margin:'auto'}}>
      <Typography variant="h3" color="secondary" align='center' sx={{ my: '50px' }}>
        Home {'> '}
        <span style={{ color: Theme.palette.primary.main }}>Login</span>
      </Typography>
      <Heading title='Login or Create an Account' />
      <Box sx={{display:'flex', width:'100%',gap:4}}>
        <Box sx={{flex: '1'}}>
          <Typography variant="h2" color="secondary">New Customer</Typography>
          <Divider sx={{ my: '20px' }} />
          <Typography variant="body2" color="secondary.light" sx={{ mb: '19px' }}>Registration is free and easy</Typography>
          <List component="ul" sx={{ '& li::before': { content: '"•"', fontSize: '1.2rem' }, '& li': { margin: '-17px 0' } }}>
            <ListItem>
              <ListItemText primary="&nbsp;Faster checkout" />
            </ListItem>
            <ListItem>
              <ListItemText primary="&nbsp;Save multiple shipping addresses" />
            </ListItem>
            <ListItem>
              <ListItemText primary="&nbsp;view and track orders and more" />
            </ListItem>
          </List>
          <Button variant='contained' sx={{ mt: '165px', width: '220px', height: '45px' }}>Create an Account</Button>
        </Box>
        <Box sx={{flex: '1'}}>
          <Typography variant="h2" color="secondary">New Customer</Typography>
          <Divider sx={{ my: '20px' }} />
          <Typography variant="body2" color="secondary.light" sx={{ mb: '20px' }}>If you have an account with us, please log in.</Typography>

          <form onSubmit={formik.handleSubmit}>

            <Box sx={{mb:'40px'}}>
              <InputLabel htmlFor="email " sx={{ mb: '15px', color: Theme.palette.secondary.main }}>Email Address *</InputLabel>
              <TextField
                id="email"
                name="email"
                type="email"
                variant="outlined"
                {...formik.getFieldProps("email")}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                size='small'
                sx={{width:'75%'}}
              />
            </Box>

            <Box sx={{mb:'60px'}}>
              <InputLabel htmlFor="password" sx={{ mb: '15px', color: Theme.palette.secondary.main }}>Password *</InputLabel>
              <TextField
                id="password"
                name="password"
                type="password"
                variant="outlined"
                {...formik.getFieldProps("password")}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
                size='small'
                sx={{width:'75%'}}
              />
            </Box>

            <Button type="submit" variant="contained" color="primary" sx={{ width: '100px', height: '45px', mb: '80px' }}>
              Login
            </Button>
          </form>
        </Box>
      </Box>
    </Box>
  )
}

export default Login