import React, { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { Box, Container, CircularProgress, Stack, LinearProgress} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import AdviseesTable from '../../components/Table/AdviseesTable'
import axiosInstance from '../../utilities/axiosInstance';
import AdviserCard from '../../components/Cards/AdviserCard'


const Home = () => {

  const [userInfo, setUserInfo] = useState(null);
  const [advisees, setAdvisees] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
        setIsLoading(false);
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
    <Container maxWidth="xl">
      <Navbar user={userInfo}/>
      {isLoading ? (<LinearProgress />) :(
        <Stack direction="row" spacing={2} justifyContent={"space-evenly"}>
          <AdviserCard userInfo={userInfo} />
          <Box>
          {isLoading ? (
              <CircularProgress sx={{ margin: 'auto' }} /> 
            ) : (
            <AdviseesTable advisees={advisees} />)}
          </Box>
        </Stack>
      )}
    </Container>
  )
}

export default Home