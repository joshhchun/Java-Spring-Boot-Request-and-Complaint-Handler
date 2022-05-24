import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


const ResponsiveAppBar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "gray"}}>
      <Container maxWidth="xl">
        <Toolbar>
          <Typography
            variant="h5"
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'roboto',
              fontWeight: 800,
              letterSpacing: '.2rem',
              color: "inherit",
              textDecoration: 'none',
            }}
          >
            REQUEST MANAGER
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
