import React from 'react'
import { Box, Card, CardContent, Typography, Divider, Stack } from '@mui/material';
import getYear from '../../utilities/getYear';

const StudendCard = ({studentInfo}) => {
  return (
    <Stack>
      <Card variant="outlined">
        <CardContent>
          <Stack gap={2}>
            <Box>
            <Typography variant="h4" color="primary" gutterBottom>
              Student Profile
            </Typography>
            <Divider sx={{ my: 2 }} />
              <Typography variant="subtitle1" color="textSecondary">
                Student Name:
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                {studentInfo?.first_name} {studentInfo?.middle_name.charAt(0)}. {studentInfo?.last_name}
              </Typography>
            </Box>
            <Divider />
            <Box>
              <Typography variant="subtitle1" color="textSecondary">
                Student ID:
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                {studentInfo?.student_id}
              </Typography>
            </Box>
            <Divider />
            <Box>
              <Typography variant="subtitle1" color="textSecondary">
                Year and Program:
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                {getYear(studentInfo?.year)} - {studentInfo?.program_name}
              </Typography>
            </Box>
          </Stack>
        </CardContent>
      </Card>
    </Stack>
  );
}

export default StudendCard