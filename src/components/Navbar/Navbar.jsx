import React from 'react';
import { AppBar, Button, Typography} from '@mui/material/';
import { useNavigate } from 'react-router-dom';

const Navbar = ({user}) => {
  
  console.log(user)
  
  const navigate = useNavigate();

  const onLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <AppBar position="static" color="primary" sx ={{p:2, mb:2, flexDirection:'row'}}>
      <Typography variant="h4" sx={{ fontSize: { sm: 20, md: 24 }, flexGrow: 1}}>
        Advising and Checklist System
      </Typography>
      {user?<Button color="inherit" onClick={onLogout}>Logout</Button>:null}
      </AppBar>
    )
}

export default Navbar