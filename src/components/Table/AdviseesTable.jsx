import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import getYear from '../../utilities/getYear';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  fontWeight: 'bold',
  backgroundColor: theme.palette.grey[200]
}));

const AdviseesTable = ({advisees}) => {

  const navigate = useNavigate();

  return (
    <TableContainer component={Paper} >
      <Table>
        <TableHead>
          <TableRow>
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
              {console.log(advisee.student_id)}
              {console.log(advisee.status)}
              <TableCell>{advisee.status?"Tagged":"Not Tagged"}</TableCell>
              <TableCell>
                <Button variant="contained" color="primary" size="small"
                  onClick={() => {
                    navigate(`/viewChecklist`, {state: advisee} );
                  }}>
                  View Checklist
                </Button>
              </TableCell>
          </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default AdviseesTable