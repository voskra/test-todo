import * as React from 'react';
import { Container, Typography, AppBar, Toolbar, Box } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { ToDo } from './pages/ToDo';
import css from './App.module.css';

export const App = React.memo(() => (
  <>
    <CssBaseline />
    <AppBar position="fixed">
      <Toolbar>
        <Typography component="div" variant="h6">
          ToDo Page
        </Typography>
      </Toolbar>
    </AppBar>
    <Toolbar />
    <Container className={css.container}>
      <Box className={css.box} sx={{ my: 2 }}>
        <ToDo />
      </Box>
    </Container>
  </>
));

App.displayName = nameof(App);
