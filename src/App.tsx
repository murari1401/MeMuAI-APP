iimport { Box, Container, AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Routes, Route, Link } from 'react-router-dom';

const Home = () => (
  <Box sx={{ mt: 4 }}>
    <Typography variant="h4" component="h1" gutterBottom>
      Welcome to MeMu AI
    </Typography>
    <Typography variant="body1" paragraph>
      Your intelligent companion for enhanced productivity.
    </Typography>
  </Box>
);

const Features = () => (
  <Box sx={{ mt: 4 }}>
    <Typography variant="h4" component="h1" gutterBottom>
      Features
    </Typography>
    <Typography variant="body1" paragraph>
      Discover what MeMu AI can do for you.
    </Typography>
  </Box>
);

export default function App() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            MeMu AI
          </Typography>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/features">
            Features
          </Button>
        </Toolbar>
      </AppBar>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
        </Routes>
      </Container>
    </Box>
  );
}