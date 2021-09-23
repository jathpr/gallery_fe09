import {
  Avatar,
  Box,
  Button,
  Container,
  createTheme,
  CssBaseline,
  Grid,
  Input,
  ThemeProvider,
  Typography,
} from "@material-ui/core";
import { useState } from "react";

const theme = createTheme();

export const SignIn = ({ setUser }) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleInputLog = (e) => {
    setLogin(e.target.value);
  };

  const handleInputPass = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `http://localhost:3033/users/?login=${login}&password=${password}`
    );
    const users = await response.json();
    if (users.length > 0) {
      setUser(users[0]);
      setLogin("");
      setPassword("");
    }
  };
  const getNewUser = async () => {
    await fetch("http://localhost:3033/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ login, password }),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <Input
              margin="normal"
              required
              fullWidth
              value={login}
              autoFocus
              onChange={handleInputLog}
              placeholder="Login"
            />
            <Input
              margin="normal"
              required
              fullWidth
              placeholder="Password"
              type="password"
              value={password}
              onChange={handleInputPass}
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Button
              onClick={getNewUser}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              New User
            </Button>
            <Grid container>
              <Grid item></Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};
