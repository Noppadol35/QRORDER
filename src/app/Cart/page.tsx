import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, ThemeProvider } from '@mui/material';





export default function Cart() {
  return (
  <div>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          โต๊ะที่ 1
        </Typography>
        <Button color="inherit">Cart</Button>
      </Toolbar>
    </AppBar>

    <Box
      height={70}
      width="97%"
      my={4}
      display="flex"
      alignItems="center"
      gap={4}
      p={2}
      sx={{ border: '2px solid grey' }}
    >

        {/* รูปภาพ */}
        <img src="/public/kp.jpg" alt="kp Image" style={{ width: '100px', height: '100px' }} />
        {/* ข้อความเพิ่มเติม */}
        <Typography variant="body1" sx={{ ml: 2 }}>N1 Image</Typography>

    </Box>

  </div>
  );
}
