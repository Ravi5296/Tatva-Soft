import React from 'react'
import TextField from '@mui/material/TextField'
import { Button, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

function SearchBar(props) {

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 10,
            height: '80px',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgb(243,243,243)'
        }}>
            <TextField
                id="search"
                placeholder='What are you looking for..'
                InputProps={{ sx: { width: '422px', backgroundColor:'white' } }}
            />

            <Button variant="contained" color="secondary1" sx={{ height: '40px', width: '129px' }}>
                <Typography variant='h4' sx={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'white' }} textTransform='none'>
                    <SearchIcon /> Search
                </Typography>
            </Button>
            <Button variant="contained" type='cancle' sx={{ height: '40px', width: '129px' }} >
                <Typography variant='h4' textTransform='none' sx={{ color: 'white' }}>
                    Cancle
                </Typography>
            </Button>
        </div>
    )
}

export default SearchBar