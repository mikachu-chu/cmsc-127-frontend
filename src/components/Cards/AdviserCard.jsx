import React from 'react';
import { Box, Card, CardContent, Typography, Divider, Stack} from '@mui/material';

const AdviserCard = ({ userInfo }) => {
  return (
    <Stack>
      <Card variant="outlined" sx={{boxShadow:3}}>
        <CardContent>
          <Typography variant="h4" color="primary" gutterBottom>
            Adviser Profile
          </Typography>
          <Divider sx={{ my: 2 }} />
          
          <Typography variant="h6" color="textSecondary">
            Hello, <strong>{userInfo?.first_name} {userInfo?.middle_name.charAt(0)}. {userInfo?.last_name}</strong>!
          </Typography>
          
          <Box sx={{ mt: 3 }}>
            <Typography variant="subtitle1" color="textSecondary">
              Adviser ID:
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
              {userInfo?.adviser_id}
            </Typography>

            <Divider sx={{ my: 2 }} />

            <Typography variant="subtitle1" color="textSecondary">
              Department:
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
              {userInfo?.department}
            </Typography>

            <Divider sx={{ my: 2 }} />

            <Typography variant="subtitle1" color="textSecondary">
              Position:
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
              {userInfo?.position}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Stack>
  )
}

export default AdviserCard