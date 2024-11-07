import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {Typography, TextField, Button, Card, Box} from '@mui/material/'
import axiosInstance from '../../utilities/axiosInstance';

const LoginCard = () => {

  const [adviserID, setAdviserID] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("/advisers/login", {
        adviser_id:adviserID,
        password:password
      });
      if(response.data) {
        localStorage.setItem("token", response.data.accessToken);
        navigate("/Home");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <Card sx={{ p:3, boxShadow:3 }} variant="outlined">
        <Typography variant="h3" color="text">Welcome Back!</Typography>
        <Typography color="textSecondary" gutterBottom>Please Log-in to your account</Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 , mt: 2}} component={"form"} onSubmit={handleLogin}>
          <TextField
            label="Adviser ID"
            type='text'
            variant="outlined"
            required
            autoComplete="off"
            onChange={(e) => setAdviserID(e.target.value)}/>
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            required
            autoComplete="off"
            onChange={(e) => setPassword(e.target.value)}/>    
          <Button variant="contained" sx={{p:2}} type="submit">Login</Button>
        </Box>
      </Card>
    </Box>
  )
}

export default LoginCard