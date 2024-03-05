"use client"
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, ThemeProvider, IconButton, 
Menu, MenuItem} from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';




export default function Cart() {




  return (
  <div>
    {/* Navbar */}
    <AppBar position="static">
      <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 2 }}>
      <IconButton color="inherit" aria-label="cart">
              <ClearOutlinedIcon />
            </IconButton>
            </Typography>

        <Typography variant="h6" component="div" sx={{ flexGrow: 0 }}>
        <h3>โต๊ะที่ 199</h3>
        </Typography>
        

 
        
        

      </Toolbar>
    </AppBar>

    <Box
      height={150}
      width="97%"
      my={4}
      display="flex"
      alignItems="center"
      gap={4}
      p={2}
      sx={{ border: '2px solid grey' }}
    >
{/* รูปภาพอาหาร */}
<ThemeProvider
      theme={{
        palette: {
          primary: {
            main: '#007FFF',
            dark: '#0066CC',
          },
        },
      }}
    >
      <Box
        sx={{
          width: 150,
          height: 150,
          borderRadius: 1,
          bgcolor: 'primary.main',
          '&:hover': {
            bgcolor: 'primary.dark',
          },
        }}
      />
    </ThemeProvider>

    </Box>
  </div>

  



  );
}


