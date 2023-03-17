import { Button, Table, TextField } from '@mui/material'
import React from 'react'
import Heading from './assets/components/Heading'

function ProductCrud() {
  return (
    <div>
      <Heading title='Product Crud'/>
      <TextField placeholder='Search...' size='small' />
      <Button variant="contained" sx={{mx:'10px'}}>Add Product</Button>
    </div>
  )
}

export default ProductCrud