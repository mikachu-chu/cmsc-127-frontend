import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Tooltip} from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  fontWeight: 'bold',
  backgroundColor: theme.palette.grey[200]
}));

const CoursesTable = ({courses}) => {
  return (
    <TableContainer component={Paper} >
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell>Course</StyledTableCell>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell>Category</StyledTableCell>
            <StyledTableCell>Units</StyledTableCell>
            <StyledTableCell>Status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{boxShadow: 3, borderRadius: 2}}>
          {courses.map((course) => (
            
            <TableRow key={course.id} sx={{}}>
              <TableCell>{course.course_id}</TableCell>
              <Tooltip title={course.description} followCursor>
              <TableCell>{course.name}</TableCell>
              </Tooltip>
              <TableCell>{course.category}</TableCell>
              <TableCell>{course.units===0 ? "(3)" : course.units}</TableCell>
              <TableCell>{course.status?"Taken":"Not Taken"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default CoursesTable