
// src/pages/Dashboard.jsx
import React from 'react';
import { Box, Button, Typography, Container } from '@mui/material';
import { useRecoilValue } from 'recoil';
import { userState } from '../recoil/userState'; // Assuming you have a userAtom to manage authentication state

const Dashboard = () => {
  const user = useRecoilValue(userState);

  return (
    <Container maxWidth="lg" sx={{ padding: 4, backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <Box sx={{ textAlign: 'center', marginBottom: 4 }}>
        <Typography variant="h4" gutterBottom>
          Welcome to the Quizzy Dashboard!
        </Typography>
        <Box sx={{ padding: 2, backgroundColor: '#fff', borderRadius: 1, boxShadow: 2 }}>
          <Typography variant="h5" gutterBottom>
            Hello, {user ? user.name : 'Student'}!
          </Typography>
          <Button variant="contained" color="primary" sx={{ marginTop: 2 }}>
            View Quizzes
          </Button>
          <Button variant="contained" color="secondary" sx={{ marginLeft: 2, marginTop: 2 }}>
            View Assignments
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Dashboard;
