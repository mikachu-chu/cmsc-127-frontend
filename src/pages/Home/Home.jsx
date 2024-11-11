import React, { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { Box, Container, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import AdviseesTable from '../../components/Table/AdviseesTable'
import axiosInstance from '../../utilities/axiosInstance';
import AdviserCard from '../../components/Cards/AdviserCard'

const Home = () => {

  const [userInfo, setUserInfo] = useState(null);
  const [advisees, setAdvisees] = useState([]);

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

  const getAllAdvisees = async () => {
    try {
      const response = await axiosInstance.get("/advisers/getAllAdvisees");
      if (response.data) {
        setAdvisees(response.data.advisees);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserInfo();
    getAllAdvisees();
    return () => {};
  }, []);

  return (
    <Container>
      <Navbar user={userInfo}/>
      <Box sx={{ display: 'flex', gap: 2, mx: 2, my: 'auto'}}>
        <AdviserCard userInfo={userInfo} />
        <Box>
          <AdviseesTable advisees={advisees} />
        </Box>
      </Box>
    </Container>
  )
}

export default Home