import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Tooltip, Box} from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  fontWeight: 'bold',
  backgroundColor: theme.palette.grey[200]
}));

const CoursesTable = ({courses}) => {
  const FirstSemFirstYear = [];
  const SecondSemFirstYear = [];
  const FirstSemSecondYear = [];
  const SecondSemSecondYear = [];
  courses.forEach(element => {
    if(element.term == "1st Semester" && element.year == "1st Year") FirstSemFirstYear.push(element);
    if(element.term == "2nd Semester" && element.year == "1st Year") SecondSemFirstYear.push(element);
    if(element.term == "1st Semester" && element.year == "2nd Year") FirstSemSecondYear.push(element);
    if(element.term == "2nd Semester" && element.year == "2nd Year") SecondSemSecondYear.push(element);
  });

  console.log(FirstSemFirstYear);
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
    <TableContainer component={Paper} sx={{ mb: 2 }}>
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell colSpan={6} sx={{ fontWeight: 'bold', textAlign: 'center'}}>1st Year</StyledTableCell>
          </TableRow>
          <TableRow>
            <StyledTableCell sx={{ textAlign: 'center' }}>Course</StyledTableCell>
            <StyledTableCell sx={{ textAlign: 'center' }}>Name</StyledTableCell>
            <StyledTableCell sx={{ textAlign: 'center' }}>Status</StyledTableCell>
            <StyledTableCell sx={{ textAlign: 'center' }}>Course</StyledTableCell>
            <StyledTableCell sx={{ textAlign: 'center' }}>Name</StyledTableCell>
            <StyledTableCell sx={{ textAlign: 'center' }}>Status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{ boxShadow: 3, borderRadius: 2 }}>
          {FirstSemFirstYear.map((course, index) => (
            <TableRow key={course.id} sx={{}}>
              <TableCell sx={{ textAlign: 'center' }}>{course.course_id}</TableCell>
              <Tooltip title={course.description} followCursor>
                <TableCell sx={{ textAlign: 'center' }}>{course.name}</TableCell>
              </Tooltip>
              <TableCell sx={{ textAlign: 'center' }}>{course.status ? "Taken" : "Not Taken"}</TableCell>
              {SecondSemFirstYear[index] ? (
                <>
                  <TableCell sx={{ textAlign: 'center' }}>{SecondSemFirstYear[index].course_id}</TableCell>
                  <Tooltip title={SecondSemFirstYear[index].description} followCursor>
                    <TableCell sx={{ textAlign: 'center' }}>{SecondSemFirstYear[index].name}</TableCell>
                  </Tooltip>
                  <TableCell sx={{ textAlign: 'center' }}>{SecondSemFirstYear[index].status ? "Taken" : "Not Taken"}</TableCell>
                </>
              ) : (
                <TableCell colSpan={3} sx={{ textAlign: 'center' }} />
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <TableContainer component={Paper} sx={{ mt: 2 }}>
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell colSpan={6} sx={{ fontWeight: 'bold', textAlign: 'center' }}>2nd Year</StyledTableCell>
          </TableRow>
          <TableRow>
            <StyledTableCell sx={{ textAlign: 'center' }}>Course</StyledTableCell>
            <StyledTableCell sx={{ textAlign: 'center' }}>Name</StyledTableCell>
            <StyledTableCell sx={{ textAlign: 'center' }}>Status</StyledTableCell>
            <StyledTableCell sx={{ textAlign: 'center' }}>Course</StyledTableCell>
            <StyledTableCell sx={{ textAlign: 'center' }}>Name</StyledTableCell>
            <StyledTableCell sx={{ textAlign: 'center' }}>Status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{ boxShadow: 3, borderRadius: 2 }}>
          {FirstSemSecondYear.map((course, index) => (
            <TableRow key={course.id} sx={{}}>
              <TableCell sx={{ textAlign: 'center' }}>{course.course_id}</TableCell>
              <Tooltip title={course.description} followCursor>
                <TableCell sx={{ textAlign: 'center' }}>{course.name}</TableCell>
              </Tooltip>
              <TableCell sx={{ textAlign: 'center' }}>{course.status ? "Taken" : "Not Taken"}</TableCell>
              {SecondSemSecondYear[index] ? (
                <>
                  <TableCell sx={{ textAlign: 'center' }}>{SecondSemSecondYear[index].course_id}</TableCell>
                  <Tooltip title={SecondSemSecondYear[index].description} followCursor>
                    <TableCell sx={{ textAlign: 'center' }}>{SecondSemSecondYear[index].name}</TableCell>
                  </Tooltip>
                  <TableCell sx={{ textAlign: 'center' }}>{SecondSemSecondYear[index].status ? "Taken" : "Not Taken"}</TableCell>
                </>
              ) : (
                <TableCell colSpan={3} sx={{ textAlign: 'center' }} />
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
  )
}

export default CoursesTable