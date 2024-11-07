import React from 'react'
import LoginCard from '../../components/Cards/LoginCard'
import Navbar from '../../components/Navbar/Navbar'
import { Container } from '@mui/material'

const Login = () => {
  return (
    <Container>
      <Navbar />
      <LoginCard />
    </Container>
  )
}

export default Login