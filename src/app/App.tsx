import React from 'react';
import '../css/App.css';
import { Button, Container, Typography, Stack, Box } from '@mui/material';
import { RippleBadge } from './MaterialTheme/styled';

function App() {
  return (
    <Container maxWidth="sm">
      <Stack direction="column" spacing={2} alignItems="center">
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h4">
            Create React App with TypeScript and Redux
          </Typography>
        </Box>
        <Box>
          <RippleBadge badgeContent={4}>
            <Button variant="contained" color="primary">
              Contained
            </Button>
          </RippleBadge>
        </Box>
      </Stack>
    </Container>
  );
}

export default App;
