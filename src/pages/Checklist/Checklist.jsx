import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { Container, Box, Button } from '@mui/material';
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

  const getAllCourses = async () => {
    try {
      const response = await axiosInstance.get(`/advisers/getChecklist/${data.student_id}`);
      if (response.data) {
        setCourses(response.data.checklist);
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
    <Container>
      <Navbar user={userInfo}/>
      <Box sx={{ display: 'flex', gap: 2, mx: 2, my: 'auto'}}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 , alignItems: 'center'}}>
          <StudendCard studentInfo={data} />
          <Button variant="contained" sx={{ height: 40 , width: "100%"}} onClick={ handleTagged }>{data.status?"Remove Tag Status":"Tag Student"}</Button>
        </Box>
        <CoursesTable courses={courses} />
      </Box>
    </Container>
  );
}

export default Checklist