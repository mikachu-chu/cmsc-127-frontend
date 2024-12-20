import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { Container, Box, Button, LinearProgress, Stack } from '@mui/material';
import axiosInstance from '../../utilities/axiosInstance';
import StudendCard from '../../components/Cards/StudendCard';
import Navbar from '../../components/Navbar/Navbar';
import CoursesTable from '../../components/Table/CoursesTable';
import { useNavigate } from 'react-router-dom';

const Checklist = () => {
  const location = useLocation();
  const data = location.state;

  const [userInfo, setUserInfo] = useState(null);
  const [courses, setCourses] = useState([]);
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

  const handleTagged = async () => {
    try {
      const response = await axiosInstance.post(`/advisers/tagStudent/`, {
        student_id: data.student_id,
        status: data.status}
      );
      navigate("/Home");
    } catch (error) {
      console.log(error);
    }
  };

  const handleBack = () => {
    navigate("/Home");
  };

  const getAllCourses = async () => {
    try {
      const response = await axiosInstance.get(`/advisers/getChecklist/${data.student_id}`);
      if (response.data) {
        setCourses(response.data.checklist);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserInfo();
    getAllCourses();
    return () => {};
  }, []);

  return (
    <Container maxWidth="xl">
      <Navbar user={userInfo}/>
      { isLoading ? (
        <LinearProgress />
      ) : (
        <Stack direction="row" spacing={2}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 , alignItems: 'center', width: '30%'}}>
          <StudendCard studentInfo={data} />
          <Button variant="contained" color="primary" sx={{ height: 40 , width: "100%"}} onClick={ handleTagged }>{data.status?"Remove Tag Status":"Tag Student"}</Button>
          <Button variant="contained" color="secondary" sx={{ height: 40 , width: "100%"}} onClick={ handleBack }>Back</Button>
        </Box>
        <CoursesTable courses={courses} />
      </Stack>
      )}
    </Container>
  );
}

export default Checklist