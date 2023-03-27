import { TextField, Box, Button, TableContainer, Table, TableCell, TableHead, TableRow, TableBody } from '@mui/material'
import React from 'react'
import Heading from '../../assets/components/Heading'
import { columns, bookData } from './ProductData'
import { useState } from 'react'

function ProductPage() {

  return (
    <Box sx={{ width: '80%', m: 'auto' }} >
      <Heading title='Product Page' />
      <Box sx={{ mx: '10px', display: 'flex', justifyContent: 'right', gap: '10px' }}>
        <TextField
          id="search"
          placeholder='What are you looking for..'
          InputProps={{ sx: { width: '300px', backgroundColor: 'white' } }}
          size='small'
        />
        <Button variant='contained' >Add Product</Button>
      </Box>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {bookData.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.title}</TableCell>
                <TableCell>{row.price}</TableCell>
                <TableCell>{row.query}</TableCell>
                <TableCell>
                  <Box sx={{display:'flex', gap:'10px', justifyContent:'right', }}>
                    <Button
                      type="button"
                      className="green-btn btn"
                      variant="outlined"
                      color="secondary1"
                      sx={{width:'80px', height:'30px'}}
                    >
                      Edit
                    </Button>
                    <Button
                      type="button"
                      variant='outlined'
                      className="btn pink-btn"
                      color="primary"
                      sx={{width:'80px', height:'30px'}}
                    >
                      Delete
                    </Button>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default ProductPage