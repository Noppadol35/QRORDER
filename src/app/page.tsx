"use client"
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    // Implement username and password validation here

    if (username === "admin" && password === "password123") {
      console.log("Logged in!");
    } else {
      alert("Invalid username or password!");
    }
  };

  const theme = useTheme(); // Access the theme object

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "400px",
        margin: "0 auto",
      }}
    >
      <Typography variant="h4" sx={{ marginBottom: "20px" }}>
        เข้าสู่ระบบ!
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="ชื่อผู้ใช้:"
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          margin="normal"
          fullWidth
        />
        <TextField
          label="รหัสผ่าน:"
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          margin="normal"
          fullWidth
        />
        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{ backgroundColor: theme.palette.primary.main }} // Use theme object
        >
          เข้าสู่ระบบ
        </Button>
      </form>
    </Box>
  );
}
