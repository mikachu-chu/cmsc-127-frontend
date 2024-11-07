import React, { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { Container, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import axiosInstance from '../../utilities/axiosInstance';

const Home = () => {

  const [userInfo, setUserInfo] = useState(null);

  const navigate = useNavigate();

  const getUserInfo = async () => {
    try {
      const response = await axiosInstance.get("/advisers/getUser");
      if (response.data) {
        setUserInfo(response.data.user);
      }
    } catch (error) {
      if(error.response.status == 403){
        localStorage.clear();
        navigate("/Login");
        }
    }
  };

  useEffect(() => {
    getUserInfo();
    return () => {};
  }, []);

  return (
    <Container>
      <Navbar user={userInfo}/>
      <Typography variant="h5" color="text">Hello {userInfo?.first_name} {userInfo?.middle_name} {userInfo?.last_name}!</Typography>
      <Typography variant="h6" color="text">You have the adviser ID: {userInfo?.adviser_id}</Typography>
      <Typography variant="h6" color="text">Department: {userInfo?.department}</Typography>
      <Typography variant="h6" color="text">Position: {userInfo?.position}</Typography>
    </Container>
  )
}

export default Home