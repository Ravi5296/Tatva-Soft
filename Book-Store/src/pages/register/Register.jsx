import { Divider, Typography, Grid } from '@mui/material'
import React from 'react'
import Theme from '../../assets/Theme'
import { TextField, Button, InputLabel } from "@mui/material"
import { useFormik } from "formik";
import { basicSchema } from '../../assets/Schema'
import Heading from '../../assets/components/Heading';
import { toast } from 'react-toastify';

function Register() {

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: basicSchema,
    onSubmit: (values) => {
      toast.success('successfully registered')
      console.log(values);
    }
  })

  return (
    <div>
      <Typography variant="h3" color="secondary" align='center' sx={{ my: '50px' }}>
        Home {'> '}
        <span style={{ color: Theme.palette.primary.main }}> Create an Account</span>
      </Typography>
      <Heading title='Login or Create an Account' />

      <div style={{ width: '80%', margin: 'auto' }}>
        <Typography variant="h2" color="initial">Personal information</Typography>
        <Divider sx={{ my: '20px' }} />
        <Typography variant="body2" color="secondary.light" sx={{ mb: '20px' }}>
          Please enter the following information to create your account
        </Typography>

        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <InputLabel htmlFor="firstName" sx={{ mb: '15px', color: Theme.palette.secondary.main }}>First Name *</InputLabel>
              {/* <InputLabel htmlFor='firstname' color='secondary.main' sx={{mb:'15px'}}>First Name</InputLabel> */}
              <TextField
                id="firstName"
                name="firstName"
                type="text"
                variant="outlined"
                fullWidth
                {...formik.getFieldProps("firstName")}
                error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                helperText={formik.touched.firstName && formik.errors.firstName}
                size='small'
              />
            </Grid>

            <Grid item xs={6}>
              <InputLabel htmlFor="lastName" sx={{ mb: '15px', color: Theme.palette.secondary.main }}>Last Name *</InputLabel>
              <TextField
                id="lastName"
                name="lastName"
                type="text"
                variant="outlined"
                fullWidth
                {...formik.getFieldProps("lastName")}
                error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                helperText={formik.touched.lastName && formik.errors.lastName}
                size='small'
              />
            </Grid> 

    
            <Grid item xs={12} sx={{ mt: '40px', mb: '70px' }}>
              <InputLabel htmlFor="email " sx={{ mb: '15px', color: Theme.palette.secondary.main }}>Email Address *</InputLabel>
              <TextField
                id="email"
                name="email"
                type="email"
                variant="outlined"
                fullWidth
                {...formik.getFieldProps("email")}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                size='small'
              />
            </Grid>
          </Grid>


          <Typography variant="h2" color="initial">Login information</Typography>
          <Divider sx={{ my: '20px' }} />

          <Grid container spacing={2}>
            <Grid item xs={6}>
              <InputLabel htmlFor="password" sx={{ mb: '15px', color: Theme.palette.secondary.main }}>Password *</InputLabel>
              <TextField
                id="password"
                name="password"
                type="password"
                variant="outlined"
                fullWidth
                {...formik.getFieldProps("password")}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
                size='small'
              />
            </Grid>

            <Grid item xs={6}>
              <InputLabel htmlFor="confirmPassword" sx={{ mb: '15px', color: Theme.palette.secondary.main }}>Confirm Password *</InputLabel>
              <TextField
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                variant="outlined"
                fullWidth
                {...formik.getFieldProps("confirmPassword")}
                error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                size='small'
              />
            </Grid>

            <Grid item xs={1}>
              <Button type="submit" variant="contained" color="primary" sx={{ width: '136px', height: '45px', mt: '60px', mb: '80px' }}>
                Register
              </Button>
            </Grid>
          </Grid>
        </form>

      </div>
    </div >
  ) 
}

export default Register