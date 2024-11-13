import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Box} from '@mui/material';
import axiosInstance from '../../utilities/axiosInstance';
import { responsiveFontSizes, styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import getYear from '../../utilities/getYear';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  fontWeight: 'bold',
  backgroundColor: theme.palette.grey[200]
}));

const AdviseesTable = ({advisees}) => {

  const navigate = useNavigate();

  const handleDelete = async (id) => {
    try {
      const response = await axiosInstance.delete(`/advisers/delete/${id}`);
      alert(response.data.message);
      window.location.reload(false);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <TableContainer component={Paper} >
      <Table>
        <TableHead>
          <TableRow sx={{}}>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell>Year</StyledTableCell>
            <StyledTableCell>Course</StyledTableCell>
            <StyledTableCell>Tagged</StyledTableCell>
            <StyledTableCell>Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{boxShadow: 3, borderRadius: 2}}>
          {advisees.map((advisee) => (
            <TableRow key={advisee.id} sx={{hover:true}}>
              <TableCell sx={{textAlign: 'center'}}>{advisee.student_id}</TableCell>
              <TableCell>{advisee.first_name + " " + advisee.middle_name.charAt(0) + ". " + advisee.last_name}</TableCell>
              <TableCell>{getYear(advisee.year)}</TableCell>
              <TableCell>{advisee.program_name}</TableCell>
              <TableCell>{advisee.status?"Tagged":"Not Tagged"}</TableCell>
              <TableCell>
                <Box sx={{display: 'flex', gap: 1}}>
                  <Button variant="contained" color="primary" size="small"
                    onClick={() => {
                      navigate(`/viewChecklist`, {state: advisee} );
                    }}>
                    View Checklist
                  </Button>
                  <Button variant="contained" color="warning" size="small" onClick={() => handleDelete(advisee.student_id)}>
                    Expel
                  </Button>
                </Box>
              </TableCell>
          </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default AdviseesTable